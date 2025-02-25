import { Box, Heading, Text } from '@chakra-ui/react';

export const PageHeader = ({ title, subtitle }) => (
  <Box mb={8}>
    <Heading 
      size="lg"
      bgGradient="linear(to-r, brand.purple, brand.coral)"
      bgClip="text"
      mb={2}
    >
      {title}
    </Heading>
    {subtitle && (
      <Text color="gray.600">{subtitle}</Text>
    )}
  </Box>
); 