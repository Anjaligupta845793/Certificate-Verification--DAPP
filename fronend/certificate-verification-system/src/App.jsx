import { useState } from "react";
import { WagmiProvider } from "wagmi";
import { config } from "../config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Profile } from "../components/Profile";
import "./App.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Profile />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
