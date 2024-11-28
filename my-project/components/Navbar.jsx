import React from "react";
import { address } from "../context/context";
import { contractABI } from "../context/context";
import {
  useReadContract,
  useWriteContract,
  useWatchContractEvent,
} from "wagmi";

const Navbar = () => {
  const { writeContract, status } = useWriteContract();
  useWatchContractEvent({
    address,
    contractABI,
    eventName: "certificateIssued",
    onLogs(logs) {
      logs.forEach((log) => {
        const { args } = log; // Destructure args from log
        console.log("Event Args:", args); // Log the event arguments
      });
    },
    onError(error) {
      console.error("Error watching contract events:", error);
    },
  });

  const issue = async () => {
    try {
      console.log("Button clicked");
      await writeContract({
        abi: contractABI,
        address,
        functionName: "issueCertificate",
        args: ["anjali", "blockchain development", 200],
      });
      console.log(status);
    } catch (error) {
      console.error(error);
    }
  };

  const {
    data: certificateId,
    error: IdError,
    isLoading: certificateLoading,
  } = useReadContract({
    abi: contractABI,
    address,
    functionName: "certificateId",
  });

  return (
    <div>
      <button onClick={() => console.log(certificateId)}>read</button>
      <button onClick={issue}> issue certificate</button>
    </div>
  );
};

export default Navbar;
