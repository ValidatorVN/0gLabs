import React, { useState, useMemo } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Select,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import StatsSection from '../components/StatsSection';
import Pagination from '../components/Pagination';
import { projects, categories, sortOptions } from '../data/ecosystemProjects';

const ITEMS_PER_PAGE = 9;

const Ecosystem = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = [...projects];

    // Filter by search
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (category !== 'all') {
      filtered = filtered.filter(project => project.category === category);
    }

    // Sort
    switch (sortBy) {
      case 'featured':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'oldest':
        filtered.sort((a, b) => a.id - b.id);
        break;
      case 'alphabetical':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, category, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedProjects.length / ITEMS_PER_PAGE);
  const currentProjects = filteredAndSortedProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <Box maxW="1200px" mx="auto">
      {/* Header */}
      <VStack align="start" mb={8}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading size="lg" mb={2}>
            Ecosystem
          </Heading>
          <Text color="gray.500">
            Discover Live projects within the 0G Ecosystem.
          </Text>
        </motion.div>
      </VStack>

      {/* Stats */}
      <Box mb={12}>
        <StatsSection />
      </Box>

      {/* Search and Filters */}
      <HStack mb={8} spacing={4} flexWrap="wrap">
        <InputGroup flex={1}>
          <InputLeftElement pointerEvents="none">
            <FiSearch color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            bg="white"
          />
        </InputGroup>
        
        <Select
          bg="white"
          w={{ base: "full", md: "200px" }}
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setCurrentPage(1);
          }}
        >
          {categories.map(cat => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </Select>

        <Select
          bg="white"
          w={{ base: "full", md: "200px" }}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </HStack>

      {/* Projects Grid */}
      <SimpleGrid 
        columns={{ base: 1, md: 2, lg: 3 }} 
        spacing={6}
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {currentProjects.map(project => (
          <Link key={project.id} to={`/ecosystem/${project.id}`}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </SimpleGrid>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      {/* Footer */}
      <Box 
        position="relative" 
        mt={12}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Box
          position="absolute"
          bottom={4}
          right={4}
          fontSize="12px"
          color="gray.500"
        >
          Powered by ValidatorVN
        </Box>
      </Box>
    </Box>
  );
};

export default Ecosystem; 