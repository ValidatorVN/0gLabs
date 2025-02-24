import React from 'react';
import { Box, Flex, Text, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useWallet } from '../contexts/WalletContext';

const MotionButton = motion(Button);

const Header = () => {
  const { isConnected, address, connect, disconnect } = useWallet();

  return (
    <Flex justify="space-between" align="center" mb={8}>
      <Box>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Text 
            fontSize="24px" 
            fontWeight="600" 
            lineHeight="1.2"
            mb={1}
          >
            Your <Text as="span" color="brand.purple">0G</Text> Balance
          </Text>
          <Text color="gray.500" fontSize="14px">
            View and manage your tokens
          </Text>
        </motion.div>
      </Box>

      {isConnected ? (
        <Menu>
          <MenuButton
            as={MotionButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            bg="brand.purple"
            color="white"
            px={6}
            h="40px"
            fontSize="15px"
            fontWeight="600"
          >
            {address.slice(0, 8)}...{address.slice(-4)}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={disconnect}>Disconnect</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <MotionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          bg="brand.purple"
          color="white"
          px={6}
          h="40px"
          fontSize="15px"
          fontWeight="600"
          _hover={{ bg: 'brand.blue' }}
          onClick={connect}
        >
          Connect
        </MotionButton>
      )}
    </Flex>
  );
};

export default Header; 