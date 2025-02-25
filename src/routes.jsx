import { createBrowserRouter } from 'react-router-dom';
import Overview from './pages/Analytics/Overview';
// ... other imports

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      // ... other routes
      {
        path: 'on-chain/analytics',
        children: [
          {
            path: 'overview',
            element: <Overview />
          },
          {
            path: 'token',
            element: <TokenAnalytics />
          },
          // ... other analytics routes
        ]
      }
    ]
  }
]); 