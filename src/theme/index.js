import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      purple: '#B14EFF',
      cream: '#FFFBF5',
      coral: '#FF6270',
      peach: '#FFA18F',
      yellow: '#FFDB3B',
      blue: '#3BADFF',
      dark: '#1A1A1A',
      gray: '#F7F9FC',
      lightPurple: 'rgba(177, 78, 255, 0.1)'
    }
  },
  fonts: {
    heading: '"Familjen Grotesk", sans-serif',
    body: '"Familjen Grotesk", sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: '600',
        borderRadius: 'full',
      },
      variants: {
        solid: {
          bg: 'brand.purple',
          color: 'white',
          _hover: { bg: 'brand.blue' },
          _active: { bg: 'brand.blue' }
        },
        outline: {
          borderColor: 'brand.purple',
          color: 'brand.purple',
          _hover: { bg: 'brand.lightPurple' }
        }
      }
    },
    Card: {
      baseStyle: {
        bg: 'white',
        borderRadius: '2xl',
        overflow: 'hidden',
        transition: 'all 0.2s',
        _hover: {
          transform: 'translateY(-5px)',
          boxShadow: 'lg'
        }
      }
    },
    Tag: {
      baseStyle: {
        container: {
          fontWeight: '500',
        }
      },
      variants: {
        subtle: {
          container: {
            bg: 'brand.lightPurple',
            color: 'brand.purple'
          }
        }
      }
    }
  },
  styles: {
    global: {
      body: {
        bg: 'brand.gray',
        color: 'brand.dark',
      }
    }
  }
});

export default theme; 