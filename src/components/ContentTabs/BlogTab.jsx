import React, { useState } from 'react';
import {
  SimpleGrid,
  Box,
  Text,
  VStack,
  HStack,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  LinkBox,
  LinkOverlay,
  Tag,
  Wrap,
  WrapItem,
  Image,
  Icon,
  Skeleton,
  Container,
  Divider,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaSearch, FaImage, FaCalendar, FaArrowRight } from 'react-icons/fa';
import { blogPosts, categories } from '../../data/blogPosts';

const MotionBox = motion(Box);

const BRAND_COLORS = {
  purple: '#B14EFF',
  cream: '#FFFBF5',
  coral: '#FF6270',
  peach: '#FFA18F',
  yellow: '#FFDB3B',
  blue: '#3BADFF'
};

const BlogCard = ({ post }) => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <LinkBox 
      as={MotionBox}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      bg={BRAND_COLORS.cream}
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="0 4px 20px rgba(177, 78, 255, 0.1)"
      h="full"
      _hover={{
        boxShadow: '0 8px 30px rgba(177, 78, 255, 0.2)',
        '& .blog-title': {
          color: BRAND_COLORS.purple
        },
        '& .read-more': {
          transform: 'translateX(5px)',
          color: BRAND_COLORS.coral
        }
      }}
    >
      <Box position="relative" h="220px">
        {!imageError ? (
          <Image
            src={post.thumbnail}
            alt={post.title}
            objectFit="cover"
            w="full"
            h="full"
            onError={() => setImageError(true)}
            fallback={<Skeleton height="220px" startColor={BRAND_COLORS.purple} endColor={BRAND_COLORS.peach} />}
          />
        ) : (
          <Box
            w="full"
            h="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bgGradient={`linear(to-br, ${BRAND_COLORS.purple}20, ${BRAND_COLORS.peach}20)`}
            />
            <VStack spacing={3} zIndex={1}>
              <Icon as={FaImage} boxSize={10} color={BRAND_COLORS.purple} />
              <Tag 
                size="sm" 
                bg={BRAND_COLORS.purple} 
                color="white" 
                borderRadius="full"
                px={4}
              >
                {post.category}
              </Tag>
            </VStack>
          </Box>
        )}
      </Box>

      <VStack align="stretch" p={6} spacing={4}>
        <HStack spacing={3} wrap="wrap">
          <Tag 
            size="sm" 
            bg={BRAND_COLORS.purple}
            color="white"
            borderRadius="full"
            px={4}
          >
            {post.category}
          </Tag>
          <HStack spacing={1} color="gray.600" fontSize="sm">
            <Icon as={FaCalendar} size="12px" />
            <Text fontFamily="Familjen Grotesk">
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </Text>
          </HStack>
        </HStack>

        <VStack align="stretch" spacing={3}>
          <LinkOverlay href={post.link} isExternal>
            <Text 
              className="blog-title"
              fontSize="xl" 
              fontWeight="600" 
              lineHeight="1.4"
              noOfLines={2}
              transition="color 0.2s"
              fontFamily="Familjen Grotesk"
            >
              {post.title}
            </Text>
          </LinkOverlay>

          {post.description && (
            <Text 
              fontSize="md" 
              color="gray.600" 
              noOfLines={2}
              flex="1"
              fontFamily="Familjen Grotesk"
            >
              {post.description}
            </Text>
          )}
        </VStack>

        <HStack 
          className="read-more"
          spacing={2} 
          color={BRAND_COLORS.purple}
          transition="all 0.2s"
        >
          <Text fontWeight="500" fontFamily="Familjen Grotesk">Read More</Text>
          <Icon as={FaArrowRight} />
        </HStack>
      </VStack>
    </LinkBox>
  );
};

const BlogTab = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = blogPosts
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || 
        post.category.toLowerCase() === selectedCategory.toLowerCase();
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <Container maxW="container.xl" p={0}>
      <VStack spacing={8} align="stretch">
        <Box bg={BRAND_COLORS.cream} p={8} borderRadius="2xl">
          <Text 
            fontSize="3xl" 
            fontWeight="700" 
            bgGradient={`linear(to-r, ${BRAND_COLORS.purple}, ${BRAND_COLORS.coral})`}
            bgClip="text"
            mb={6}
            fontFamily="Familjen Grotesk"
          >
            Content from the uni-verse.
          </Text>

          <VStack spacing={6} align="stretch">
            <Box>
              <Text fontWeight="500" mb={3} fontFamily="Familjen Grotesk">Filter by:</Text>
              <Wrap spacing={3}>
                {categories.map(category => (
                  <WrapItem key={category.value}>
                    <Button
                      size="md"
                      variant={selectedCategory === category.value ? "solid" : "outline"}
                      bg={selectedCategory === category.value ? BRAND_COLORS.purple : 'transparent'}
                      color={selectedCategory === category.value ? 'white' : BRAND_COLORS.purple}
                      borderColor={BRAND_COLORS.purple}
                      onClick={() => setSelectedCategory(category.value)}
                      borderRadius="full"
                      px={6}
                      _hover={{
                        bg: selectedCategory === category.value ? BRAND_COLORS.purple : `${BRAND_COLORS.purple}10`,
                      }}
                      fontFamily="Familjen Grotesk"
                    >
                      {category.label}
                    </Button>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>

            <Divider borderColor={`${BRAND_COLORS.purple}20`} />

            <InputGroup maxW="400px">
              <InputLeftElement pointerEvents="none">
                <Icon as={FaSearch} color={BRAND_COLORS.purple} />
              </InputLeftElement>
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                borderRadius="full"
                size="lg"
                borderColor={`${BRAND_COLORS.purple}30`}
                _focus={{
                  borderColor: BRAND_COLORS.purple,
                  boxShadow: `0 0 0 1px ${BRAND_COLORS.purple}`
                }}
                _hover={{
                  borderColor: BRAND_COLORS.purple
                }}
                fontFamily="Familjen Grotesk"
              />
            </InputGroup>
          </VStack>
        </Box>

        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }} 
          spacing={6}
          pb={8}
        >
          {filteredPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default BlogTab; 