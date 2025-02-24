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
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
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

const MotionBox = motion(Box);

const SidebarItem = ({ icon, children, to, soon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const bg = useColorModeValue('white', 'gray.800');

  return (
    <Link
      as={RouterLink}
      to={to}
      w="full"
      textDecoration="none"
      _hover={{ textDecoration: 'none' }}
    >
      <MotionBox
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        <HStack
          spacing={3}
          px={4}
          py={3}
          borderRadius="xl"
          bg={isActive ? 'brand.lightPurple' : 'transparent'}
          color={isActive ? 'brand.purple' : 'gray.600'}
          _hover={{ bg: 'brand.lightPurple', color: 'brand.purple' }}
        >
          <Icon as={icon} boxSize={5} />
          <Text flex={1} fontSize="15px" fontWeight={isActive ? "600" : "400"}>
            {children}
          </Text>
          {soon && (
            <Text
              fontSize="12px"
              color="brand.coral"
              fontWeight="500"
              px={2}
              py={0.5}
              bg="rgba(255, 98, 112, 0.1)"
              borderRadius="full"
            >
              Soon
            </Text>
          )}
        </HStack>
      </MotionBox>
    </Link>
  );
};

const Sidebar = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      w="280px"
      h="100vh"
      bg={bg}
      borderRight="1px"
      borderColor={borderColor}
      position="fixed"
      left={0}
      top={0}
      as={motion.div}
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <VStack spacing={8} align="stretch" h="full">
        <Box px={6} py={8}>
          <Image 
            src="/0g-logo.svg" 
            alt="0G Labs" 
            h="32px"
            as={motion.img}
            whileHover={{ scale: 1.05 }}
          />
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
            <Link 
              fontSize="sm" 
              color="gray.600"
              _hover={{ color: 'brand.purple' }}
              transition="color 0.2s"
            >
              Terms of Service
            </Link>
            <Link 
              fontSize="sm" 
              color="gray.600"
              _hover={{ color: 'brand.purple' }}
              transition="color 0.2s"
            >
              Disclaimer
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Sidebar; 