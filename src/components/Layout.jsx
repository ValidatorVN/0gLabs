import React from 'react';
import { Box, Container, useDisclosure } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';

const Layout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg="gray.50">
      <Sidebar display={{ base: 'none', lg: 'block' }} />
      <MobileNav isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      
      <Box ml={{ base: 0, lg: '240px' }} transition=".3s ease">
        <Container maxW="container.xl" py={8} px={{ base: 4, md: 6 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default Layout; 