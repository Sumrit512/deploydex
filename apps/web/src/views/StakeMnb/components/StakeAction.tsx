import { Card, Flex, CardBody, Heading, Text, CardHeader, Button, Input } from '@pancakeswap/uikit'
import { useWeb3LibraryContext, useWeb3React } from '@pancakeswap/wagmi';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { MaxUint256 } from '@ethersproject/constants'
import { useContract, useTokenContract } from 'hooks/useContract';
import { TransactionResponse } from '@ethersproject/providers'
import { ethers } from 'ethers';
import FloppyContract from '../helpers/FloppyContract';
import FloppyStakeContract from '../helpers/FloppyStakeContract';
import { STAKE_PACKAGE } from './type';

// import { calculateGasMargin } from 'utils';



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
const [approved, setApporved] = useState<boolean>(false)
const [confirmed, setConfirmed] = useState<boolean>(false)
const [warning, setWarning] = useState<boolean>(false)
const tokenContract = useTokenContract("0x89214191f4A9632f4dcd09b20404A443f5E287fd", true)
const [balance, setBalance] = useState<number>(0)
const [isTokenApproved, setIsTokenApproved] = useState(false)
const [isTokenStaked, setIsTokenStaked] = useState(true)
// const approveTrans = () => {
//     const estimatedGas = await tokenContract.estimateGas.approve(spender, MaxUint256).catch(() => {
//         // general fallback for tokens who restrict approval amounts
     
//         return tokenContract.estimateGas.approve(spender, amountToApprove.quotient.toString()).catch(() => {
//           console.error('estimate gas failure')
//           toastError(t('Error'), t('Unexpected error. Could not estimate gas for the approve.'))
//           return null
//         })
//       })
  
//       if (!estimatedGas) return undefined
  
//       return callWithGasPrice(
//         tokenContract,
//         'approve',
//         [spender, MaxUint256],
//         {
//           gasLimit: calculateGasMargin(estimatedGas),
//         },
//       )
//         .then((response: TransactionResponse) => {
//           addTransaction(response, {
//             summary: `Approve ${amountToApprove.currency.symbol}`,
//             translatableSummary: { text: 'Approve %symbol%', data: { symbol: amountToApprove.currency.symbol } },
//             approval: { tokenAddress: token.address, spender },
//             type: 'approve',
//           })
//         })
//         .catch((error: any) => {
          
//           console.error('Failed to approve token', error)
//           if (error?.code !== 4001) {
//             toastError(t('Error'), error.message)
//           }
//           throw error
//         })
//     }, [approvalState, token, tokenContract, amountToApprove, spender, addTransaction, callWithGasPrice, t, toastError])
  
// }


const checkBalance = async () => {
    console.log(await MaxUint256)
        const estimatedGas = await tokenContract.approve( '0xa44e0C6EBE537a1Fe130407b41Fa133a4F3b599e',MaxUint256 ).then((response) => {
           // general fallback for tokens who restrict approval amounts
           
           console.log(response)
           return tokenContract.approve( '0xa44e0C6EBE537a1Fe130407b41Fa133a4F3b599e',MaxUint256 ).catch(() => {
             console.log('estimate gas failure')
             return null
           })
         })
       console.log( Number(ethers.utils.formatEther(estimatedGas._hex)).toFixed(0))
     const formattedAllowedAmount = Number(Number(ethers.utils.formatEther(estimatedGas._hex)).toFixed(0))
     if(formattedAllowedAmount < 2000){
        console.log('allowance is less than 2000')


     }
     
       const formattedBalance = Number(Number(ethers.utils.formatEther(estimatedGas._hex)).toFixed(0))
     
     
       setBalance(formattedBalance)
       }

const approveToken = async() => {
    console.log('token approve')
    setIsTokenApproved(true)
    toast.success('Token Approved', {
        duration: 1500
    })
    setIsTokenStaked(false)

}

const handleStake = () => {

console.log({pSelected, account})
if(account) {
console.log(account)
} else{
console.log('hi')
}
}


const stakeToken = async () => {
console.log('token staked')
setConfirmed(true)
toast.success('Token Staked', {
    duration: 1500
})
}

    return(
       
          
        <>
          <Heading><Flex justifyContent="space-between" flexDirection="column" alignItems="center" marginBottom="20px" >
                <Flex justifyContent="space-between" flexDirection="column" alignItems="center" marginBottom="5px">
                <Text pb="2px" bold>Available Pool Limit : &emsp; ${availableAmount}</Text>
                <Text pb="2px" bold>Maximum Stake Token :  &emsp; 2000 </Text>
                <Text pb="2px" bold>MNB token Balance : &emsp; {balance}</Text>
                <Text pb="2px" bold>MNB Staked Balance :  &emsp; {balance} </Text>
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
               
             { !isTokenApproved &&
                 <Button width="100%" disabled={approved} onClick={async () => approveToken()} variant="subtle" marginTop="20px" >Approve</Button>
            }  
            {
                !isTokenStaked && 
                <Button width="100%" disabled={confirmed} onClick={async() => stakeToken()} variant="danger" marginTop="20px" >Confirm</Button>
            }
            
               </>
       
    )
}

export default StakeAction