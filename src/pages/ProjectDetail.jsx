import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Image,
  Tag,
  Button,
  Grid,
  GridItem,
  Link as ChakraLink,
  Icon,
} from '@chakra-ui/react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiTwitter } from 'react-icons/fi';
import { projects } from '../data/ecosystemProjects';

const MotionBox = motion(Box);

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return <Box>Project not found</Box>;

  return (
    <Box maxW="1200px" mx="auto">
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <Box position="relative" h="300px" mb={16}>
          <Image
            src={project.banner}
            alt={project.name}
            w="full"
            h="full"
            objectFit="cover"
            borderRadius="2xl"
          />
          <Image
            src={project.logo}
            alt={project.name}
            position="absolute"
            bottom="-40px"
            left="40px"
            boxSize="120px"
            borderRadius="xl"
            bg="white"
            p={4}
          />
        </Box>

        {/* Content */}
        <Grid templateColumns="2fr 1fr" gap={8}>
          <GridItem>
            <VStack align="start" spacing={6}>
              <HStack justify="space-between" w="full">
                <Text fontSize="3xl" fontWeight="700">
                  {project.name}
                </Text>
                {project.featured && (
                  <Tag size="lg" colorScheme="purple">Featured</Tag>
                )}
              </HStack>

              <Text color="gray.600" fontSize="lg">
                {project.description}
              </Text>

              <HStack spacing={4}>
                <Button
                  as={ChakraLink}
                  href={project.url}
                  isExternal
                  rightIcon={<FiExternalLink />}
                  colorScheme="purple"
                >
                  Visit Website
                </Button>
                {project.github && (
                  <Button
                    as={ChakraLink}
                    href={project.github}
                    isExternal
                    rightIcon={<FiGithub />}
                    variant="outline"
                  >
                    GitHub
                  </Button>
                )}
              </HStack>

              <HStack spacing={2} flexWrap="wrap">
                {project.tags.map(tag => (
                  <Tag 
                    key={tag}
                    size="md"
                    bg="gray.100"
                    color="gray.600"
                  >
                    {tag}
                  </Tag>
                ))}
              </HStack>
            </VStack>
          </GridItem>

          <GridItem>
            <Box bg="white" p={6} borderRadius="2xl">
              <VStack spacing={4} align="start">
                <Text fontSize="xl" fontWeight="600">
                  Project Stats
                </Text>
                {Object.entries(project.stats).map(([key, value]) => (
                  <HStack key={key} justify="space-between" w="full">
                    <Text color="gray.600" textTransform="capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </Text>
                    <Text fontWeight="600">{value}</Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
          </GridItem>
        </Grid>
      </MotionBox>
    </Box>
  );
};

export default ProjectDetail; 