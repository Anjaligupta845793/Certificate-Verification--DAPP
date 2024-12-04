export const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
export const contractABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "strudentname",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "course",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "certificateId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dateissued",
        type: "uint256",
      },
    ],
    name: "certificateIssued",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "Certificates",
    outputs: [
      {
        internalType: "string",
        name: "studentName",
        type: "string",
      },
      {
        internalType: "string",
        name: "course",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "dateIssued",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "certificateId",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "isValid",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "studentname",
        type: "string",
      },
      {
        internalType: "string",
        name: "course",
        type: "string",
      },
    ],
    name: "_generateCertificateId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "certificateIdList",
    outputs: [
      {
        internalType: "bytes32",
        name: "certificateId",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "certificateid",
        type: "bytes32",
      },
    ],
    name: "getCertificateById",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "studentName",
            type: "string",
          },
          {
            internalType: "string",
            name: "course",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "dateIssued",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "certificateId",
            type: "bytes32",
          },
          {
            internalType: "bool",
            name: "isValid",
            type: "bool",
          },
        ],
        internalType: "struct CertificateManager.Certificate",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "studentname",
        type: "string",
      },
      {
        internalType: "string",
        name: "course",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "dateIssued",
        type: "uint256",
      },
    ],
    name: "issueCertificate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "certificateid",
        type: "bytes32",
      },
    ],
    name: "verifyCertificate",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
