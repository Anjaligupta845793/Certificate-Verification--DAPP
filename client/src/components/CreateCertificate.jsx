import React, { useState } from "react";
import { address, contractABI } from "../context/context";
import {
  useAccount,
  useReadContract,
  useWriteContract,
  useWatchContractEvent,
} from "wagmi";

const CreateCertificate = () => {
  const [studentName, setStudentName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const account = useAccount();
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

  const issueCertificate = async () => {
    try {
      console.log("Button clicked");
      console.log(account);
      console.log(studentName, courseName, issueDate);
      // Validate inputs
      if (!studentName || !courseName || !issueDate) {
        throw new Error("Invalid input: All parameters must be provided.");
      }

      await writeContract({
        contractABI,
        address,
        functionName: "issueCertificate",
        args: [studentName, courseName, issueDate],
      });
    } catch (error) {
      console.error("Error during transaction:", error.message || error);
    }
  };

  const {
    data: certificateId,
    error: IdError,
    isLoading: certificateLoading,
  } = useReadContract({
    contractABI,
    address,
    functionName: "certificateIdList",
    args: ["anjali"],
  });

  return (
    <div className="flex h-screen">
      {/* Left Side - Form */}
      <div className="w-1/2 p-10 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6">Create Certificate</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Student Name
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter student name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Course Name
            </label>
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter course name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Issue Date
            </label>
            <input
              type="date"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          {/* Register Button */}
          <button
            type="button"
            onClick={issueCertificate}
            className="w-full mt-4 bg-gray-600 text-white font-semibold py-2 rounded-md hover:bg-gray-500 transition duration-200"
          >
            Register
          </button>
          <button
            type="button"
            onClick={() => console.log(certificateId)}
            className="w-full mt-4 bg-gray-600 text-white font-semibold py-2 rounded-md hover:bg-gray-500 transition duration-200"
          >
            Read
          </button>
        </form>
      </div>

      {/* Right Side - Certificate Preview */}
      <div className="w-1/2 p-10 bg-white border-l border-gray-200">
        <h2 className="text-xl font-bold mb-4">Certificate Preview</h2>
        <div className="border border-gray-300 rounded-lg p-6">
          <h3 className="text-center text-lg font-semibold">
            Certificate of Completion
          </h3>
          <p className="mt-4 text-center">This certifies that</p>
          <h1 className="text-center text-3xl font-bold my-2">
            {studentName || "Student Name"}
          </h1>
          <p className="text-center">has completed the course</p>
          <h2 className="text-center text-xl font-semibold my-2">
            {courseName || "Course Name"}
          </h2>
          {issueDate && (
            <p className="text-center mt-4">
              Issued on {new Date(issueDate).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateCertificate;
