import React from 'react';
import { HStack, Button } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';

const AnalyticsNav = () => {
  const navigate = useLocation();
  const location = useLocation();

  const navItems = [
    { name: 'Overview', path: '/analytics/overview' },
    { name: 'Token', path: '/analytics/token' },
    { name: 'Network', path: '/analytics/network' },
    { name: 'Account/Wallet', path: '/analytics/accounts' },
    { name: 'Transaction/Gas', path: '/analytics/transactions' },
    { name: 'Revenue', path: '/analytics/revenue' },
    { name: 'Valuation', path: '/analytics/valuation' },
  ];

  return (
    <HStack spacing={4} overflowX="auto" py={2}>
      {navItems.map((item) => (
        <Button
          key={item.path}
          variant="ghost"
          size="sm"
          color={location.pathname === item.path ? "brand.purple" : "gray.600"}
          bg={location.pathname === item.path ? "rgba(177, 78, 255, 0.1)" : "transparent"}
          _hover={{
            bg: "rgba(177, 78, 255, 0.1)",
            color: "brand.purple"
          }}
          onClick={() => navigate(item.path)}
          whiteSpace="nowrap"
        >
          {item.name}
        </Button>
      ))}
    </HStack>
  );
};

export default AnalyticsNav; 