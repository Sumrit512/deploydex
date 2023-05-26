import { Card, Flex, CardBody, Heading, Text, CardHeader, Button, Input, useToast, Grid } from '@pancakeswap/uikit'
import { useWeb3LibraryContext, useWeb3React } from '@pancakeswap/wagmi';
import React, { useEffect, useState } from 'react'
import { useTransactionAdder, useHasPendingApproval } from 'state/transactions/hooks';
import { calculateGasMargin } from 'utils';
import tokenAbi from 'config/abi/floppy.json'
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice';
import { Vortex } from 'react-loader-spinner';
import { useTranslation } from '@pancakeswap/localization'
import { toast } from 'react-hot-toast';
import abi from 'config/abi/testStakeContract.json'
import { MaxUint256 } from '@ethersproject/constants'
import { useContract, useTokenContract } from 'hooks/useContract';
import { TransactionResponse } from '@ethersproject/providers'
import { ethers } from 'ethers';
import { useTokenBalance } from '../hooks/useTokenBalance';
import {  STAKE_TOKEN_ADDRESS } from '../config/constants/stakeContractAddress';
import { FLOPPY_ADDRESS, STAKING_ADDRESS } from '../helpers/config';
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
    pSelected: string;
}

const StakeAction: React.FC<StakeActionProps> = ({
    availableAmount,
    pSelected
}) => {

const [isLoading, setIsLoading] = useState(false)
const maxTokenCanBeStaked = 2000
const [value, setValue] = React.useState<number>(0)
const {account} = useWeb3React()
const [approved, setIsApporved] = useState<boolean>(true)
const [isConfirmed, setisConfirmed] = useState<boolean>(false)
const [warning, setWarning] = useState<boolean>(false)
const addTransaction = useTransactionAdder()
const dummyTokenAddress = FLOPPY_ADDRESS
const tokenContract = useContract(dummyTokenAddress, tokenAbi, true)

const [balance, setBalance] = useState<number>(0)
const [isTokenApproved, setIsTokenApproved] = useState(false)
const [isTokenStaked, setIsTokenStaked] = useState(true)
const { callWithGasPrice } = useCallWithGasPrice()
const stakeContractAddress = STAKING_ADDRESS;
const stakeContract = useContract(stakeContractAddress, abi, true) 
const {t} = useTranslation()
const { toastError } = useToast()
const spender = STAKING_ADDRESS;
const token1 = useTokenBalance()
const [isConnected, setIsConnected] = useState(false)
const [userStakedBalance, setUserStakedBalance] = useState<number>(0)
const pendingApproval = useHasPendingApproval(FLOPPY_ADDRESS, spender)
const [twoWeekPoolRemain, setTwoWeekPoolRemain] = useState('0')
const [oneMonthPoolRemain, setOneMonthPoolRemain] = useState('0')
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

const trial = async ()=> {
  // const b = await tokenContract.balanceOf(account).then((tx) => {
  //     console.log(ethers.utils.formatEther(tx._hex))
  // }).catch((e) => {
  //   console.log(e)
  // })

 const allowance = await tokenContract.balanceOf(account).then((tx) =>{
  console.log('allowance')
console.log(ethers.utils.formatUnits(tx._hex, '18'))
  }).catch((e) => {
    // general fallback for tokens who restrict approval amounts
console.log(e)
    
    })
  
}

useEffect(() => {

  console.log('token')
console.log(tokenContract)
if(account) {
  setIsConnected(true)
}
    const updateBalance = async () => {
    const twoWeekPoolRemainCall = await stakeContract.twoWeekPoolRemain().then((tx) => {
      // console.log(tx)
      setTwoWeekPoolRemain(Number(ethers.utils.formatUnits(tx._hex, '18')).toFixed(0))
    }).catch((e) => {
      console.log(e)
    })
    const oneMonthPoolRemainCall = await stakeContract.oneMonthPoolRemain().then((tx) => {
      // console.log(tx)
      setOneMonthPoolRemain(Number(ethers.utils.formatUnits(tx._hex, '18')).toFixed(0))
    }).catch((e) => {
      console.log(e)
    })
        const userTokenBalance: any = await tokenContract.balanceOf(account).then((tx) => {
         console.log(tx)
         setBalance(Number(Number(ethers.utils.formatEther(tx._hex)).toFixed(0)))
         return tx; 
        }).catch((e) => {
          console.log(e)
        })
        // console.log(ethers.utils.formatEther(userTokenBalance._hex))
        
        const userStakedTokenBalance: any = await stakeContract.totalStakeByAddress(account).then((tx) => {
          setUserStakedBalance(Number(Number(ethers.utils.formatEther(tx)).toFixed(0)))
        }).catch((e) => {
          console.log(e)
        })
       
        
        
    }
  updateBalance()
}, [account])

const approveTokenOriginal = async () => {
    setIsLoading(true)
    setIsApporved(true)
if(Number(value) !== maxTokenCanBeStaked){

toast.error('Staked token amount must be 2000', {duration: 2000})
setIsLoading(false)
} else{
  let formattedAllowance;
    
    const allowance = await tokenContract.allowance(account, stakeContractAddress).then((tx) => {
      formattedAllowance = Number(Number(ethers.utils.formatEther(tx._hex)).toFixed(0))
      return tx
    }).catch((e) =>{
      console.log(e)
    })
 
// console.log(formattedAllowance)
         if(formattedAllowance >= Number(value)){
            toast.success('Token Already Approved', {
                duration: 2000
            })
            setIsApporved(true)
            setIsTokenApproved(true)
            setIsTokenStaked(false)
            setIsLoading(false)
         } else{
          
            const estimatedGas = await tokenContract.estimateGas.approve(spender, MaxUint256).catch(() => {
                // general fallback for tokens who restrict approval amounts
        
                return tokenContract.estimateGas.approve(spender, MaxUint256).catch(() => {
                  console.error('estimate gas failure')
                  toast.error(`${t('Unexpected error. Could not estimate gas for the approve.')}`)
                //   toastError(t('Error'), t('Unexpected error. Could not estimate gas for the approve.'))
                  return null
                  setIsLoading(false)
                })
              })
              // console.log( ethers.utils.formatEther(estimatedGas._hex))
    
              
             callWithGasPrice(
                tokenContract,
                'approve',
                [spender, MaxUint256],
                {
                  gasLimit: calculateGasMargin(estimatedGas),
                },
              )
                .then(async (response: TransactionResponse) => {
                    // console.log(response)
                  
                //   addTransaction(response, {
                //     summary: `Approve MNB`,
                //     translatableSummary: { text: 'Approve MNB' },
                //     approval: { tokenAddress, spender  },
                //     type: 'approve',
                //   })
                await waitForMe(5000)
                setIsLoading(false)
                toast.success('Token Approved')
                setIsApporved(true)
                setIsTokenApproved(true)
                setIsTokenStaked(false)
                return response
            
                
                
                })
                .catch((error: any) => {
                    setIsApporved(true)
                  console.error('Failed to approve token', error)
                  toast.error(`${error.message}`)
                  if (error?.code !== 4001) {
                    toast.error(`${error.message}`)
                    // toastError(t('Error'), error.message)
                  }
                  setIsLoading(false)
                  throw error
                 
                })
                
         }         
       




    
    
       }
      
  
    
    }

    const waitForMe = async (ms) => {
        return new Promise<void>((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, ms);
        });
      };
      

const confirmTokenStakedummy = async() => {
    setIsLoading(true)
    // console.log("it's here")

    setisConfirmed(true)

    if(value !== maxTokenCanBeStaked){
        
        toast.error('Staked token amount must be 2000', {duration: 2000})
        setisConfirmed(false)
        setIsLoading(false)
    } else{

        const checkAllowance = await tokenContract.allowance(account, stakeContractAddress)
        // console.log( Number(Number(ethers.utils.formatEther(checkAllowance._hex)).toFixed(0)))
        const formattedAllowance = Number(Number(ethers.utils.formatEther(checkAllowance._hex)).toFixed(0))
        if(formattedAllowance < maxTokenCanBeStaked){
            toast.error(`Approved token quantity is less than ${maxTokenCanBeStaked}`, {
                duration: 2000
            })
            setisConfirmed(false)
            setIsLoading(false)
        } else{

        
  
        const getStakeoneMonthStakeGas = await stakeContract.estimateGas.oneMonthStake(ethers.utils.parseEther(maxTokenCanBeStaked.toString())).catch(() => {
   
            return stakeContract.estimateGas.oneMonthStake(ethers.utils.parseEther(value.toString())).catch(() => {
                console.log('estimate gas failure')
                
                toast.error(`${t('Unexpected error. Could not estimate gas for the stake.')}`)
                setIsLoading(false)
                // toastError(t('Error'), t('Unexpected error. Could not estimate gas for the approve.'))
                return null
                
            })
        })
        
        
           
          //  console.log(getStakeoneMonthStakeGas)
        
        
           
        const txResult: any = await
           callWithGasPrice(
            stakeContract,
            'oneMonthStake',
            [ethers.utils.parseEther(maxTokenCanBeStaked.toString())],
            {
              gasLimit: calculateGasMargin(getStakeoneMonthStakeGas),
            },
          )
            .then(async (response: any) => {
                //  console.log(response)
              
                await waitForMe(5000)
            
                setIsLoading(false)
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
              setIsLoading(false)
              throw error
            })
        
        
          //  console.log(txResult)
        }

    }



}
const confirmTwoWeekTokenStakedummy = async() => {
    setIsLoading(true)
    // console.log("it's here")

    setisConfirmed(true)

    if(value !== maxTokenCanBeStaked){
        
        toast.error('Staked token amount must be 2000', {duration: 2000})
        setisConfirmed(false)
        setIsLoading(false)
    } else{

        const checkAllowance = await tokenContract.allowance(account, stakeContractAddress)
        // console.log( Number(Number(ethers.utils.formatEther(checkAllowance._hex)).toFixed(0)))
        const formattedAllowance = Number(Number(ethers.utils.formatEther(checkAllowance._hex)).toFixed(0))
        if(formattedAllowance < maxTokenCanBeStaked){
            toast.error(`Approved token quantity is less than ${maxTokenCanBeStaked}`, {
                duration: 2000
            })
            setisConfirmed(false)
            setIsLoading(false)

        } else{

        
       
        const getStaketwoWeekStakeGas = await stakeContract.estimateGas.twoWeekStake(ethers.utils.parseEther(maxTokenCanBeStaked.toString())).catch(() => {
   
            return stakeContract.estimateGas.twoWeekStake(ethers.utils.parseEther(value.toString())).catch(() => {
                console.log('estimate gas failure')
                toast.error(`${t('Unexpected error. Could not estimate gas for the stake.')}`)
                // toastError(t('Error'), t('Unexpected error. Could not estimate gas for the approve.'))
                setIsLoading(false)
                return null
        
            })
        })
        
        
           
          //  console.log(getStaketwoWeekStakeGas)
        
        
           
        const txResult: any = await
           callWithGasPrice(
            stakeContract,
            'twoWeekStake',
            [ethers.utils.parseEther(maxTokenCanBeStaked.toString())],
            {
              gasLimit: calculateGasMargin(getStaketwoWeekStakeGas),
            },
          )
            .then(async (response: any) => {
                //  console.log(response)
                 toast.success("Token Staked", {
                    duration: 2000
                })
                await waitForMe(5000)
setIsLoading(false)
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
              setIsLoading(false)
              throw error
            })
            
        
          //  console.log(txResult)
        }

    }



}

const approveToken = async() => {
  
    // console.log('token approve')
    setIsTokenApproved(true)
    toast.success('Token Approved', {
        duration: 1500
    })
    setIsTokenStaked(false)

}
// console.log({pSelected, account})
// const handleStake = () => {


// if(account) {
// console.log(account)
// } else{
// console.log('hi')
// }
// }


const stakeToken = async () => {
// console.log('token staked')
setisConfirmed(true)
toast.success('Token Staked', {
    duration: 1500
})
}

    return(
       
          
        <>
          <Heading> <Flex justifyContent="flex-end" mt={2} flexDirection="column" alignItems="flex-start" marginBottom="20px" >
                
                <Flex justifyContent="flex-end" flexDirection="column" alignItems="flex-start" marginBottom="5px">
                <Grid gridTemplateRows="1fr 1fr 1fr 1fr">
                  <Grid gridTemplateColumns="1fr 0fr" gridGap="30px">
                  <Text pb="2px" bold>Available Pool Limit :</Text>
                  <Text> {pSelected === 'Gold' ? (oneMonthPoolRemain) : (twoWeekPoolRemain)}</Text>
                  </Grid>
                  <Grid gridTemplateColumns="1fr 0fr" gridGap="30px">
                  <Text pb="2px" bold>Maximum Stake Token :  </Text>
                  <Text> {maxTokenCanBeStaked}</Text>
                  </Grid>
                  <Grid gridTemplateColumns="1fr 0fr" gridGap="30px">

                  <Text pb="2px" bold>MNB token Balance :    </Text>
                  <Text> {balance} </Text>
                  </Grid>
                  <Grid gridTemplateColumns="1fr 0fr" gridGap="30px">
                  <Text pb="2px" bold>MNB token Staked :</Text>
                  <Text>{userStakedBalance}</Text>
                  </Grid>
               

            
                </Grid>
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
               {/* {isLoading && 
               <Vortex
  visible={isLoading}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/>} */}

             { 
              !isTokenApproved &&

                 <Button width="100%" disabled={approved} onClick={async () => 
                 approveTokenOriginal()
                // trial()
                 } variant="subtle" marginTop="20px" >
                          
                          {
isLoading? (
    <Vortex
  visible={isLoading}
  height="50"
  width="50"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/>
) : 'Approve'
                          } 
                 </Button>
            }  
            {
                !isTokenStaked && 
                <Button width="100%" disabled={isConfirmed} onClick={async() => {
                    if(pSelected === 'Gold'){
                        confirmTokenStakedummy()
                    }
                    else{
                        confirmTwoWeekTokenStakedummy()
                    }
                    }} variant="danger" marginTop="20px" >
                        
                        {isLoading? (
    <Vortex
    visible={isLoading}
    height="50"
    width="50"
    ariaLabel="vortex-loading"
    wrapperStyle={{}}
    wrapperClass="vortex-wrapper"
    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
  />

                        ): 'Confirm'}
                        
                        </Button>
            }

         
            
               </>
       
    )
}

export default StakeAction