import { ethers } from "hardhat";

async function main() {

  const Todolist = await ethers.deployContract("Todolist");

  await Todolist.waitForDeployment();

  console.log(
    `Todolist deployed to ${Todolist.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
