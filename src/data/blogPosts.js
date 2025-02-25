const getRandomImage = (width = 800, height = 400) => {
  return `https://source.unsplash.com/random/${width}x${height}?blockchain,technology`;
};

export const blogPosts = [
  {
    id: 1,
    title: "Why the World Needs Decentralized AI",
    description: "Exploring the importance of decentralization in artificial intelligence and how it shapes the future of technology.",
    date: "2024-02-20",
    category: "Tech",
    thumbnail: getRandomImage(),
    readTime: "5 min read",
    link: "https://0g.ai/blog/why-the-world-needs-decentralized-ai"
  },
  {
    id: 2,
    title: "This Week in Onchain AI Ep. 1 Recap",
    description: "A comprehensive recap of the latest developments in on-chain AI technology and ecosystem updates.",
    date: "2024-02-20",
    category: "Tech",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/this-week-in-onchain-ai-ep-1-recap"
  },
  {
    id: 3,
    title: "0G Deep Dive: Unpacking the World's First AI-Native L1",
    date: "2024-02-18",
    category: "Tech",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/0g-deep-dive-unpacking-the-worlds-first-ai-native-l1"
  },
  {
    id: 4,
    title: "Guild on 0G: A New Frontier for Decentralized AI Builders",
    date: "2024-02-15",
    category: "Tech",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/guild-on-0g-a-new-frontier-for-decentralized-ai-builders"
  },
  {
    id: 5,
    title: "Introducing 0G Hub: Your Gateway to the 0G Ecosystem",
    date: "2024-02-07",
    category: "News",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/introducing-0g-hub-your-gateway-to-the-0g-ecosystem"
  },
  {
    id: 6,
    title: "0G Launches $88.88M Ecosystem Program to Accelerate AI Apps on 0G",
    date: "2024-02-05",
    category: "Industry",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/0g-launches-88.88m-ecosystem-program"
  },
  {
    id: 7,
    title: "Navigating 0G's Tech: An Update On The Latest in 0G's Products",
    date: "2024-01-27",
    category: "News",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/navigating-0gs-tech"
  },
  {
    id: 8,
    title: "0G Newton Testnet: RPC Integration Guide",
    date: "2024-01-16",
    category: "Tech",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/0g-newton-testnet-rpc-integration-guide"
  },
  {
    id: 9,
    title: "0G Introducing ERC-7857",
    date: "2024-01-17",
    category: "Tech",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/0g-introducing-erc-7857"
  },
  {
    id: 10,
    title: "0G.ai and Alibaba Cloud to Advance AI and Web3 Ecosystems in APAC",
    date: "2024-01-13",
    category: "Partners",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/0g-alibaba-cloud-partnership"
  },
  {
    id: 11,
    title: "0G's 2024 in Review: Building the Future of Decentralized AI",
    date: "2023-12-31",
    category: "Tech",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/0g-2024-in-review"
  },
  {
    id: 12,
    title: "0G Node Sale Results",
    date: "2023-12-20",
    category: "0G Foundation",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/0g-node-sale-results"
  },
  {
    id: 13,
    title: "0G Ecosystem Receives $290M in Financing",
    description: "To Develop World's First Decentralized AI Operating System",
    date: "2023-11-13",
    category: "0G Foundation",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/0g-ecosystem-receives-290m-in-financing"
  },
  {
    id: 14,
    title: "0G Demo: A Technical Walkthrough",
    date: "2023-11-13",
    category: "Tech",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/0g-demo-technical-walkthrough"
  },
  {
    id: 15,
    title: "Top Areas of On-Chain AI",
    date: "2023-11-08",
    category: "Industry",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/top-areas-of-on-chain-ai"
  },
  {
    id: 16,
    title: "0G Node Sale Purchasing Guide",
    date: "2024-11-06",
    category: "0G Foundation",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/0g-node-sale-purchasing-guide"
  },
  {
    id: 17,
    title: "0G Serving",
    date: "2024-10-29",
    category: "News",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/0g-serving"
  },
  {
    id: 18,
    title: "0G Foundation and OnePiece Labs Open Applications for AI Accelerator Cohort",
    date: "2024-10-29",
    category: "Tech",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/0g-foundation-and-onepiece-labs-open-applications"
  },
  {
    id: 19,
    title: "0G Foundation AI Alignment Node Sale 101: Key Details and How to Participate",
    date: "2024-10-22",
    category: "0G Foundation",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/0g-foundation-ai-alignment-node-sale-101"
  },
  {
    id: 20,
    title: "Introducing the 0G Foundation: Advancing Decentralized AI as a Public Good",
    date: "2024-10-18",
    category: "0G Foundation",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/introducing-the-0g-foundation"
  },
  {
    id: 21,
    title: "How Does 0G DA Compare to Celestia and EigenLayer?",
    date: "2024-10-17",
    category: "Tech",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/how-does-0g-da-compare"
  },
  {
    id: 22,
    title: "Overview of AI Agents",
    date: "2024-10-08",
    category: "Tech",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/overview-of-ai-agents"
  },
  {
    id: 23,
    title: "Reintroducing 0G: The First Decentralized AI Operating System",
    date: "2024-10-01",
    category: "News",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/reintroducing-0g"
  },
  {
    id: 24,
    title: "Announcing Lumoz and 0G Partnership",
    date: "2024-09-24",
    category: "Partners",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/announcing-lumoz-and-0g-partnership"
  },
  {
    id: 25,
    title: "FOCG Summer Wrap-up",
    date: "2024-09-20",
    category: "News",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/focg-summer-wrap-up"
  },
  {
    id: 26,
    title: "How Web3 and AI can work together",
    date: "2024-09-16",
    category: "Industry",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/how-web3-and-ai-can-work-together"
  },
  {
    id: 27,
    title: "0G's Whitepaper: A Complete Breakdown",
    date: "2024-09-05",
    category: "Tech",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/0g-whitepaper-breakdown"
  },
  {
    id: 28,
    title: "How 0G Can Power Better Web3 Gaming",
    date: "2024-08-19",
    category: "Industry",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/how-0g-can-power-better-web3-gaming"
  },
  {
    id: 29,
    title: "The Evolution of Data Availability in Blockchain and What's Next",
    date: "2024-08-11",
    category: "Tech",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/evolution-of-data-availability"
  },
  {
    id: 30,
    title: "The 0G Ecosystem: A Comprehensive Overview",
    date: "2024-08-06",
    category: "Tech",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/0g-ecosystem-overview"
  },
  {
    id: 31,
    title: "0G Foundation and OnePiece Labs Join Forces to Launch Pioneering Incubation Program",
    date: "2024-07-30",
    category: "News",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/0g-foundation-and-onepiece-labs-join-forces"
  },
  {
    id: 32,
    title: "User Guide: FOCG Summer co-hosted by 0G Labs, Blade Games and Blockbooster",
    date: "2024-07-23",
    category: "Partners",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/focg-summer-user-guide"
  },
  {
    id: 33,
    title: "FOCG Summer co-hosted by 0G Labs, Blade Games and Blockbooster",
    date: "2024-07-08",
    category: "News",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/focg-summer-announcement"
  },
  {
    id: 34,
    title: "0G Partnership with Assister",
    date: "2024-06-29",
    category: "Partners",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/0g-partnership-with-assister"
  },
  {
    id: 35,
    title: "0G x OnePiece Labs x Camp Hackathon",
    date: "2024-06-27",
    category: "News",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/0g-onepiece-labs-camp-hackathon"
  },
  {
    id: 36,
    title: "Strategic Partnership Between 0G and BlockBooster",
    date: "2024-06-25",
    category: "Partners",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/0g-blockbooster-partnership"
  },
  {
    id: 37,
    title: "How to Become a Partner",
    date: "2024-06-18",
    category: "Tech",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/how-to-become-a-partner"
  },
  {
    id: 38,
    title: "0G and Brevis Partners to Enable Trust-Free Cross-Chain DA",
    date: "2024-06-12",
    category: "Partners",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/0g-brevis-partnership"
  },
  {
    id: 39,
    title: "0G Storage",
    date: "2024-06-06",
    category: "Tech",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/0g-storage"
  },
  {
    id: 40,
    title: "Announcing Our Chosen Validators",
    date: "2024-05-30",
    category: "News",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/announcing-chosen-validators"
  },
  {
    id: 41,
    title: "0G's First Community AMA",
    date: "2024-05-29",
    category: "News",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/first-community-ama"
  },
  {
    id: 42,
    title: "Introducing Testnet V2",
    date: "2024-05-24",
    category: "Tech",
    thumbnail: getRandomImage(),
    link: "https://0g.ai/blog/introducing-testnet-v2"
  }
];

export const categories = [
  { value: 'all', label: 'View all' },
  { value: 'tech', label: 'Tech' },
  { value: 'news', label: 'News' },
  { value: 'partners', label: 'Partners' },
  { value: 'industry', label: 'Industry' },
  { value: '0g foundation', label: '0G Foundation' }
]; 