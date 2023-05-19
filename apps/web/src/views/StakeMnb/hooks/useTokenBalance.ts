import { useWeb3React } from "@pancakeswap/wagmi"
import { useTokenContract } from "hooks/useContract"

export  function useTokenBalance  (): [() => Promise<void>] {

    
      
     
      
      
      
      
        
      
        
        
      

      
     
      
          
      
        //   return callWithGasPrice(
        //     tokenContract,
        //     'approve',
        //     [spender, useExact ? amountToApprove.quotient.toString() : MaxUint256],
        //     {
        //       gasLimit: calculateGasMargin(estimatedGas),
        //     },
        //   )
        //     .then((response: TransactionResponse) => {
        //       addTransaction(response, {
        //         summary: `Approve ${amountToApprove.currency.symbol}`,
        //         translatableSummary: { text: 'Approve %symbol%', data: { symbol: amountToApprove.currency.symbol } },
        //         approval: { tokenAddress: token.address, spender },
        //         type: 'approve',
        //       })
        //     })
        //     .catch((error: any) => {
        //       logError(error)
        //       console.error('Failed to approve token', error)
        //       if (error?.code !== 4001) {
        //         toastError(t('Error'), error.message)
        //       }
        //       throw error
        //     })
        // }, [approvalState, token, tokenContract, amountToApprove, spender, addTransaction, callWithGasPrice, t, toastError]
        // )
      
        // return [approvalState, approve]
      

const tokenAddress = '0xa00a26A0873542d459721A0a5Ee18D2791D891AA'
const tokenContract = useTokenContract(tokenAddress, true)
const {account} = useWeb3React()
let estimatedGas;
let gas ;
const checkBalance = async () => {
    estimatedGas = await tokenContract.estimateGas.balanceOf(account).then((tx) => {
       
gas = tx
         return tokenContract.estimateGas.balanceOf(account).catch(() => {
             console.log('estimate gas failure')
            //  toastError(t('Error'), t('Unexpected error. Could not estimate gas for the approve.'))
             return null
         })
     })
     checkBalance()
     return gas
}
return gas
}