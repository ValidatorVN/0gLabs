import React from 'react';
import { Box, Container, Heading, Text, Input } from '@chakra-ui/react';

const Explorer = () => {
  return (
    <Box>
      <Heading size="lg" mb={4}>Explorer</Heading>
      <Box bg="white" p={6} borderRadius="2xl">
        <Input 
          placeholder="Search by address / txn hash / block height"
          size="lg"
          mb={4}
        />
        <Text>Explorer page is under development</Text>
      </Box>
    </Box>
  );
};

export default Explorer; 