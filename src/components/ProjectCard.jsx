import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Image,
  Tag,
  Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const ProjectCard = ({ project }) => {
  return (
    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      bg="white"
      borderRadius="2xl"
      overflow="hidden"
      cursor="pointer"
      onClick={() => window.open(project.url, '_blank')}
    >
      <Box position="relative" h="200px">
        <Image 
          src={project.banner}
          alt={project.name}
          objectFit="cover"
          w="full"
          h="full"
        />
        <Image
          src={project.logo}
          alt={project.name}
          position="absolute"
          bottom="-20px"
          left="20px"
          boxSize="60px"
          borderRadius="xl"
          bg="white"
          p={2}
        />
      </Box>

      <VStack align="start" p={6} pt={8} spacing={4}>
        <HStack justify="space-between" w="full">
          <Text fontSize="xl" fontWeight="600">
            {project.name}
          </Text>
          {project.featured && (
            <Tag size="sm" colorScheme="purple">Featured</Tag>
          )}
        </HStack>

        <Text color="gray.600" noOfLines={3}>
          {project.description}
        </Text>

        <HStack spacing={2} flexWrap="wrap">
          {project.tags.map(tag => (
            <Tag 
              key={tag} 
              size="sm"
              bg="gray.100"
              color="gray.600"
            >
              {tag}
            </Tag>
          ))}
        </HStack>
      </VStack>
    </MotionBox>
  );
};

export default ProjectCard; 