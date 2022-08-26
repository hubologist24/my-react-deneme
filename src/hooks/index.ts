
import { Interface } from "ethers/lib/utils"
import { Contract } from "ethers"
import { abi } from "../../abi.json"

//goerli const contractAddress = "0x64619dE16650B61760Edd9Bc9ae0f793a9420b6c"
const contractAddress = "0x3676F64B1238790EBF537C88EF32A415BB711de1"//bsc
const ABI = new Interface(abi)


export const contract = new Contract(contractAddress, ABI)