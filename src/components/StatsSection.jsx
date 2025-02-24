import React from 'react';
import {
  HStack,
  VStack,
  Text,
  Box,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const StatBox = ({ label, value }) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    bg="white"
    p={6}
    borderRadius="2xl"
    flex={1}
  >
    <VStack spacing={1}>
      <Text fontSize="3xl" fontWeight="600" color="brand.purple">
        {value}+
      </Text>
      <Text color="gray.600">{label}</Text>
    </VStack>
  </MotionBox>
);

const StatsSection = () => {
  return (
    <HStack spacing={6} w="full">
      <StatBox label="Projects" value="300" />
      <StatBox label="Integrations" value="450" />
    </HStack>
  );
};

export default StatsSection; 