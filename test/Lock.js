const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("CertificateManager", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployCertificateContractLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const CertificateContract = await ethers.getContractFactory(
      "CertificateManager"
    );
    const Certificate = await CertificateContract.deploy();

    return { Certificate, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { Certificate, owner } = await loadFixture(
        deployCertificateContractLockFixture
      );

      expect(await Certificate.owner()).to.equal(owner.address);
    });
  });

  describe("IssueCertificate ", function () {
    it("should revert with only owner can call issueCertificate function when called by other account rather then owner ", async function () {
      const { Certificate, owner, otherAccount } = await loadFixture(
        deployCertificateContractLockFixture
      );
      await expect(
        Certificate.connect(otherAccount).issueCertificate(
          "anjali",
          "blockchain",
          22
        )
      ).to.revertedWith("only owner can call this function");
    });

    it("should register certificate in mapping after calling issuecertificate function ", async () => {
      const { Certificate, owner } = await loadFixture(
        deployCertificateContractLockFixture
      );
      const tx = await Certificate.issueCertificate("anjali", "blockchain", 22);

      await tx.wait();

      const id = await Certificate._generateCertificateId(
        "anjali",
        "blockchain"
      );
      const certificateStruct = await Certificate.Certificates(id);
      expect(certificateStruct.studentName).to.equal("anjali");
      expect(certificateStruct.course).to.equal("blockchain");
      expect(certificateStruct.dateIssued).to.equal(22);
      expect(certificateStruct.certificateId).to.equal(id);
      expect(certificateStruct.isValid).to.equal(true);
    });

    it("Should emit event after calling issueCertificate function", async () => {
      const { Certificate, owner, otherAccount } = await loadFixture(
        deployCertificateContractLockFixture
      );
      const id = await Certificate._generateCertificateId(
        "anjali",
        "blockchain"
      );

      await expect(
        Certificate.issueCertificate("anjali", "blockchain", 22)
      ).to.emit(Certificate, "certificateIssued");
    });
  });

  describe("VerifyCertificate", function () {
    it("Should return false without issuing certificate  ", async () => {
      const { Certificate, owner } = await loadFixture(
        deployCertificateContractLockFixture
      );
      const id = await Certificate._generateCertificateId(
        "anjali",
        "blockchain"
      );
      expect(await Certificate.verifyCertificate(id)).to.equal(false);
    });
  });
});
