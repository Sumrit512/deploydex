import { Card, Flex, Heading, CardBody, useMatchBreakpoints } from "@pancakeswap/uikit"
import { useWeb3React } from "@pancakeswap/wagmi"
import React, { useState, useCallback } from 'react'
import Page from "components/Layout/Page"
import StakeCard from "./components/StakeCard"
import StakePackage from "./components/StakePackage"
// eslint-disable-next-line import/no-named-as-default
import StakeAction from "./components/StakeAction"
import { STAKE_PACKAGE } from "./components/type"


const StakeMnbView = () => {
  
    const {isDesktop} = useMatchBreakpoints()
    const [stakePackage, setStakePackage] = useState<STAKE_PACKAGE>()
    const showStake = useCallback(() => {
        console.log(stakePackage)
            }, [stakePackage])

             showStake()
    return (
        <>
         <Page >
         
            <Flex width="100%" justifyContent="center" alignItems="center" flexDirection="column" >
                <Flex width="70%" justifyContent="space-between" marginTop="20px">

               
              <StakeCard
              title="Stakers"
              value={10}
              />
              <StakeCard
              title="Total staked"
              value={1000}
              />
              <StakeCard
              title="TVL"
              value={10}
              />
              <StakeCard
              title="Price"
              value={10}
              pre=""
              />
               </Flex>
               <Flex width="70%" justifyContent="space-between"  marginTop="20px" style={{gap:`${isDesktop? '0px' : '10px'}`}} flexDirection={isDesktop? 'row' : 'column'}>
                    <StakePackage
                    packageName="Silver"
                    apr={90}
                    duration={14}
                    type="LOCK"
                    maxCap={500000}
                    onSelect={() => {setStakePackage(STAKE_PACKAGE.WEEK)
                   }
                    }
                    />
                    <StakePackage
                    packageName="Gold"
                    apr={120}
                    duration={30}
                    type="LOCK"
                    maxCap={2000000}
                    onSelect={()=>{ setStakePackage(STAKE_PACKAGE.MONTH) 
                  
                    }}
                    />
               </Flex>

               {/* <Flex width="70%" marginTop="20px">
                  <Flex flex={1}/>
                  <Flex flex={1}>
                        <StakeAction
                        availableAmount={10000}
                        pSelected={stakePackage}
                        
                        />
                  </Flex>
               </Flex> */}
            </Flex>
         </Page>
        </>
    )
}

export default StakeMnbView