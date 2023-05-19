import { Card, Flex, CardBody, Heading, Text, CardHeader, Button, Input, useToast } from '@pancakeswap/uikit'
import { useWeb3LibraryContext, useWeb3React } from '@pancakeswap/wagmi';
import React, { useEffect, useState } from 'react'
import { useTransactionAdder, useHasPendingApproval } from 'state/transactions/hooks';
import { calculateGasMargin } from 'utils';
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice';

import { useTranslation } from '@pancakeswap/localization'
import { toast } from 'react-hot-toast';
import abi from 'config/abi/testStakeContract.json'
import { MaxUint256 } from '@ethersproject/constants'
import { useContract, useTokenContract } from 'hooks/useContract';
import { TransactionResponse } from '@ethersproject/providers'
import { ethers } from 'ethers';
import { useTokenBalance } from '../hooks/useTokenBalance';
import FloppyContract from '../helpers/FloppyContract';
import FloppyStakeContract from '../helpers/FloppyStakeContract';
import { STAKE_PACKAGE } from './type';




// import { calculateGasMargin } from 'utils';
export enum ApprovalState {
    UNKNOWN,
    NOT_APPROVED,
    PENDING,
    APPROVED,
  }


export interface StakeActionProps {
    availableAmount: number;
    pSelected: STAKE_PACKAGE;
}

const StakeAction: React.FC<StakeActionProps> = ({
    availableAmount,
    pSelected
}) => {

const maxTokenCanBeStaked = 2000
const [value, setValue] = React.useState<number>(0)
const {account} = useWeb3React()
const [approved, setIsApporved] = useState<boolean>(true)
const [isConfirmed, setisConfirmed] = useState<boolean>(false)
const [warning, setWarning] = useState<boolean>(false)
const addTransaction = useTransactionAdder()
const tokenAddress= "0xa00a26A0873542d459721A0a5Ee18D2791D891AA"
const dummyTokenAddress = '0xB39B25e78392Da52A1a4B21c0342C9d35917445e'
const tokenContract = useTokenContract(dummyTokenAddress, true)

const [balance, setBalance] = useState<number>(0)
const [isTokenApproved, setIsTokenApproved] = useState(false)
const [isTokenStaked, setIsTokenStaked] = useState(true)
const { callWithGasPrice } = useCallWithGasPrice()
const stakeContractAddress = "0xE82F2C17c69910149faC9Ca717578C274Fefc01B";
const stakeContract = useContract(stakeContractAddress, abi, true) 
const {t} = useTranslation()
const { toastError } = useToast()
const spender = "0xE82F2C17c69910149faC9Ca717578C274Fefc01B";
const token1 = useTokenBalance()
const [userStakedBalance, setUserStakedBalance] = useState<number>(0)
const pendingApproval = useHasPendingApproval(tokenAddress, spender)
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

useEffect(() => {
    const updateBalance = async () => {
        const userTokenBalance: any = await tokenContract.balanceOf(account)
        // console.log(ethers.utils.formatEther(userTokenBalance._hex))
        setBalance(Number(Number(ethers.utils.formatEther(userTokenBalance._hex)).toFixed(0)))
        const userStakedTokenBalance: any = await stakeContract.totalStakeByAddress(account)
       
        setUserStakedBalance(Number(Number(ethers.utils.formatEther(userStakedTokenBalance)).toFixed(0)))
        
    }
  updateBalance()
}, [account])

const approveTokenOriginal = async () => {
    setIsApporved(true)
if(Number(value) !== maxTokenCanBeStaked){

toast.error('Staked token amount must be 2000', {duration: 2000})

} else{


    const allowance = await tokenContract.allowance(account, stakeContractAddress)
    const formattedAllowance = Number(Number(ethers.utils.formatEther(allowance._hex)).toFixed(0))
console.log(formattedAllowance)
         if(formattedAllowance >= Number(value)){
            toast.success('Token Already Approved', {
                duration: 2000
            })
            setIsApporved(true)
            setIsTokenApproved(true)
            setIsTokenStaked(false)
         } else{
            const estimatedGas = await tokenContract.estimateGas.approve(spender, MaxUint256).catch(() => {
                // general fallback for tokens who restrict approval amounts
        
                return tokenContract.estimateGas.approve(spender, MaxUint256).catch(() => {
                  console.error('estimate gas failure')
                  toast.error(`${t('Unexpected error. Could not estimate gas for the approve.')}`)
                //   toastError(t('Error'), t('Unexpected error. Could not estimate gas for the approve.'))
                  return null
                })
              })
              console.log( ethers.utils.formatEther(estimatedGas._hex))
    
              
             callWithGasPrice(
                tokenContract,
                'approve',
                [spender, MaxUint256],
                {
                  gasLimit: calculateGasMargin(estimatedGas),
                },
              )
                .then((response: TransactionResponse) => {
                    console.log(response)
                    toast.success('Token Approved')
                    setIsApporved(true)
                    setIsTokenApproved(true)
                    setIsTokenStaked(false)
                //   addTransaction(response, {
                //     summary: `Approve MNB`,
                //     translatableSummary: { text: 'Approve MNB' },
                //     approval: { tokenAddress, spender  },
                //     type: 'approve',
                //   })
                })
                .catch((error: any) => {
                    setIsApporved(true)
                  console.error('Failed to approve token', error)
                  toast.error(`${error.message}`)
                  if (error?.code !== 4001) {
                    toast.error(`${error.message}`)
                    // toastError(t('Error'), error.message)
                  }
                  throw error
                })
         }         
       




    
    
       }

    }


const confirmTokenStakedummy = async() => {
    console.log("it's here")

    setisConfirmed(true)

    if(value !== maxTokenCanBeStaked){
        
        toast.error('Staked token amount must be 2000', {duration: 2000})
        setisConfirmed(false)
    } else{

        const checkAllowance = await tokenContract.allowance(account, stakeContractAddress)
        console.log( Number(Number(ethers.utils.formatEther(checkAllowance._hex)).toFixed(0)))
        const formattedAllowance = Number(Number(ethers.utils.formatEther(checkAllowance._hex)).toFixed(0))
        if(formattedAllowance < maxTokenCanBeStaked){
            toast.error(`Approved token quantity is less than ${maxTokenCanBeStaked}`, {
                duration: 2000
            })
            setisConfirmed(false)
        } else{

        
  
        const getStakeoneMonthStakeGas = await stakeContract.estimateGas.oneMonthStake(ethers.utils.parseEther(maxTokenCanBeStaked.toString())).catch(() => {
   
            return stakeContract.estimateGas.oneMonthStake(ethers.utils.parseEther(value.toString())).catch(() => {
                console.log('estimate gas failure')
                toast.error(`${t('Unexpected error. Could not estimate gas for the stake.')}`)
                // toastError(t('Error'), t('Unexpected error. Could not estimate gas for the approve.'))
                return null
            })
        })
        
        
           
           console.log(getStakeoneMonthStakeGas)
        
        
           
        const txResult: any = await
           callWithGasPrice(
            stakeContract,
            'oneMonthStake',
            [ethers.utils.parseEther(maxTokenCanBeStaked.toString())],
            {
              gasLimit: calculateGasMargin(getStakeoneMonthStakeGas),
            },
          )
            .then((response: any) => {
                 console.log(response)
                 toast.success("Token Staked", {
                    duration: 2000
                })
                return response
                
            //   addTransaction(response, {
            //     summary: `Approve MNB`,
            //     translatableSummary: { text: 'Approve MNB' },
            //     approval: { tokenAddress, spender  },
            //     type: 'approve',
            //   })
            })
            .catch((error: any) => {
              
              console.log('Failed to stake token', error)
              toast.error(`${t('Failed to stake token')}`, {
                duration:2000
              })
              setisConfirmed(false)
              if (error?.code !== 4001) {
                toast.error(`${error.message}`, {duration: 2000})
                setisConfirmed(false)
                // toastError(t('Error'), error.message)
              }
              throw error
            })
        
        
           console.log(txResult)
        }

    }




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
setisConfirmed(true)
toast.success('Token Staked', {
    duration: 1500
})
}

    return(
       
          
        <>
          <Heading> <Flex justifyContent="flex-end" mt={2} flexDirection="column" alignItems="flex-start" marginBottom="20px" >
                <Flex justifyContent="flex-end" flexDirection="column" alignItems="flex-start" marginBottom="5px">
                <Text pb="2px" bold>Available Pool Limit : &emsp; ${availableAmount}</Text>
                <Text pb="2px" bold>Maximum Stake Token :  &emsp; {maxTokenCanBeStaked} </Text>
                <Text pb="2px" bold>MNB token Balance : &emsp; {balance}    </Text>
                <Text pb="2px" bold>MNB token Staked :  &emsp; {userStakedBalance} </Text>
                </Flex>
                
            
               
              
                
             </Flex></Heading>
               
               <Text pb="2px">Enter amount:</Text>
               <Input scale='lg' value={value} type="number" isWarning={warning} onChange={(e) => {
                if(Number(e.target.value) > maxTokenCanBeStaked*10 ){
                    setWarning(true)
                }
                 else{
                  
                        setIsApporved(false)
                        // setisConfirmed(false)
                        setWarning(false)
                    setValue(parseInt(e.target.value))
                 }
                
            }}/>
               
             { 
             !isTokenApproved &&

                 <Button width="100%" disabled={approved} onClick={async () => approveTokenOriginal()} variant="subtle" marginTop="20px" >Approve</Button>
            }  
            {
                !isTokenStaked && 
                <Button width="100%" disabled={isConfirmed} onClick={async() => confirmTokenStakedummy()} variant="danger" marginTop="20px" >Confirm</Button>
            }

         
            
               </>
       
    )
}

export default StakeAction