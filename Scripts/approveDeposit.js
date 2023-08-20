// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/Project1.json");

const tokenAddress = "0x0A450a84b1eCC3a21b6E9f9B177E942252c4DC7D";
const tokenABI = tokenContractJSON.abi;
const fxERC721RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0x56A75D486a273C891c223Cb7BD305651549B5DA9"; 
async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721RootAddress);
    for(let i=0;i<5;i++)
     {const approveTx = await tokenContract.approve(fxERC721RootAddress, i);
    await approveTx.wait();
    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, i, "0x6556");
    await depositTx.wait();

    console.log('Approval confirmed');
    console.log("Tokens deposited");
     }


  
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });