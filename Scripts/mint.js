const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/Akash.json");

const tokenAddress = "0x73900Dd062bf28586719b18eB81B6849D83fcd9F";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xDdFeF4e1FEa36677e90ab6e54547BD4e628271d4"; 

const lst = ["ipfs://QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH","ipfs://QmWpxcMjXADF9mEAkvpPSSAqGb4MEW4LtP7G97jXtjJJ8P", "ipfs://Qmd729Pw6GDhzyarSCgxq47kkZ8zVaYmsrgYBdzn5duLKU" ,"ipfs://QmVEz7TD1To7fYJrbZJX7xqBA9oRoxd4N5GvFDujSSbrW6", "ipfs://QmPz9iEtuGJn845ditXzsXvnrxEt9s4g7LSszzpC9v6cAP"]

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    
    for(let i = 0; i < lst.length; i++){
      const tx = await token.mint(walletAddress, i+6, lst[i]);
      await tx.wait();
    }
    
    const balance = await token.balanceOf(walletAddress);
    console.log(`You now have: ${balance.toString()} tokens`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
