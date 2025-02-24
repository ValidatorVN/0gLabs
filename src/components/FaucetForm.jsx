import React, { useState, useRef } from 'react';
import {
  Box,
  Button,
  VStack,
  Text,
  Input,
  InputGroup,
  FormControl,
  FormLabel,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Link,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaDiscord } from 'react-icons/fa';
import ReCAPTCHA from "react-google-recaptcha";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const FaucetForm = () => {
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', isError: false });
  const captchaRef = useRef(null);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!address) {
      toast({
        title: "Error",
        description: "Please enter your wallet address",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('https://faucet.0g.ai/api/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setModalContent({
          title: 'Transaction Successful',
          message: 'Tokens have been sent to your wallet',
          isError: false,
        });
        setAddress('');
      } else {
        throw new Error(data.message || 'Failed to request tokens');
      }
    } catch (error) {
      setModalContent({
        title: 'Error',
        message: error.message,
        isError: true,
      });
    } finally {
      setIsLoading(false);
      setShowModal(true);
    }
  };

  return (
    <>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        bg="white"
        p={8}
        borderRadius="2xl"
        maxW="600px"
        w="full"
        mx="auto"
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={6} align="stretch">
            <Text fontSize="xl" fontWeight="600" textAlign="center">
              Request A0GI Token
            </Text>
            
            <FormControl>
              <FormLabel>Wallet Address</FormLabel>
              <InputGroup size="lg">
                <Input
                  placeholder="Enter your wallet address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  bg="gray.50"
                  borderColor="gray.200"
                  _hover={{ borderColor: 'brand.purple' }}
                  _focus={{ borderColor: 'brand.purple', boxShadow: 'none' }}
                />
              </InputGroup>
            </FormControl>

            <MotionButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              bg="brand.purple"
              color="white"
              size="lg"
              isLoading={isLoading}
              loadingText="Processing..."
              _hover={{ bg: 'brand.blue' }}
            >
              Request Tokens
            </MotionButton>

            <VStack spacing={2} pt={4}>
              <Text fontWeight="500">Do you need more?</Text>
              <Link 
                href="https://discord.gg/0glabs" 
                isExternal
                color="brand.purple"
                display="flex"
                alignItems="center"
                gap={2}
                _hover={{ textDecoration: 'none', color: 'brand.blue' }}
              >
                <Icon as={FaDiscord} />
                Ask in the Community
              </Link>
            </VStack>
          </VStack>
        </form>
      </MotionBox>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={modalContent.isError ? "red.500" : "green.500"}>
            {modalContent.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {modalContent.message && (
              <Text>{modalContent.message}</Text>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FaucetForm; 