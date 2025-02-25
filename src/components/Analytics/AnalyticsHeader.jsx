import { Box, Text, HStack, Tag } from '@chakra-ui/react';
import { PageHeader } from '../shared/PageHeader';

export const AnalyticsHeader = () => (
  <Box mb={8}>
    <PageHeader 
      title="Analytics"
      subtitle="Utilize the visualized on-chain data dashboard to grasp market trends."
    />
    <HStack mt={2}>
      <Tag colorScheme="purple" borderRadius="full">Based on Testnet data</Tag>
    </HStack>
  </Box>
); 