import React from 'react';
import {
  SimpleGrid,
  Box,
  VStack,
  Heading,
  Text,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaYoutube, FaCalendarAlt, FaBlog } from 'react-icons/fa';

const MotionBox = motion(Box);

const FeatureCard = ({ title, icon, description }) => (
  <MotionBox
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
    bg="white"
    p={6}
    borderRadius="xl"
    shadow="sm"
  >
    <VStack align="start" spacing={4}>
      <Icon as={icon} boxSize={8} color="brand.purple" />
      <Heading size="md">{title}</Heading>
      <Text color="gray.600">{description}</Text>
    </VStack>
  </MotionBox>
);

const HomeTab = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
      <FeatureCard
        icon={FaYoutube}
        title="Video Content"
        description="Watch tutorials and updates about 0G ecosystem"
      />
      <FeatureCard
        icon={FaCalendarAlt}
        title="Events"
        description="Join our community events and stay updated"
      />
      <FeatureCard
        icon={FaBlog}
        title="Blog Posts"
        description="Read technical articles and latest news"
      />
    </SimpleGrid>
  );
};

export default HomeTab; 