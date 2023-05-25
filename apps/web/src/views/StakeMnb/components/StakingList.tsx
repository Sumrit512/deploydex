import { Flex, Table } from "@pancakeswap/uikit";
import { useContract } from "hooks/useContract";
import React, { useEffect, useState } from "react";
import abi from 'config/abi/stakingContractDummy.json'
import styled from "styled-components";
import { ethers } from "ethers";
import { useWeb3React } from "@pancakeswap/wagmi";
import { STAKING_ADDRESS } from "../helpers/config";

interface StakingListProps{
    pSelected?: string;

}

const Wrapper = styled.div`
/* From https://css.glass */
/* From https://css.glass */
background: rgba(163, 27, 118, 0.18);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(3px);
border: 1px solid rgba(163, 27, 118, 1);
padding: 20px;
width: 100%
`

const StakingList: React.FC<StakingListProps> = ({
    pSelected
}) => {

    const stakeContractAddress = STAKING_ADDRESS;
const stakeContract = useContract(stakeContractAddress, abi, true )
const {account}  = useWeb3React()
const userStakingDetailsObject = {}
const tempObject = {
    amount: '0',
    duration: new Date,
    isRelease: false,
    reward: '0',
    termOption: '0'
}

const [userStakingDetailsArrayTwoWeek, setUserStakingDetailsArrayTwoWeek] = useState([])
const [userStakingDetailsArrayOneMonth, setUserStakingDetailsArrayOneMonth]  = useState([])

const fetchUserStaking = async() =>{
//     const userStakingDetails = await stakeContract.getStakerInfor(account).then((tx) => {
// // console.log(tx[0])
// tx[0].forEach((res, i) => {
// // console.log(i)
// if(i === 2){
//     tempObject[i] = res
// }
// else if (i === 1){
//     tempObject[i] = new Date(res._hex * 1000)
// }  else if(i === 4){
//     tempObject[i] = ethers.utils.formatUnits(res._hex, '0')
// } 
// else {
//     tempObject[i] = Number(ethers.utils.formatEther(res._hex)).toString() 
// } 
  
// //    console.log(tempObject[i])
// })
// let i =0
// userStakingDetailsObject = {
//     amount : '0',
//     date : new Date(),
//     isRelease: false,
//     reward: '0',
//     duration: '0'
// }

// Object.keys(userStakingDetailsObject).forEach(key => {
   
//     userStakingDetailsObject[key] = tempObject[i]
//     i++
// })

// console.log(userStakingDetailsObject)
// userStakingDetailsArrayTwoWeek = tx
// // userStakingDetailsObject.amount = Number(ethers.utils.formatEther(userStakingDetailsArrayTwoWeek[0]._hex)).toFixed(0) 
// // console.log(userStakingDetailsArrayTwoWeek)
//     })

const userStakingDetailsArrayOneMonthTemp = [
    {
        amount: '0',
        duration: new Date,
        isRelease: false,
        reward: '0',
        termOption: '0'
    },
    {
        amount: '0',
        duration: new Date,
        isRelease: false,
        reward: '0',
        termOption: '0'
    }
    ,{
        amount: '0',
        duration: new Date,
        isRelease: false,
        reward: '0',
        termOption: '0'
    }
]
const userStakingDetailsArrayTwoWeekTemp = []
    const totalStakingByTheUser = await stakeContract.getStakeCount(account).then((tx) => {
 
        // console.log(ethers.utils.formatUnits(tx._hex, '0'))
        return ethers.utils.formatUnits(tx._hex, '0')
    }).catch((e)=>{
        console.log(e)
    })
//   console.log(totalStakingByTheUser)

  for(let i = 0, j=0, k=0 ; i< totalStakingByTheUser; i++){

    if(account) {
            // eslint-disable-next-line no-await-in-loop
        const userStakingInfoForEachStake = await stakeContract.getStakeInfo(account, i).then((tx) => {
            tempObject.amount = ethers.utils.formatUnits(tx[0]._hex, '18') 
            tempObject.duration = new Date(Number(ethers.utils.formatUnits(tx[1]._hex, '0')) * 1000)
            tempObject.isRelease = tx[2]
            tempObject.reward = Number(ethers.utils.formatUnits(tx[3]._hex, '18')).toFixed(2)
            tempObject.termOption ='30'
          
            userStakingDetailsArrayOneMonthTemp[j].amount = tempObject.amount
            userStakingDetailsArrayOneMonthTemp[j].duration = tempObject.duration
            userStakingDetailsArrayOneMonthTemp[j].isRelease = tempObject.isRelease
            userStakingDetailsArrayOneMonthTemp[j].reward = tempObject.reward
            userStakingDetailsArrayOneMonthTemp[j].termOption = tempObject.termOption
            // console.log(userStakingDetailsArrayOneMonthTemp[j])
            console.log(tempObject.duration.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })) 
             j++
            
        
            // tempObject = 
        // if(tempObject.termOption === '30'){
        //     userStakingDetailsArrayOneMonthTemp[j] = tempObject
        //     j++ 
        // } else{
        //     userStakingDetailsArrayTwoWeekTemp[k] = tempObject
        //     k++
        // }
            }).catch((e) => {
                console.log(e)
            })
    }
else{
    console.log('account not connected')
}

    
  }
  setUserStakingDetailsArrayOneMonth(userStakingDetailsArrayOneMonthTemp)
  setUserStakingDetailsArrayTwoWeek(userStakingDetailsArrayTwoWeekTemp)
//   console.log(userStakingDetailsArrayTwoWeek)
//  console.log(userStakingDetailsArrayOneMonthTemp)
//   userStakingDetailsArrayOneMonthTemp.map((data) => {
//    return console.log(data.amount)
//   })
    // Object.keys(userStakingDetailsObject).forEach(key => {
    
    //     console.log(key) 
    
    // })
    // console.log(tempObject)
}

useEffect(() => {
    
    fetchUserStaking()
    console.log(userStakingDetailsArrayOneMonth)
}, [account])
    return(
        // <Wrapper>
 
    <table cellSpacing="10px" cellPadding="10px" style={{
        'width': "100%",
        marginLeft: '10px',
        padding: '20px'
    }}  width="100%">
  <tr style={{
        'width': "100%",
        margin: '20px',
        padding: '20px',
        marginBottom: '50px'
    }} >
        <th>Amount</th>
    <th>Staked On</th>
    <th>Duration</th>
    <th>Returns</th>
    <th>status</th>
    
  </tr>
  {
   userStakingDetailsArrayOneMonth.map((data) => {
 return (
    <tr style={{
        margin: '20px',

    }} >
       
       <td>
          {data.amount}
        </td>
      
        <td>
        {data.duration.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}
        </td>
        <td>
            {data.termOption}
        </td>
       
        <td>
        {data.reward}
        </td>
        <td> 
         {data.isRelease? 'Claimed' : 'UnClaimed'}
        </td>
    </tr>
  
 )
   })
  
}
  
 
</table >

//    </Wrapper> 
    )
}

export default StakingList;