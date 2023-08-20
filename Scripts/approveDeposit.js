// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/Akash.json");

const tokenAddress = "0x73900Dd062bf28586719b18eB81B6849D83fcd9F";
const tokenABI = tokenContractJSON.abi;
const fxERC721RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0xDdFeF4e1FEa36677e90ab6e54547BD4e628271d4"; 
async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721RootAddress);
    for(let i=0;i<5;i++)
     {const approveTx = await tokenContract.approve(fxERC721RootAddress, i+5);
    await approveTx.wait();
    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, i+5, "0x6556");
    await depositTx.wait();

    console.log('Approval confirmed');
    console.log("Tokens deposited");
     }


  
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
