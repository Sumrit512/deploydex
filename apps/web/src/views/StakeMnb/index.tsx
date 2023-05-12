import { Card, Flex, Heading, CardBody } from "@pancakeswap/uikit"
import Page from "components/Layout/Page"
import StakeCard from "./components/StakeCard"
import StakePackage from "./components/StakePackage"
import StakeAction from "./components/StakeAction"

const StakeMnbView = () => {
    return (
        <>
         <Page >
         
            <Flex width="100%" justifyContent="center" alignItems="center" flexDirection="column" >
                <Flex width="70%" justifyContent="space-between" marginTop="20px">

               
              <StakeCard
              title="Number of stakers"
              value={10}
              />
              <StakeCard
              title="Total staked"
              value={1000}
              />
              <StakeCard
              title="Total value locked"
              value={10}
              />
              <StakeCard
              title="Price"
              value={10}
              pre=""
              />
               </Flex>
               <Flex width="70%" justifyContent="space-between"  marginTop="20px">
                    <StakePackage
                    packageName="Silver"
                    apr={90}
                    duration={14}
                    type="LOCK"
                    maxCap={500000}
                    />
                    <StakePackage
                    packageName="Gold"
                    apr={120}
                    duration={30}
                    type="LOCK"
                    maxCap={2000000}
                    />
               </Flex>

               {/* <Flex width="70%">
                  <Flex flex={1}/>
                  <Flex flex={1}>
                        <StakeAction
                        availableAmount={10000}
                        />
                  </Flex>
               </Flex> */}
            </Flex>
         </Page>
        </>
    )
}

export default StakeMnbView