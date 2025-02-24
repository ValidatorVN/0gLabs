import { ChakraProvider, Flex, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { WalletProvider } from './contexts/WalletContext';
import theme from './theme';
import Sidebar from './components/Sidebar';
import Portfolio from './pages/Portfolio';
import Contents from './pages/Contents';
import Ecosystem from './pages/Ecosystem';
import Analytics from './pages/Analytics';
import Faucet from './pages/Faucet';
import Explorer from './pages/Explorer';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <WalletProvider>
        <Router>
          <Flex minH="100vh">
            <Sidebar />
            <Box 
              ml="280px" 
              w="calc(100% - 280px)" 
              bg="brand.gray" 
              p={8}
              maxW="1480px"
            >
              <Routes>
                <Route path="/" element={<Navigate to="/portfolio" replace />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contents" element={<Contents />} />
                <Route path="/ecosystem" element={<Ecosystem />} />
                <Route path="/ecosystem/:id" element={<ProjectDetail />} />
                <Route path="/analytics/*" element={<Analytics />} />
                <Route path="/faucet" element={<Faucet />} />
                <Route path="/explorer" element={<Explorer />} />
              </Routes>
            </Box>
          </Flex>
        </Router>
      </WalletProvider>
    </ChakraProvider>
  );
}

export default App;
