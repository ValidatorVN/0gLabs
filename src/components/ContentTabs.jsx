import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Icon,
  Text,
  HStack,
} from '@chakra-ui/react';
import { FaHome, FaYoutube, FaCalendarAlt, FaBlog } from 'react-icons/fa';
import HomeTab from './ContentTabs/HomeTab';
import YoutubeTab from './ContentTabs/YoutubeTab';
import EventTab from './ContentTabs/EventTab';
import BlogTab from './ContentTabs/BlogTab';

const ContentTabs = () => {
  return (
    <Tabs variant="soft-rounded" colorScheme="purple">
      <TabList mb={6} gap={2}>
        <Tab>
          <HStack spacing={2}>
            <Icon as={FaHome} />
            <Text>Home</Text>
          </HStack>
        </Tab>
        <Tab>
          <HStack spacing={2}>
            <Icon as={FaYoutube} />
            <Text>Youtube</Text>
          </HStack>
        </Tab>
        <Tab>
          <HStack spacing={2}>
            <Icon as={FaCalendarAlt} />
            <Text>Event</Text>
          </HStack>
        </Tab>
        <Tab>
          <HStack spacing={2}>
            <Icon as={FaBlog} />
            <Text>Blog</Text>
          </HStack>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel p={0}>
          <HomeTab />
        </TabPanel>
        <TabPanel p={0}>
          <YoutubeTab />
        </TabPanel>
        <TabPanel p={0}>
          <EventTab />
        </TabPanel>
        <TabPanel p={0}>
          <BlogTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ContentTabs; 