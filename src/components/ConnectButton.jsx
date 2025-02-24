import React from 'react';
import { Button } from '@chakra-ui/react';

const ConnectButton = () => {
  return (
    <Button
      bg="brand.purple"
      color="white"
      px={6}
      h="40px"
      fontSize="15px"
      fontWeight="600"
      _hover={{ bg: 'brand.blue' }}
      _active={{ bg: 'brand.blue' }}
    >
      Connect
    </Button>
  );
};

export default ConnectButton; 