import { VStack, Icon, Text } from '@chakra-ui/react';

export const EmptyState = ({ icon, title, description }) => (
  <VStack
    spacing={4}
    p={8}
    bg="white"
    borderRadius="xl"
    borderWidth={2}
    borderStyle="dashed"
    borderColor="gray.200"
  >
    <Icon as={icon} boxSize={10} color="gray.400" />
    <VStack spacing={1}>
      <Text fontSize="lg" fontWeight="600">{title}</Text>
      <Text color="gray.600">{description}</Text>
    </VStack>
  </VStack>
); 