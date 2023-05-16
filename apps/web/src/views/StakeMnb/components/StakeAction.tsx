import { Card, Flex, CardBody, Heading, Text, CardHeader, Button, Input } from '@pancakeswap/uikit'
import { useWeb3LibraryContext, useWeb3React } from '@pancakeswap/wagmi';
import React, { useState } from 'react'
import { useContract, useTokenContract } from 'hooks/useContract';
import { TransactionResponse } from '@ethersproject/providers'
import { ethers } from 'ethers';
import FloppyContract from '../helpers/FloppyContract';
import FloppyStakeContract from '../helpers/FloppyStakeContract';
import { STAKE_PACKAGE } from './type';



export interface StakeActionProps {
    availableAmount: number;
    pSelected: STAKE_PACKAGE;
}

const StakeAction: React.FC<StakeActionProps> = ({
    availableAmount,
    pSelected
}) => {


const [value, setValue] = React.useState<number>(0)
const {account} = useWeb3React()
const [approved, setApporved] = useState<boolean>(true)
const [confirmed, setConfirmed] = useState<boolean>(true)
const [warning, setWarning] = useState<boolean>(false)
const tokenContract = useTokenContract("0x89214191f4A9632f4dcd09b20404A443f5E287fd", true)
const [balance, setBalance] = useState<number>(0)

const checkBalance = async () => {
    
        const estimatedGas = await tokenContract.balanceOf(account).then((response) => {
           // general fallback for tokens who restrict approval amounts
           
           console.log(response)
           return tokenContract.balanceOf(account).catch(() => {
             console.log('estimate gas failure')
           
             return null
           })
         })
       console.log( Number(ethers.utils.formatEther(estimatedGas._hex)).toFixed(0))
       const formattedBalance = Number(Number(ethers.utils.formatEther(estimatedGas._hex)).toFixed(0))
      setBalance(formattedBalance)
       }



const handleStake = () => {

console.log({pSelected, account})
if(account) {
console.log(account)
} else{
console.log('hi')
}
}

    return(
       
          
        <>
          <Heading><Flex justifyContent="space-between" flexDirection="column" alignItems="center" >
                <Flex justifyContent="space-between" flexDirection="row" alignItems="center" marginBottom="5px">
                <Text pb="2px" bold>Available Pool Limit : </Text>
                <Text bold pl="100px">${availableAmount}</Text>
                </Flex>
                <Flex justifyContent="space-between" flexDirection="row" alignItems="center" marginBottom="5px">
                <Text pb="2px" bold>Maximum Stake Token : </Text>
                <Text bold pl="100px">2000</Text>
                </Flex>
                <Flex justifyContent="space-between" flexDirection="row" alignItems="center" marginBottom="5px">
                <Text pb="2px" bold> MNB token Balance : </Text>
                <Text bold pl="100px">{balance}</Text>
                </Flex>
                <Flex justifyContent="space-between" flexDirection="row" alignItems="center" marginBottom="5px">
                <Text pb="2px" bold>MNB Staked Balance : </Text>
                <Text bold pl="100px">{balance}</Text>
                </Flex>
              
                
             </Flex></Heading>
               
               <Text pb="2px">Enter amount:</Text>
               <Input scale='lg' value={value} type="number" isWarning={warning} onChange={(e) => {
                if(Number(e.target.value) > 2000){
                    setWarning(true)
                }
                 else{
                    setWarning(false)
                    setValue(parseInt(e.target.value))
                 }
                
            }}/>
               <Button width="100%" disabled={false} onClick={async () => checkBalance()} variant="subtle" marginTop="20px" >Approve</Button>
               <Button width="100%" disabled={confirmed} variant="danger" marginTop="20px" >Confirm</Button>
               </>
       
    )
}

export default StakeAction