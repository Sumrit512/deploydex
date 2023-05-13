import abi from 'config/abi/floppy.json'
import { ethers } from 'ethers'
import { FLOPPY_ADDRESS } from './config'


class FloppyContract{
    private _provider: ethers.providers.Web3Provider;

    private _contract: ethers.Contract;

    _address: string;

    constructor (provider: ethers.providers.Web3Provider) {
         this._provider = provider;
         this._address = FLOPPY_ADDRESS;
         this._contract= new ethers.Contract(this._address, abi, provider);
    }

    async approve(address, amount ) {
       await this._contract.approve(address, ethers.utils.formatEther(amount));
    }

}

export default FloppyContract