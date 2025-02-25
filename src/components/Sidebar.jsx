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
  Tooltip
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
import { FaXTwitter, FaTelegram, FaDiscord, FaGlobe } from 'react-icons/fa6';

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

const BRAND_COLORS = {
  purple: '#B14EFF'
};

const socialLinks = [
  {
    name: 'X (Twitter)',
    icon: FaXTwitter,
    href: 'https://x.com/0G_labs',
    color: 'gray.800'
  },
  {
    name: 'Telegram',
    icon: FaTelegram,
    href: 'https://t.me/web3_0glabs',
    color: '#229ED9'
  },
  {
    name: 'Discord',
    icon: FaDiscord,
    href: 'https://discord.com/invite/0glabs',
    color: '#5865F2'
  },
  {
    name: 'Website',
    icon: FaGlobe,
    href: 'https://0g.ai',
    color: BRAND_COLORS.purple
  }
];

const Sidebar = () => {
  return (
    <Box
      as="nav"
      pos="fixed"
      top={0}
      left={0}
      h="100vh"
      w="240px"
      bg="white"
      borderRight="1px solid"
      borderColor="gray.200"
      display={{ base: 'none', md: 'block' }}
    >
      <VStack h="full" align="stretch" spacing={0}>
        <Box p={4}>
          <Image src="/0g-logo.svg" alt="0G Labs" h="32px" />
        </Box>

        <VStack flex="1" align="stretch" spacing={1} p={2}>
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

        <Box p={4} borderTop="1px solid" borderColor="gray.100">
          <HStack spacing={4} justify="center">
            {socialLinks.map((social) => (
              <Tooltip
                key={social.name}
                label={social.name}
                placement="top"
                hasArrow
              >
                <Link
                  href={social.href}
                  isExternal
                  _hover={{
                    transform: 'translateY(-2px)',
                    color: social.color
                  }}
                  transition="all 0.2s"
                >
                  <Icon
                    as={social.icon}
                    boxSize={5}
                    color="gray.500"
                    _hover={{
                      color: social.color
                    }}
                  />
                </Link>
              </Tooltip>
            ))}
          </HStack>
        </Box>

        <VStack p={4} spacing={2} fontSize="sm" color="gray.500">
          <Link href="/terms" _hover={{ color: BRAND_COLORS.purple }}>
            Terms of Service
          </Link>
          <Link href="/disclaimer" _hover={{ color: BRAND_COLORS.purple }}>
            Disclaimer
          </Link>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Sidebar; 