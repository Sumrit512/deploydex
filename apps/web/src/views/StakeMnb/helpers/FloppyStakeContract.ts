import { ethers } from "ethers";
import {TransactionResponse} from "@ethersproject/abstract-provider";
import abi from 'config/abi/floppyStaking.json'
import { STAKING_ADDRESS } from "./config";


class FloppyStakeContract {
private _provider: ethers.providers.Web3Provider;

private _contract: ethers.Contract;

_address: string;

constructor(provider: ethers.providers.Web3Provider) {
  this._provider = provider;
  this._address = STAKING_ADDRESS;
  this._contract = new ethers.Contract(this._address, abi, provider)
}

}

export default FloppyStakeContract;