// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/Project1.json");

const tokenAddress = "0x0A450a84b1eCC3a21b6E9f9B177E942252c4DC7D";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x56A75D486a273C891c223Cb7BD305651549B5DA9"; 


const lst = ["ipfs://QmbzLiawt5LjQhcsdgrM6YYigxGyRuqVnPTK77xAWPXjZb","ipfs://QmZXeNuzLmdKjgsYa4jdt7XMegeEkwyhTY9HidAY9qdFdp", "ipfs://QmdzKXnLJ3VG6wS2GLKgbKmf1oxoEhj4VCBenB3NPJLogM" ,"ipfs://QmSqcFJL2tAB9Jju5ooVZibUpsfMAhAGh5PbAYiUCnDF8D", "ipfs://QmYM54bk33qowude1TbuE6jH4uUVAsTJtHoS4MjBTZGtkY"]
async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    
    for(let i=0;i<=lst.length;i++){
      const tx = await token.mint(walletAddress,i+5,lst[i]);
      await tx.wait();
    }
  

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });