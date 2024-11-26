// SPDX-License-Identifier: MIT



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


mapping(bytes32 => Certificate) public Certificates;
address public owner;
bytes32[] public certificateId;


event certificateIssued(string strudentname, string course,bytes32 certificateId, uint dateissued);

modifier onlyOwner() {
    require(msg.sender == owner, "only owner can call this function");
    _;
}

constructor(){
   owner = msg.sender;
}


function issueCertificate(string memory studentname, string memory course , uint dateIssued  ) external onlyOwner()  {
     bytes32   certificateid = _generateCertificateId(studentname, course );
     Certificates[certificateid] = Certificate(studentname, course ,dateIssued,certificateid, true);
     emit certificateIssued(studentname, course, certificateid, dateIssued);
     

} 

///////////////////GETTER FUNCTION//////////////////////////
function verifyCertificate(bytes32 certificateid) public view returns(bool){
    
    return  Certificates[certificateid].isValid;
}

function getCertificateById(bytes32 certificateid)  public view returns(Certificate memory){
        return Certificates[certificateid];
}


/////////////////////INTARNAL FUNCTION/////////////////////////
function _generateCertificateId(string memory studentname, string  memory course) public view returns(bytes32){
    bytes32   certificateid = keccak256(abi.encodePacked(studentname , course , block.timestamp ));
    return certificateid;
}

       
}