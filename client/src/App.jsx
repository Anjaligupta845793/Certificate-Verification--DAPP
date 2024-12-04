import { useContext, useState } from "react";

import NavBar from "./components/navbar";
import CreateCertificate from "./components/CreateCertificate";
import { Toaster } from "react-hot-toast";
import "@rainbow-me/rainbowkit/styles.css";

import "./App.css";
/* function App() {
  return (
    <>
      <Toaster />
      <NavBar />
      <Stake />
    </>
  );
}

export default App; */
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
          <Toaster />
          <NavBar />
          <CreateCertificate />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
