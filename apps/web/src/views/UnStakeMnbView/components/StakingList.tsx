import { Button, Card, CardBody, CardHeader, Flex, Table, Text, useMatchBreakpoints } from "@pancakeswap/uikit";

import { useContract } from "hooks/useContract";

import CardHeading from "views/Farms/components/FarmCard/CardHeading";
import React, { useEffect, useState } from "react";
import { STAKE_CONTRACT_ADDRESS } from "views/StakeMnb/config/constants/stakeContractAddress";
import abi from 'config/abi/stakingContractDummy.json'
import styled from "styled-components";
import { ethers } from "ethers";
import { useWeb3React } from "@pancakeswap/wagmi";
import Timer from "./Timer";



interface StakingListProps{
    pSelected?: string;

}
const StyledTable = styled.table`
width: 100%;
border-collapse: inherit;
border-spacing: 10px;
text-align: center;
border: 1px solid black;
border-radius: 16px
`

const StyledTableRow = styled.tr`
border: 100px solid black;
`

const StyledTableData = styled.td`

`

const StyledTableBody = styled.tbody`
border : 
`

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
    function calculateTimeLeft(timeDifference) {
        const hours = Math.floor(timeDifference / 3600);
        const minutes = Math.floor((timeDifference % 3600) / 60);
        const seconds = timeDifference % 60;
    
        return { hours, minutes, seconds };
      }
    const {isDesktop, isMobile, isTablet} = useMatchBreakpoints()

      function formatTime(value) {
        return value.toString().padStart(2, '0');
      }
    
      function handleInputChange(event) {
        const newTimestamp = parseInt(event.target.value, 10);
        setTargetTimesamp(newTimestamp);
      }
    
    

    const stakeContractAddress = STAKE_CONTRACT_ADDRESS;
const stakeContract = useContract(stakeContractAddress, abi, true )
const {account}  = useWeb3React()
const userStakingDetailsObject = {}
const tempObject = {
    amount: '0',
    duration: '',
    isRelease: false,
    reward: '0',
    termOption: '0'
}



const [userStakingDetailsArrayTwoWeek, setUserStakingDetailsArrayTwoWeek] = useState([])
const [userStakingDetailsArrayOneMonth, setUserStakingDetailsArrayOneMonth]  = useState([])
const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 })
const [Seconds, setSeconds] = useState(0)
const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
const [targetTimestamp, setTargetTimesamp] = useState(0)
const [claimDisable, setClaimDisable] = useState(false)
// let seconds = 0;

// function startTimer() {
//   setInterval(function() {
//     seconds++;
//     setTime(seconds => seconds + 1)
//     console.log('Timer:', seconds);
//   }, 1000);
// }

// startTimer();

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
        duration: '',
        isRelease: false,
        reward: '0',
        termOption: '0'
    },
    {
        amount: '0',
        duration: '',
        isRelease: false,
        reward: '0',
        termOption: '0'
    }
    ,{
        amount: '0',
        duration: '',
        isRelease: false,
        reward: '0',
        termOption: '0'
    }
    ,{
        amount: '0',
        duration: '',
        isRelease: false,
        reward: '0',
        termOption: '0'
    }
    ,{
        amount: '0',
        duration: '',
        isRelease: false,
        reward: '0',
        termOption: '0'
    }
    ,{
        amount: '0',
        duration: '',
        isRelease: false,
        reward: '0',
        termOption: '0'
    }
]
const userStakingDetailsArrayTwoWeekTemp = []
    const totalStakingByTheUser = await stakeContract.getStakeCount(account).then((tx) => {
 
        // console.log(ethers.utils.formatUnits(tx._hex, '0'))
        return ethers.utils.formatUnits(tx._hex, '0')
    })
//   console.log(totalStakingByTheUser)

  for(let i = 0, j=0, k=0 ; i< totalStakingByTheUser; i++){
    // eslint-disable-next-line no-await-in-loop
    const userStakingInfoForEachStake = await stakeContract.getStakeInfo(account, i).then((tx) => {
    tempObject.amount = ethers.utils.formatUnits(tx[0]._hex, '18') 
    tempObject.duration = ethers.utils.formatUnits(tx[1]._hex, '0')
    tempObject.isRelease = tx[2]
    tempObject.reward = Number(ethers.utils.formatUnits(tx[3]._hex, '18')).toFixed(2)
    tempObject.termOption ='30'
  
    userStakingDetailsArrayOneMonthTemp[j].amount = tempObject.amount
    userStakingDetailsArrayOneMonthTemp[j].duration = tempObject.duration
    userStakingDetailsArrayOneMonthTemp[j].isRelease = tempObject.isRelease
    userStakingDetailsArrayOneMonthTemp[j].reward = tempObject.reward
    userStakingDetailsArrayOneMonthTemp[j].termOption = tempObject.termOption
    // console.log(userStakingDetailsArrayOneMonthTemp[j])
    // console.log(tempObject.duration.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })) 
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
  setUserStakingDetailsArrayOneMonth(userStakingDetailsArrayOneMonthTemp)
  setUserStakingDetailsArrayTwoWeek(userStakingDetailsArrayTwoWeekTemp)
//   console.log(userStakingDetailsArrayTwoWeek)
 console.log(userStakingDetailsArrayOneMonthTemp)
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
    // console.log(userStakingDetailsArrayOneMonth)


}, [account])







    return(
        // <Wrapper>
        <Flex >
            {
                !isMobile &&
                <div style={{
                    width:"100%",
                   
                   }}>
            
              {
               userStakingDetailsArrayOneMonth.map((data) => {
                const currentTimestamp = Math.floor(Date.now() / 1000);
                const unixTimestamp = Number(data.duration); // Replace with your Unix timestamp
            
                const date = new Date(unixTimestamp * 1000);
                
                const day = date.getDate();
                const month = date.getMonth() + 1; // Months are zero-based, so add 1
                const year = date.getFullYear();
                
                const formattedDate = `${day < 10 ? `0${  day}` : day}/${month < 10 ? `0${  month}` : month}/${year}`;
                console.log(formattedDate);
               let buttonDisable = true
               if(Number(data.amount) <= 0){
                return null
               }
                if(currentTimestamp > Number(data.duration))
                {
                    buttonDisable = false
                } 
             
             return (
              
                   <Card m={2}> 
                        <CardHeader >
                            <Flex flexDirection="row" justifyContent="space-between" alignItems="center">
                            <Flex flexDirection="column">
                            <Text> <b> AMOUNT : </b>{data.amount} MNB</Text>
                            <Text> <b>STAKED ON : </b>{formattedDate}</Text>
                            <Text><b> DURATION : </b>{data.termOption} days </Text>
                            <Text color="#2de12e"><b> RETURNS : </b> +{data.reward}</Text>
                            </Flex>
                            <Flex>
                            <Button disabled={buttonDisable}>
                        {
            data.isRelease? 'Claimed' : 
            
                currentTimestamp > Number(data.duration)? 'Claim': (<Timer targetTimestamp={Number(data.duration)}/>)
             }
                        </Button>
                            </Flex>
                            </Flex>
                          
            
            
                        </CardHeader>
                       
                      
                    </Card>
              
             )
               })
              
            }
            </div>
            }
            {
                isMobile &&
                <div style={{
                    width:"100%",
                   
                   }}>
            
              {
               userStakingDetailsArrayOneMonth.map((data) => {
                const currentTimestamp = Math.floor(Date.now() / 1000);
                const unixTimestamp = Number(data.duration); // Replace with your Unix timestamp
            
                const date = new Date(unixTimestamp * 1000);
                
                const day = date.getDate();
                const month = date.getMonth() + 1; // Months are zero-based, so add 1
                const year = date.getFullYear();
                
                const formattedDate = `${day < 10 ? `0${  day}` : day}/${month < 10 ? `0${  month}` : month}/${year}`;
                console.log(formattedDate);
               
                let buttonDisable = true
                if(Number(data.amount) <= 0){
                    return null
                   }
                if(currentTimestamp > Number(data.duration))
                {
                    buttonDisable = false
                } 
            
             return (
              
                   <Card m={2} pb={2}> 
                        <CardHeader >
                            <Flex flexDirection="column" >
                            <Flex flexDirection="column" alignItems="center">
                            <Text> <b> AMOUNT : </b>{data.amount}</Text>
                            <Text> <b>STAKED ON : </b>{formattedDate}</Text>
                            <Text><b> DURATION : </b>{data.termOption} days </Text>
                            <Text color="#2de12e"><b> RETURNS : </b> +{data.reward}</Text>
                            </Flex>
                            <Flex pt={2}>
                            <Button disabled={buttonDisable} width="100%" >
                        {
            data.isRelease? 'Claimed' : 
            
                currentTimestamp> Number(data.duration)? 'Claim': (<Timer targetTimestamp={Number(data.duration)}/>)
             }
                        </Button>
                            </Flex>
                            </Flex>
                          
            
            
                        </CardHeader>
                       
                      
                    </Card>
              
             )
               })
              
            }
            </div>
            }
          
        
</Flex>


//    </Wrapper> 
    )
}

export default StakingList;