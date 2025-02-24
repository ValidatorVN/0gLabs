import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Link,
  Icon,
  Text,
  Image,
  Divider,
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  MdAccountBalanceWallet,
  MdMenuBook,
  MdToken,
  MdInsertChart,
  MdLocalDrink,
  MdSwapHorizontalCircle,
  MdSettingsEthernet,
  MdExplore
} from 'react-icons/md';

const SidebarItem = ({ icon, children, to, soon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      as={RouterLink}
      to={to}
      w="full"
      textDecoration="none"
      _hover={{ textDecoration: 'none' }}
    >
      <HStack
        spacing={3}
        px={4}
        py={3}
        borderRadius="xl"
        bg={isActive ? 'rgba(177, 78, 255, 0.1)' : 'transparent'}
        color={isActive ? 'brand.purple' : 'gray.600'}
        _hover={{ bg: 'rgba(177, 78, 255, 0.1)', color: 'brand.purple' }}
      >
        <Icon as={icon} boxSize={5} />
        <Text flex={1} fontSize="15px" fontWeight={isActive ? "600" : "400"}>
          {children}
        </Text>
        {soon && (
          <Text fontSize="12px" color="brand.coral" fontWeight="500">
            Soon
          </Text>
        )}
      </HStack>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <Box
      w="280px"
      h="100vh"
      bg="white"
      borderRight="1px"
      borderColor="gray.200"
      position="fixed"
      left={0}
      top={0}
    >
      <VStack spacing={8} align="stretch" h="full">
        <Box px={6} py={8}>
          <Image src="/0g-logo.svg" alt="0G Labs" h="32px" />
        </Box>

        <VStack spacing={1} align="stretch">
          <SidebarItem icon={MdAccountBalanceWallet} to="/portfolio">
            Portfolio
          </SidebarItem>
          <SidebarItem icon={MdMenuBook} to="/contents">
            Contents
          </SidebarItem>
          <SidebarItem icon={MdToken} to="/ecosystem">
            Ecosystem
          </SidebarItem>
          <SidebarItem icon={MdInsertChart} to="/analytics">
            On-Chain Analytics
          </SidebarItem>
          <SidebarItem icon={MdLocalDrink} to="/faucet">
            Faucet
          </SidebarItem>
          <SidebarItem icon={MdSwapHorizontalCircle} to="/swap" soon>
            Swap
          </SidebarItem>
          <SidebarItem icon={MdSettingsEthernet} to="/bridge" soon>
            Bridge
          </SidebarItem>
          <SidebarItem icon={MdExplore} to="/explorer">
            Explorer
          </SidebarItem>
        </VStack>

        <Box mt="auto" px={6} py={4}>
          <Divider mb={4} />
          <VStack spacing={2} align="stretch">
            <Link fontSize="sm" color="gray.600">
              Terms of Service
            </Link>
            <Link fontSize="sm" color="gray.600">
              Disclaimer
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Sidebar; 