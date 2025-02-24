export const projects = [
  {
    id: 1,
    name: "0G Swap",
    description: "Decentralized exchange built on 0G Network with high performance and low fees.",
    banner: "/projects/0g-swap-banner.jpg",
    logo: "/projects/0g-swap-logo.png",
    tags: ["DeFi", "DEX", "AMM"],
    featured: true,
    url: "https://swap.0g.ai",
    category: "defi",
    stats: {
      tvl: "$5.2M",
      volume24h: "$1.2M",
      users: "12.5K"
    }
  },
  {
    id: 2,
    name: "0G Bridge",
    description: "Cross-chain bridge connecting 0G Network with other major blockchains.",
    banner: "/projects/0g-bridge-banner.jpg",
    logo: "/projects/0g-bridge-logo.png",
    tags: ["Bridge", "Cross-chain", "Infrastructure"],
    featured: true,
    url: "https://bridge.0g.ai",
    category: "infrastructure",
    stats: {
      tvl: "$8.1M",
      transfers: "45K+",
      chains: "6"
    }
  },
  // Thêm nhiều projects khác...
];

export const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'defi', label: 'DeFi' },
  { value: 'infrastructure', label: 'Infrastructure' },
  { value: 'nft', label: 'NFT' },
  { value: 'gaming', label: 'Gaming' },
  { value: 'dao', label: 'DAO' }
];

export const sortOptions = [
  { value: 'featured', label: 'Featured First' },
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'alphabetical', label: 'A-Z' }
]; 