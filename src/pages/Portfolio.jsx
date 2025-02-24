import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Image,
  Tag,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWallet } from '../contexts/WalletContext';
import Header from '../components/Header';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const NetworkTag = () => (
  <Tag
    size="md"
    variant="subtle"
    bg="rgba(177, 78, 255, 0.1)"
    color="brand.purple"
    borderRadius="full"
    px={4}
    py={1}
    fontSize="14px"
  >
    0G Testnet
  </Tag>
);

const EmptyState = () => {
  const { connect } = useWallet();
  
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      bg="white"
      borderRadius="2xl"
      py={12}
      px={6}
      spacing={8}
      as={VStack}
      align="center"
    >
      <VStack spacing={1}>
        <Text fontSize="20px" fontWeight="600">
          Coming Soon
        </Text>
        <NetworkTag />
      </VStack>

      <VStack spacing={6} maxW="400px" textAlign="center">
        <Text fontSize="16px" color="gray.500">
          Connect your wallet to view your assets
        </Text>
        <MotionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          bg="brand.purple"
          color="white"
          size="lg"
          px={8}
          h="48px"
          fontSize="16px"
          fontWeight="600"
          _hover={{ bg: 'brand.blue' }}
          onClick={connect}
        >
          Connect Wallet
        </MotionButton>
      </VStack>
    </MotionBox>
  );
};

const Portfolio = () => {
  const { isConnected } = useWallet();

  return (
    <Box maxW="1200px" mx="auto">
      <Header />
      
      <Box position="relative">
        <AnimatePresence mode="wait">
          {isConnected ? (
            <MotionBox
              key="connected"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Connected state content */}
            </MotionBox>
          ) : (
            <EmptyState />
          )}
        </AnimatePresence>
        
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          position="absolute"
          bottom={4}
          right={4}
          fontSize="12px"
          color="gray.500"
        >
          Powered by ValidatorVN
        </MotionBox>
      </Box>

      <HStack 
        spacing={4} 
        mt={8} 
        color="gray.500" 
        fontSize="14px"
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Text 
          as="a" 
          href="#" 
          _hover={{ color: 'brand.purple' }}
          transition="color 0.2s"
        >
          Terms of Service
        </Text>
        <Text 
          as="a" 
          href="#" 
          _hover={{ color: 'brand.purple' }}
          transition="color 0.2s"
        >
          Disclaimer
        </Text>
      </HStack>
    </Box>
  );
};

export default Portfolio; 