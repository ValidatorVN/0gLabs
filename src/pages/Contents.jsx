import React from 'react';
import {
  Box,
  VStack,
  SimpleGrid,
  Text,
  Heading,
  Button,
  Image,
  Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useWallet } from '../contexts/WalletContext';
import { FaYoutube, FaCalendarAlt, FaBlog } from 'react-icons/fa';

const MotionBox = motion(Box);

const ContentCard = ({ title, icon: Icon, description, link, isComingSoon }) => (
  <MotionBox
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
    bg="white"
    p={6}
    borderRadius="2xl"
    cursor={isComingSoon ? "default" : "pointer"}
    position="relative"
    onClick={() => !isComingSoon && window.open(link, '_blank')}
  >
    <VStack align="start" spacing={4}>
      <Box
        bg="rgba(177, 78, 255, 0.1)"
        p={3}
        borderRadius="xl"
        color="brand.purple"
      >
        <Icon size={24} />
      </Box>
      <VStack align="start" spacing={2}>
        <Heading size="md">{title}</Heading>
        <Text color="gray.500" fontSize="sm">
          {description}
        </Text>
      </VStack>
      {isComingSoon && (
        <Text
          position="absolute"
          top={4}
          right={4}
          color="brand.coral"
          fontSize="sm"
          fontWeight="500"
        >
          Soon
        </Text>
      )}
    </VStack>
  </MotionBox>
);

const Contents = () => {
  return (
    <Box maxW="1200px" mx="auto">
      {/* Header */}
      <VStack align="start" mb={8}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading size="lg" mb={2}>
            Contents
          </Heading>
          <Text color="gray.500">
            Key Information and Trending Topics of the 0G
          </Text>
        </motion.div>
      </VStack>

      {/* Content Grid */}
      <SimpleGrid 
        columns={{ base: 1, md: 2, lg: 3 }} 
        spacing={6}
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ContentCard
          title="Youtube"
          icon={FaYoutube}
          description="Watch our latest videos and tutorials about 0G ecosystem"
          link="https://youtube.com/@0GLabs"
        />
        <ContentCard
          title="Events"
          icon={FaCalendarAlt}
          description="Join our community events and stay updated with 0G"
          link="#"
          isComingSoon
        />
        <ContentCard
          title="Blog"
          icon={FaBlog}
          description="Read our latest news and technical articles"
          link="#"
          isComingSoon
        />
      </SimpleGrid>

      {/* Footer */}
      <Box 
        position="relative" 
        mt={12}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Box
          position="absolute"
          bottom={4}
          right={4}
          fontSize="12px"
          color="gray.500"
        >
          Powered by ValidatorVN
        </Box>
      </Box>

      {/* Footer Links */}
      <VStack spacing={4} mt={16} align="start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link 
            href="#" 
            color="gray.500" 
            fontSize="14px"
            _hover={{ color: 'brand.purple' }}
            transition="color 0.2s"
          >
            Terms of Service
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Link 
            href="#" 
            color="gray.500" 
            fontSize="14px"
            _hover={{ color: 'brand.purple' }}
            transition="color 0.2s"
          >
            Disclaimer
          </Link>
        </motion.div>
      </VStack>
    </Box>
  );
};

export default Contents; 