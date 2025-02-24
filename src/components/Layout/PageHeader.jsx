import React from 'react';
import { VStack, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, description }) => {
  return (
    <VStack 
      as={motion.div}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      align="start" 
      spacing={2}
      mb={8}
    >
      <Heading size="lg">{title}</Heading>
      {description && (
        <Text color="gray.500">{description}</Text>
      )}
    </VStack>
  );
};

export default PageHeader; 