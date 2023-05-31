import { Card, Flex, Heading, CardBody, useMatchBreakpoints } from "@pancakeswap/uikit"
import Page from "components/Layout/Page"
import React, { useState, useCallback, useEffect } from 'react'
import { useWeb3React } from '@pancakeswap/wagmi';
import { useContract } from 'hooks/useContract';
import Footer from "components/Footer";
import { ethers } from "ethers";
import abi from 'config/abi/stakingContractDummy.json'
import StakeCard from "./components/StakeCard"
import StakePackage from "./components/StakePackage"
// eslint-disable-next-line import/no-named-as-default
import StakeAction from "./components/StakeAction"
import { STAKE_PACKAGE } from "./components/type"
import { STAKING_ADDRESS } from "./helpers/config"




const StakeMnbView = () => {


    
const {account} = useWeb3React()

const stakeContract  = useContract(STAKING_ADDRESS, abi)



    const {isDesktop} = useMatchBreakpoints()
    const [stakePackage, setStakePackage] = useState<STAKE_PACKAGE>()
    const [totalStakers, setTotalStakers] = useState(0)
    const [totalStaked, setTotalStaked] = useState(0)
    const [aprGold, setAprGold] = useState(0)
    const [aprSilver, setAprSilver] = useState(0)
    const showStake = useCallback(() => {
        console.log(stakePackage)
            }, [stakePackage])

             showStake()

             const fetchDetails  = async() => {
                if(!account){
             console.log('wallet not connected')
                } else{
                    const totttt = await stakeContract.totalStakers().then((tx) => {
                        console.log(tx)
                        console.log(ethers.utils.formatUnits(tx._hex, '0'))
                        setTotalStakers(Number(ethers.utils.formatUnits(tx._hex, '0')))
                        }).catch((e) => {
                            console.log(e)
                        })
                    const totalStakedCall = await stakeContract.totalStakedAmount().then((tx) => {
                        console.log(tx)
                        console.log(Number(Number(ethers.utils.formatUnits(tx._hex, '18')).toFixed(0)))
                        setTotalStaked(Number(Number(ethers.utils.formatUnits(tx._hex, '18')).toFixed(0)))
                        }).catch((e) => {
                            console.log(e)
                        })

                        const aprSilverCall = await stakeContract.APR(0).then((tx) => {
                            console.log('silver call')
                            console.log(ethers.utils.formatUnits(tx._hex, '0'))
                            setAprSilver(Number(ethers.utils.formatUnits(tx._hex, '0')))
                        }).catch((e) => {
                            console.log(e)
                        })
                        const aprGoldCall = await stakeContract.APR(1).then((tx) => {
                            console.log(ethers.utils.formatUnits(tx._hex, '0'))
                            setAprGold(Number(ethers.utils.formatUnits(tx._hex, '0')))
                        }).catch((e) => {
                            console.log(e)
                        })
                }
            }

 useEffect(() => {
fetchDetails()
console.log(stakeContract)
},[account])


    return (
        <>
         {/* <Page removePadding style={{
            marginBottom:`${isDesktop? '0px': '40px'}`
         }}> */}
         <>
         <Page>
            <Flex width="100%" mb={80} justifyContent="center" alignItems="center" flexDirection="column" >
                <Flex width="70%" justifyContent="space-between" marginTop="20px" >

               
              <StakeCard
              title="Stakers"
              value={totalStakers}
              />
              <StakeCard
              title="Total staked"
              value={totalStaked}
              />
              <StakeCard
              title="TVL"
              value={totalStaked}
              pre="$"
              />
              <StakeCard
              title="Price"
              value={1}
              pre="$"
              />
               </Flex>
               <Flex width="70%" justifyContent="space-between"  marginTop="20px" style={{gap:`${isDesktop? '0px' : '10px'}`}} flexDirection={isDesktop? 'row' : 'column'}>
                    <StakePackage
                    packageName="Silver"
                    apr={aprSilver}
                    duration={14}
                    type="LOCK"
                    maxCap={20000000}
                    onSelect={() => {setStakePackage(STAKE_PACKAGE.WEEK)
                   }
                    }
                    />
                    <StakePackage
                    packageName="Gold"
                    apr={aprGold}
                    duration={30}
                    type="LOCK"
                    maxCap={20000000}
                    onSelect={()=>{ setStakePackage(STAKE_PACKAGE.MONTH) 
                    }}
                    />
               </Flex>
      
              
            </Flex>
            </Page>
            <Footer/>
            </>
{/*             
         </Page> */}
        </>
    )
}

export default StakeMnbView