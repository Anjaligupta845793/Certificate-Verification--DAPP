import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="w-full  ">
      <Navbar />
      <div className="max-w-[1260px] text-center mx-auto md:py-40 py-20 flex flex-col justify-center">
        <h1 className="md:text-6xl text-3xl font-bold ">
          Revolutionize Trust with Blockchain-Powered Certificate Verification.
        </h1>
        <p className="md:text-3xl md:my-10 my-4 text-2xl ">
          Say goodbye to fake credentials. Validate academic, professional, and
          training certificates with ease using decentralized blockchain
          technology.
        </p>
        <button className="p-2 rounded-lg bg-blue-700 text-black font-bold w-[200px] mx-auto">
          Verify Now
        </button>
      </div>
    </div>
  );
};

export default Home;
