import React from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  Image,
  Button,
  Divider,
} from '@chakra-ui/react';

const TokenCard = ({ token }) => {
  return (
    <Box bg="white" borderRadius="2xl" overflow="hidden">
      <Box p={6}>
        <HStack spacing={4} align="start">
          <Image src={token.icon} boxSize="48px" borderRadius="full" />
          <VStack align="start" spacing={1}>
            <Text fontSize="20px" fontWeight="600">
              {token.name}
            </Text>
            <Text color="gray.500" fontSize="14px">
              {token.symbol}
            </Text>
          </VStack>
        </HStack>

        <VStack align="start" mt={6} spacing={1}>
          <Text color="gray.500" fontSize="14px">
            Available Balance
          </Text>
          <Text fontSize="24px" fontWeight="600">
            {token.balance} {token.symbol}
          </Text>
          <Text color="gray.500" fontSize="14px">
            ≈ ${token.usdValue}
          </Text>
        </VStack>
      </Box>

      <Divider />

      <Box p={6}>
        <Button
          w="full"
          variant="outline"
          borderColor="brand.purple"
          color="brand.purple"
          _hover={{ bg: 'brand.purple', color: 'white' }}
        >
          View Details
        </Button>
      </Box>
    </Box>
  );
};

export default TokenCard; 