import React from 'react';
import { Box, VStack, Text, HStack, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

const MotionBox = motion(Box);

const StatCard = ({ title, value, change, isPositive, isNegative }) => {
  return (
    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      bg="white"
      p={6}
      borderRadius="2xl"
      shadow="sm"
    >
      <VStack align="start" spacing={2}>
        <Text color="gray.500" fontSize="sm">
          {title}
        </Text>
        <Text fontSize="2xl" fontWeight="600">
          {value}
        </Text>
        {change && (
          <HStack color={isPositive ? "green.500" : isNegative ? "red.500" : "gray.500"}>
            <Icon as={isPositive ? FiArrowUp : FiArrowDown} />
            <Text fontSize="sm">{change}</Text>
          </HStack>
        )}
      </VStack>
    </MotionBox>
  );
};

export default StatCard; 