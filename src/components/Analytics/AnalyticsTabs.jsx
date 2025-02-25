import { Tabs, TabList, Tab, Box } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

const tabs = [
  { name: 'Overview', path: '/on-chain/analytics/overview' },
  { name: 'Token', path: '/on-chain/analytics/token' },
  { name: 'Network', path: '/on-chain/analytics/network' },
  { name: 'Account/Wallet', path: '/on-chain/analytics/accounts' },
  { name: 'Transaction/Gas', path: '/on-chain/analytics/transactions' },
  { name: 'Revenue', path: '/on-chain/analytics/revenue' },
  { name: 'Valuation', path: '/on-chain/analytics/valuation' }
];

export const AnalyticsTabs = () => {
  const location = useLocation();

  return (
    <Box bg="white" borderRadius="xl" mb={6} p={1}>
      <Tabs 
        variant="soft-rounded" 
        colorScheme="purple"
        index={tabs.findIndex(tab => tab.path === location.pathname)}
      >
        <TabList>
          {tabs.map(tab => (
            <Tab
              key={tab.path}
              as={Link}
              to={tab.path}
              fontSize="sm"
              fontWeight="500"
              _selected={{
                bg: 'brand.purple',
                color: 'white'
              }}
            >
              {tab.name}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Box>
  );
}; 