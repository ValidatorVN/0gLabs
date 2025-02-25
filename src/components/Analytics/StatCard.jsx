import { Card } from '../shared/Card';
import { VStack, HStack, Text, Icon, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from '@chakra-ui/react';

export const StatCard = ({ title, value, change, icon, isIncrease }) => (
  <Card>
    <VStack align="stretch" spacing={4}>
      <HStack justify="space-between">
        <Text fontSize="sm" color="gray.600">{title}</Text>
        <Icon as={icon} color="brand.purple" boxSize={5} />
      </HStack>
      
      <Stat>
        <StatNumber fontSize="2xl" fontWeight="600">
          {value}
        </StatNumber>
        {change && (
          <StatHelpText>
            <StatArrow type={isIncrease ? 'increase' : 'decrease'} />
            {change}
          </StatHelpText>
        )}
      </Stat>
    </VStack>
  </Card>
); 