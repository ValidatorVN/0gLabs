import React, { useState } from 'react';
import {
  Box,
  Container,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
  Image,
  LinkBox,
  LinkOverlay,
  Icon,
  Button,
  Wrap,
  WrapItem,
  Stat,
  StatNumber,
  StatLabel,
  Divider,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaSearch, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../../data/ecosystemProjects';

const BRAND_COLORS = {
  purple: '#B14EFF',
  cream: '#FFFBF5',
  coral: '#FF6270',
  peach: '#FFA18F',
  yellow: '#FFDB3B',
  blue: '#3BADFF'
};

const MotionBox = motion(Box);

const categories = [
  { value: 'all', label: 'View all' },
  { value: 'defi', label: 'DeFi' },
  { value: 'ai', label: 'AI' },
  { value: 'gaming', label: 'Gaming' },
  { value: 'infrastructure', label: 'Infrastructure' },
  { value: 'tools', label: 'Tools' }
];

const ProjectCard = ({ project }) => {
  // Default logo if not provided
  const defaultLogo = `/logos/${project.category.toLowerCase()}.png`;
  
  return (
    <LinkBox
      as={MotionBox}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      bg={BRAND_COLORS.cream}
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="0 4px 20px rgba(177, 78, 255, 0.1)"
      _hover={{
        boxShadow: '0 8px 30px rgba(177, 78, 255, 0.2)',
        '& .project-title': {
          color: BRAND_COLORS.purple
        }
      }}
    >
      <Box p={6}>
        <HStack spacing={4} align="start">
          <Image
            src={project.logo || defaultLogo}
            alt={project.name}
            boxSize="60px"
            objectFit="contain"
            borderRadius="xl"
            fallback={
              <Box
                bg={`${BRAND_COLORS.purple}10`}
                boxSize="60px"
                borderRadius="xl"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="xl" color={BRAND_COLORS.purple}>
                  {project.name[0]}
                </Text>
              </Box>
            }
          />
          <VStack align="start" spacing={2} flex={1}>
            <HStack spacing={2} wrap="wrap">
              <Tag 
                size="sm"
                bg={BRAND_COLORS.purple}
                color="white"
                borderRadius="full"
                px={4}
              >
                {project.category}
              </Tag>
              {project.featured && (
                <Tag
                  size="sm"
                  bg={BRAND_COLORS.yellow}
                  color="black"
                  borderRadius="full"
                  px={4}
                >
                  Featured
                </Tag>
              )}
              {project.tags && project.tags.length > 0 && (
                <Wrap spacing={2}>
                  {project.tags.map(tag => (
                    <WrapItem key={tag}>
                      <Tag
                        size="sm"
                        variant="outline"
                        borderColor={BRAND_COLORS.purple}
                        color={BRAND_COLORS.purple}
                        borderRadius="full"
                      >
                        {tag}
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>
              )}
            </HStack>

            <LinkOverlay href={project.url || project.website} isExternal>
              <Text
                className="project-title"
                fontSize="xl"
                fontWeight="600"
                fontFamily="Familjen Grotesk"
                transition="color 0.2s"
              >
                {project.name}
              </Text>
            </LinkOverlay>

            <Text
              color="gray.600"
              fontSize="md"
              noOfLines={2}
              fontFamily="Familjen Grotesk"
            >
              {project.description}
            </Text>

            {project.stats && (
              <SimpleGrid columns={3} gap={4} w="full" pt={2}>
                {Object.entries(project.stats).map(([key, value]) => (
                  <VStack key={key} align="start" spacing={0}>
                    <Text fontSize="sm" color="gray.500" fontFamily="Familjen Grotesk">
                      {key.toUpperCase()}
                    </Text>
                    <Text fontSize="lg" fontWeight="600" fontFamily="Familjen Grotesk">
                      {value}
                    </Text>
                  </VStack>
                ))}
              </SimpleGrid>
            )}

            <HStack spacing={4} pt={2}>
              <Button
                as="a"
                href={project.url || project.website}
                target="_blank"
                size="sm"
                rightIcon={<FaExternalLinkAlt />}
                bg={BRAND_COLORS.purple}
                color="white"
                _hover={{ bg: `${BRAND_COLORS.purple}90` }}
                fontFamily="Familjen Grotesk"
              >
                Visit
              </Button>
              {project.github && (
                <Button
                  as="a"
                  href={project.github}
                  target="_blank"
                  size="sm"
                  leftIcon={<FaGithub />}
                  variant="outline"
                  borderColor={BRAND_COLORS.purple}
                  color={BRAND_COLORS.purple}
                  _hover={{ bg: `${BRAND_COLORS.purple}10` }}
                  fontFamily="Familjen Grotesk"
                >
                  GitHub
                </Button>
              )}
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </LinkBox>
  );
};

const EcosystemTab = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = projects
    .filter(project => {
      const matchesSearch = 
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = 
        selectedCategory === 'all' || 
        project.category.toLowerCase() === selectedCategory.toLowerCase();
      return matchesSearch && matchesCategory;
    });

  return (
    <Container maxW="container.xl" p={0}>
      <VStack spacing={8} align="stretch">
        <Box bg={BRAND_COLORS.cream} p={8} borderRadius="2xl">
          <VStack spacing={8} align="stretch">
            <HStack spacing={12} wrap="wrap">
              <VStack align="start" spacing={1}>
                <Stat>
                  <StatNumber 
                    fontSize="4xl" 
                    fontWeight="700"
                    bgGradient={`linear(to-r, ${BRAND_COLORS.purple}, ${BRAND_COLORS.coral})`}
                    bgClip="text"
                    fontFamily="Familjen Grotesk"
                  >
                    300+
                  </StatNumber>
                  <StatLabel 
                    fontSize="lg"
                    color="gray.600"
                    fontFamily="Familjen Grotesk"
                  >
                    Projects
                  </StatLabel>
                </Stat>
              </VStack>

              <VStack align="start" spacing={1}>
                <Stat>
                  <StatNumber 
                    fontSize="4xl" 
                    fontWeight="700"
                    bgGradient={`linear(to-r, ${BRAND_COLORS.purple}, ${BRAND_COLORS.coral})`}
                    bgClip="text"
                    fontFamily="Familjen Grotesk"
                  >
                    450+
                  </StatNumber>
                  <StatLabel 
                    fontSize="lg"
                    color="gray.600"
                    fontFamily="Familjen Grotesk"
                  >
                    Integrations
                  </StatLabel>
                </Stat>
              </VStack>
            </HStack>

            <Text
              fontSize="3xl"
              fontWeight="700"
              bgGradient={`linear(to-r, ${BRAND_COLORS.purple}, ${BRAND_COLORS.coral})`}
              bgClip="text"
              fontFamily="Familjen Grotesk"
            >
              Discover Live projects within the 0G Ecosystem.
            </Text>

            <VStack spacing={6} align="stretch">
              <Box>
                <Text 
                  fontWeight="500" 
                  mb={3}
                  fontFamily="Familjen Grotesk"
                >
                  Filter by:
                </Text>
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
                  placeholder="Search projects..."
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
          </VStack>
        </Box>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={6}
          pb={8}
        >
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default EcosystemTab; 