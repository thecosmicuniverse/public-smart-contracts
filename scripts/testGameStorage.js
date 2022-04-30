const hre = require("hardhat");
const { ethers, upgrades } = require("hardhat")
require("dotenv").config()

async function main(name, address) {
  const accounts = await ethers.getSigners()

  const contract = await ethers.getContractAt(name, address, accounts[0])
  const skill1 = await contract.getSkill('0x53f0E805bDFa8418213aC7e306e1C0B6c9e44714', 431, 2, 5)
  console.log(skill1.toNumber())
  await contract.upgradeTest('0x53f0E805bDFa8418213aC7e306e1C0B6c9e44714')
  await tx.wait(1)
  const skill1Updated = await contract.getSkill('0x53f0E805bDFa8418213aC7e306e1C0B6c9e44714', 431, 2, 5)
  console.log(skill1Updated.toNumber())
}

main("GameStorageUpgradeableV2", "0x53f0E805bDFa8418213aC7e306e1C0B6c9e44714")
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })