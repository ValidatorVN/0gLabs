import React, { useState, useEffect } from 'react';
import {
  SimpleGrid,
  Box,
  Image,
  Text,
  LinkBox,
  LinkOverlay,
  AspectRatio,
  Skeleton,
  VStack,
  HStack,
  Icon,
  Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaYoutube, FaCalendar, FaExternalLinkAlt } from 'react-icons/fa';

const MotionBox = motion(Box);

const YOUTUBE_CHANNEL_ID = 'UCp5nMw3iFhqVy9UpnGQ0hdQ';
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

// Add mock data
const MOCK_VIDEOS = [
  {
    id: { videoId: '1234' },
    snippet: {
      publishedAt: '2024-01-20T10:00:00Z',
      title: '0G Labs Introduction',
      description: 'Learn about 0G Labs and our ecosystem',
      thumbnails: {
        high: { url: 'https://picsum.photos/800/450' }
      }
    }
  },
  {
    id: { videoId: '5678' },
    snippet: {
      publishedAt: '2024-01-15T10:00:00Z',
      title: 'How to Use 0G Protocol',
      description: 'A step-by-step guide to using 0G Protocol',
      thumbnails: {
        high: { url: 'https://picsum.photos/800/450' }
      }
    }
  },
  // Add more mock videos...
];

const VideoCard = ({ video }) => {
  const publishDate = new Date(video.snippet.publishedAt).toLocaleDateString();
  
  return (
    <LinkBox 
      as={MotionBox}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      bg="white"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="sm"
    >
      <AspectRatio ratio={16/9}>
        <Image
          src={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
          objectFit="cover"
        />
      </AspectRatio>
      <VStack align="stretch" p={5} spacing={4}>
        <VStack align="start" spacing={2}>
          <HStack spacing={2} color="gray.500" fontSize="sm">
            <Icon as={FaYoutube} color="red.500" />
            <Text>YouTube</Text>
            <Text>•</Text>
            <Text>{publishDate}</Text>
          </HStack>
          
          <LinkOverlay 
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            isExternal
          >
            <Text fontSize="lg" fontWeight="600" noOfLines={2} lineHeight="1.4">
              {video.snippet.title}
            </Text>
          </LinkOverlay>
        </VStack>

        <Text fontSize="sm" color="gray.600" noOfLines={2}>
          {video.snippet.description}
        </Text>

        <Button
          as="a"
          href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
          target="_blank"
          size="sm"
          variant="outline"
          colorScheme="gray"
          rightIcon={<FaExternalLinkAlt />}
          mt={2}
        >
          Watch Video
        </Button>
      </VStack>
    </LinkBox>
  );
};

const LoadingSkeleton = () => (
  <Box bg="white" borderRadius="xl" overflow="hidden" boxShadow="sm">
    <Skeleton height="200px" />
    <VStack align="stretch" p={5} spacing={4}>
      <VStack align="start" spacing={2}>
        <Skeleton height="20px" width="120px" />
        <Skeleton height="24px" width="full" />
        <Skeleton height="24px" width="80%" />
      </VStack>
      <Skeleton height="20px" width="90%" />
      <Skeleton height="36px" width="120px" />
    </VStack>
  </Box>
);

const YoutubeTab = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call with mock data
    setTimeout(() => {
      setVideos(MOCK_VIDEOS);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (error) {
    return (
      <VStack spacing={4} align="center" py={10}>
        <Icon as={FaYoutube} boxSize={10} color="red.500" />
        <Text color="red.500">Error loading videos: {error}</Text>
      </VStack>
    );
  }

  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {isLoading
          ? [...Array(6)].map((_, i) => <LoadingSkeleton key={i} />)
          : videos.map((video) => (
              <VideoCard key={video.id.videoId} video={video} />
            ))
        }
      </SimpleGrid>
    </Box>
  );
};

export default YoutubeTab; 