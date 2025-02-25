import React, { useState } from 'react';
import {
  Box,
  SimpleGrid,
  HStack,
  Select,
  Button,
  ButtonGroup,
  Icon,
  Flex,
  Spacer
} from '@chakra-ui/react';
import { MdShowChart, MdAccountBalanceWallet, MdSwapHoriz, MdLocalGasStation, MdPeople, MdSpeed } from 'react-icons/md';
import { AnalyticsHeader } from '../../components/Analytics/AnalyticsHeader';
import { AnalyticsTabs } from '../../components/Analytics/AnalyticsTabs';
import { StatCard } from '../../components/Analytics/StatCard';
import { LineChart } from '../../components/Charts/LineChart';
import { Card } from '../../components/shared/Card';

// Mock data with more realistic values based on hub.0g.ai
const tvlData = [
  { date: '2024-01-01', value: 1230000000 },
  { date: '2024-01-02', value: 1280000000 },
  { date: '2024-01-03', value: 1320000000 },
  { date: '2024-01-04', value: 1380000000 },
  { date: '2024-01-05', value: 1420000000 },
  { date: '2024-01-06', value: 1480000000 },
  { date: '2024-01-07', value: 1520000000 }
];

const networkStatsData = [
  { date: '2024-01-01', tps: 156, blockTime: 2.1 },
  { date: '2024-01-02', tps: 162, blockTime: 2.0 },
  { date: '2024-01-03', tps: 158, blockTime: 2.2 },
  { date: '2024-01-04', tps: 165, blockTime: 1.9 },
  { date: '2024-01-05', tps: 170, blockTime: 1.8 },
  { date: '2024-01-06', tps: 168, blockTime: 1.9 },
  { date: '2024-01-07', tps: 172, blockTime: 1.8 }
];

const Overview = () => {
  const [timeRange, setTimeRange] = useState('7d');

  return (
    <Box>
      <AnalyticsHeader />
      <AnalyticsTabs />

      {/* Time Range Filter */}
      <Flex mb={6}>
        <ButtonGroup size="sm" isAttached variant="outline">
          <Button 
            onClick={() => setTimeRange('24h')}
            isActive={timeRange === '24h'}
            _active={{ bg: 'brand.purple', color: 'white' }}
          >
            24H
          </Button>
          <Button 
            onClick={() => setTimeRange('7d')}
            isActive={timeRange === '7d'}
            _active={{ bg: 'brand.purple', color: 'white' }}
          >
            7D
          </Button>
          <Button 
            onClick={() => setTimeRange('30d')}
            isActive={timeRange === '30d'}
            _active={{ bg: 'brand.purple', color: 'white' }}
          >
            30D
          </Button>
          <Button 
            onClick={() => setTimeRange('all')}
            isActive={timeRange === 'all'}
            _active={{ bg: 'brand.purple', color: 'white' }}
          >
            ALL
          </Button>
        </ButtonGroup>
        <Spacer />
        <Select 
          w="200px" 
          size="sm"
          defaultValue="testnet"
          borderRadius="full"
        >
          <option value="testnet">Newton Testnet</option>
          <option value="mainnet">Mainnet (Coming Soon)</option>
        </Select>
      </Flex>

      {/* Stats Cards */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mb={6}>
        <StatCard
          title="Total Value Locked"
          value="$1.52B"
          change="23.36%"
          icon={MdShowChart}
          isIncrease={true}
        />
        <StatCard
          title="Active Wallets (24h)"
          value="12,345"
          change="5.67%"
          icon={MdAccountBalanceWallet}
          isIncrease={true}
        />
        <StatCard
          title="Daily Transactions"
          value="45,678"
          change="12.34%"
          icon={MdSwapHoriz}
          isIncrease={true}
        />
        <StatCard
          title="Average Gas Price"
          value="0.000123 0G"
          change="3.45%"
          icon={MdLocalGasStation}
          isIncrease={false}
        />
        <StatCard
          title="Network TPS"
          value="172"
          change="2.38%"
          icon={MdSpeed}
          isIncrease={true}
        />
        <StatCard
          title="Total Users"
          value="89,012"
          change="8.92%"
          icon={MdPeople}
          isIncrease={true}
        />
      </SimpleGrid>

      {/* Charts */}
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
        <Card>
          <LineChart 
            title="Total Value Locked (TVL)"
            data={tvlData}
            xAxis="date"
            yAxis="value"
            valuePrefix="$"
            valueSuffix=""
            valueFormatter={(value) => `$${(value/1e9).toFixed(2)}B`}
          />
        </Card>
        <Card>
          <LineChart 
            title="Network Performance"
            data={networkStatsData}
            xAxis="date"
            yAxis="tps"
            valueFormatter={(value) => `${value} TPS`}
          />
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default Overview; 