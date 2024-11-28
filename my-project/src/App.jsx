import Navbar from "../components/Navbar";
import "@rainbow-me/rainbowkit/styles.css";
import "./index.css"; // Ensure this is imported before App.css
import "./App.css";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  hardhat,
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Home } from "../components/Home";

const config = getDefaultConfig({
  appName: "certificate-verification-systme",
  projectId: "757738f627b63d5ab1c8b925f2acd1b7",
  chains: [mainnet, polygon, optimism, arbitrum, base, hardhat],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

function App() {
  const queryClient = new QueryClient();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div>
            <Home />
            <Navbar />
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
