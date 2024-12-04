// src/components/NavBar.js
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const NavBar = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-400 shadow-lg">
      {/* Left Side: Certify Title */}
      <h1 className="text-5xl text-white font-bold">Certify</h1>

      {/* Right Side: Connect Button */}
      <ConnectButton />
    </nav>
  );
};

export default NavBar;
