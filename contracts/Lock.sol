// SPDX-License-Identifier: MIT

// This is considered an Exogenous, Decentralized, Anchored (pegged), Crypto Collateralized low volitility coin

// Layout of Contract:
// version
// imports
// interfaces, libraries, contracts
// errors
// Type declarations
// State variables
// Events
// Modifiers
// Functions

// Layout of Functions:
// constructor
// receive function (if exists)
// fallback function (if exists)
// external
// public
// internal
// private
// view & pure functions

pragma solidity ^0.8.27;

// Uncomment this line to use console.log
// import "hardhat/console.sol";


contract CertificateManager {

struct Certificate {
    string studentName;
    string course;
    uint dateIssued;
    bytes32 certificateId;
    bool isValid;
}



mapping(bytes32 => Certificate) private Certificates;
address private owner;

////////////////////EVENTS/////////////////////
event certificateIssued(string strudentname, string course, uint dateissued);
////////////////////EVENTS/////////////////////


////////////////////MODIFIERS/////////////////////

modifier onlyOwner() {
    require(msg.sender == owner, "only owner can call this function ");
    _;
}
////////////////////MODIFIERS/////////////////////

////////////////////FUNCTIONS/////////////////////

constructor(){
   owner = msg.sender;
}
////////////////////FUNCTIONS/////////////////////




function issueCertificate(string memory studentname, string memory course , uint dateIssued  ) external onlyOwner() {
     bytes32   certificateId = _generateCertificateId(studentname, course );
     Certificates[certificateId] = Certificate(studentname, course ,dateIssued,certificateId, true);
     emit certificateIssued(studentname, course, dateIssued);

} 

function _generateCertificateId(string memory studentname, string  memory course) internal view returns(bytes32){
    bytes32   certificateId = keccak256(abi.encodePacked(studentname , course , block.timestamp ));
    return certificateId;
}

       
}