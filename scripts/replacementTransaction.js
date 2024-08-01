const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  const accounts = await ethers.getSigners();
  const signer = accounts[0]; 

  
  const nonce = 0; 

  
  const gasPrice = ethers.utils.parseUnits('100', 'gwei');

  
  const tx = await signer.provider.getTransaction(signer.address, nonce);
  const { to, value, data } = tx;

  
  const txResponse = await signer.sendTransaction({
    to,
    value,
    data,
    gasPrice,
    nonce,
  });

  console.log(`Replacement transaction sent: ${txResponse.hash}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
