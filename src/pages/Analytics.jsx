import React from 'react';
import {
  Box,
  VStack,
  Text,
  Heading,
} from '@chakra-ui/react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnalyticsNav from '../components/AnalyticsNav';
import Overview from './Analytics/Overview';

const Analytics = () => {
  return (
    <Box maxW="1200px" mx="auto">
      {/* Header */}
      <VStack align="start" mb={6}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading size="lg" mb={2}>
            Analytics
          </Heading>
          <Text color="gray.500">
            Utilize the visualized on-chain data dashboard to grasp market trends. (Based on Testnet data.)
          </Text>
        </motion.div>
      </VStack>

      {/* Navigation */}
      <Box mb={8}>
        <AnalyticsNav />
      </Box>

      {/* Content */}
      <Routes>
        <Route path="/" element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<Overview />} />
        {/* Add other routes for different analytics views */}
      </Routes>

      {/* Footer */}
      <Box 
        position="relative" 
        mt={12}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
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
          transition={{ delay: 0.6 }}
        >
          <Text 
            as="a" 
            href="#" 
            color="gray.500" 
            fontSize="14px"
            _hover={{ color: 'brand.purple' }}
          >
            Terms of Service
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Text 
            as="a" 
            href="#" 
            color="gray.500" 
            fontSize="14px"
            _hover={{ color: 'brand.purple' }}
          >
            Disclaimer
          </Text>
        </motion.div>
      </VStack>
    </Box>
  );
};

export default Analytics; 