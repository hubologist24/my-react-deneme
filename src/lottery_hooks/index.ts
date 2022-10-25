
import { Interface } from "ethers/lib/utils"
import { Contract } from "ethers"
//import { abi } from "../../abi.json"
import { abi } from "../../LotteryAbi.json"


//goerli const contractAddress = "0x64619dE16650B61760Edd9Bc9ae0f793a9420b6c"
//const contractAddress = "0x3676F64B1238790EBF537C88EF32A415BB711de1"//bsc
//const contractAddress = "0x17c932216dfB1cF17f2BFF5812BeB886586e41C4"
const contractAddress = "0x4F598FbfD964b567E09c23eaF507a4FA4d186458"

const ABI = new Interface(abi)


export const lottery_contract = new Contract(contractAddress, ABI)