import { Box } from '@chakra-ui/react';

export const Card = ({ children, ...props }) => (
  <Box
    bg="white"
    borderRadius="xl"
    boxShadow="sm"
    p={6}
    transition="all 0.2s"
    _hover={{
      boxShadow: 'md',
      transform: 'translateY(-2px)'
    }}
    {...props}
  >
    {children}
  </Box>
); 