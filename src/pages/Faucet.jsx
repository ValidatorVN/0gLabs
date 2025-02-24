import React from 'react';
import {
  Box,
  VStack,
  Text,
  Heading,
  Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import FaucetForm from '../components/FaucetForm';

const Faucet = () => {
  return (
    <Box maxW="1200px" mx="auto">
      {/* Header */}
      <VStack align="start" mb={8}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading size="lg" mb={2}>
            Faucet
          </Heading>
          <Text color="gray.500">
            You can earn 0G token on the testnet every day.
          </Text>
        </motion.div>
      </VStack>

      {/* Faucet Form */}
      <FaucetForm />

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
          <Link 
            href="#" 
            color="gray.500" 
            fontSize="14px"
            _hover={{ color: 'brand.purple' }}
          >
            Terms of Service
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Link 
            href="#" 
            color="gray.500" 
            fontSize="14px"
            _hover={{ color: 'brand.purple' }}
          >
            Disclaimer
          </Link>
        </motion.div>
      </VStack>
    </Box>
  );
};

export default Faucet; 