import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const PageContainer = ({ children }) => {
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      maxW="1200px"
      mx="auto"
      px={4}
    >
      <VStack spacing={8} align="stretch">
        {children}
      </VStack>
    </Box>
  );
};

export default PageContainer; 