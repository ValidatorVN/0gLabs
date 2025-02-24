import React from 'react';
import {
  Box,
  VStack,
  SimpleGrid,
  Text,
  Heading,
  HStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import StatCard from '../../components/StatCard';

const OverviewPage = () => {
  return (
    <VStack spacing={8} align="stretch">
      {/* Stats Grid */}
      <SimpleGrid 
        columns={{ base: 1, md: 2, lg: 3 }} 
        spacing={6}
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <StatCard
          title="Total Supply"
          value="1,000,000,000 0G"
        />
        <StatCard
          title="Circulating Supply"
          value="100,000,000 0G"
          change="10%"
          isPositive
        />
        <StatCard
          title="Total Transactions"
          value="1,234,567"
          change="5.2%"
          isPositive
        />
        <StatCard
          title="Active Wallets (24h)"
          value="12,345"
          change="2.1%"
          isNegative
        />
        <StatCard
          title="Average Gas Price"
          value="0.000123 0G"
        />
        <StatCard
          title="Network TPS"
          value="156"
          change="12.3%"
          isPositive
        />
      </SimpleGrid>

      {/* Charts section - placeholder for now */}
      <Box bg="white" p={6} borderRadius="2xl" minH="400px">
        <Text>Charts will be implemented here</Text>
      </Box>
    </VStack>
  );
};

export default OverviewPage; 