import React from 'react';
import {
  VStack,
  Text,
  Icon,
} from '@chakra-ui/react';
import { FaCalendarAlt } from 'react-icons/fa';

const EventTab = () => {
  return (
    <VStack spacing={4} align="center" py={10}>
      <Icon as={FaCalendarAlt} boxSize={10} color="gray.400" />
      <Text fontSize="lg" color="gray.500">
        Events coming soon
      </Text>
    </VStack>
  );
};

export default EventTab; 