import React from 'react';
import { HStack, Link, Icon, Tooltip } from '@chakra-ui/react';
import { FaXTwitter, FaTelegram, FaDiscord, FaGlobe } from 'react-icons/fa6';

const BRAND_COLORS = {
  purple: '#B14EFF',
  cream: '#FFFBF5',
  coral: '#FF6270',
  peach: '#FFA18F',
  yellow: '#FFDB3B',
  blue: '#3BADFF'
};

const socialLinks = [
  {
    name: 'X (Twitter)',
    icon: FaXTwitter,
    href: 'https://twitter.com/0GLabs',
    color: 'gray.800'
  },
  {
    name: 'Telegram',
    icon: FaTelegram,
    href: 'https://t.me/OGLabs',
    color: '#229ED9'
  },
  {
    name: 'Discord',
    icon: FaDiscord,
    href: 'https://discord.gg/0glabs',
    color: '#5865F2'
  },
  {
    name: 'Website',
    icon: FaGlobe,
    href: 'https://0g.ai',
    color: BRAND_COLORS.purple
  }
];

const SocialLinks = () => {
  return (
    <HStack 
      spacing={4} 
      justify="center"
      width="full"
    >
      {socialLinks.map((social) => (
        <Tooltip 
          key={social.name}
          label={social.name}
          placement="top"
          hasArrow
        >
          <Link
            href={social.href}
            isExternal
            _hover={{
              transform: 'translateY(-2px)',
              color: social.color
            }}
            transition="all 0.2s"
          >
            <Icon
              as={social.icon}
              boxSize={5}
              color="gray.500"
              _hover={{
                color: social.color
              }}
            />
          </Link>
        </Tooltip>
      ))}
    </HStack>
  );
};

export default SocialLinks; 