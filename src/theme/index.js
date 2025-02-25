import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      purple: '#B14EFF',
      coral: '#FF6270',
      peach: '#FFA18F',
      yellow: '#FFDB3B',
      blue: '#3BADFF',
      cream: '#FFFBF5'
    }
  },
  fonts: {
    heading: 'Familjen Grotesk, sans-serif',
    body: 'Familjen Grotesk, sans-serif'
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: '500',
        borderRadius: 'full'
      },
      variants: {
        solid: {
          bg: 'brand.purple',
          color: 'white',
          _hover: {
            bg: 'brand.purple',
            opacity: 0.9
          }
        },
        outline: {
          borderColor: 'brand.purple',
          color: 'brand.purple',
          _hover: {
            bg: 'rgba(177, 78, 255, 0.1)'
          }
        }
      }
    },
    Card: {
      baseStyle: {
        container: {
          bg: 'white',
          borderRadius: 'xl',
          boxShadow: 'sm',
          overflow: 'hidden',
          transition: 'all 0.2s',
          _hover: {
            boxShadow: 'md',
            transform: 'translateY(-2px)'
          }
        }
      }
    },
    Input: {
      variants: {
        outline: {
          field: {
            borderRadius: 'full',
            borderColor: 'gray.200',
            _focus: {
              borderColor: 'brand.purple',
              boxShadow: '0 0 0 1px var(--chakra-colors-brand-purple)'
            }
          }
        }
      }
    },
    Tag: {
      baseStyle: {
        container: {
          borderRadius: 'full'
        }
      }
    }
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800'
      }
    }
  }
});

export default theme; 