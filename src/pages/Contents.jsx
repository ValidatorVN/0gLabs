import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import PageContainer from '../components/Layout/PageContainer';
import PageHeader from '../components/Layout/PageHeader';
import ContentTabs from '../components/ContentTabs';

const Contents = () => {
  return (
    <PageContainer>
      <PageHeader
        title="Contents"
        description="Key Information and Trending Topics of the 0G"
      />

      <Box 
        bg="white" 
        p={6} 
        borderRadius="2xl"
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ContentTabs />
      </Box>
    </PageContainer>
  );
};

export default Contents; 