import React from 'react';
import { HStack, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <HStack spacing={2} justify="center" w="full" py={8}>
      <MotionButton
        size="sm"
        variant="outline"
        isDisabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Previous
      </MotionButton>
      
      {[...Array(totalPages)].map((_, idx) => (
        <MotionButton
          key={idx + 1}
          size="sm"
          variant={currentPage === idx + 1 ? "solid" : "outline"}
          colorScheme={currentPage === idx + 1 ? "purple" : "gray"}
          onClick={() => onPageChange(idx + 1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {idx + 1}
        </MotionButton>
      ))}

      <MotionButton
        size="sm"
        variant="outline"
        isDisabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Next
      </MotionButton>
    </HStack>
  );
};

export default Pagination; 