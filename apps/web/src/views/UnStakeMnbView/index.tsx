import Page from "components/Layout/Page";
import { Card, CardHeader, Flex, Text, useMatchBreakpoints } from "@pancakeswap/uikit";
import React from "react";
import StakingList from "./components/StakingList";



interface UnStakeMnbViewProps{
    id:  string | string[]
}

const UnStakeMnbView: React.FC<UnStakeMnbViewProps> = ({id}) => {


const {isDesktop, isMobile, isTablet} = useMatchBreakpoints()
// console.log(isDesktop, isMobile, isTablet)
    return (
        <Page>
            <Flex pb={50} width="100%" justifyContent="center" alignItems="center">

       
            <Card  style={{
                width: "100%",
                alignItems: "center"
            }} p={1}>
            <CardHeader style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center"
            }} >
                      <Text bold>MY STAKINGS</Text>  
                    </CardHeader>
                <div style={{
                    zIndex: '5',
                    margin: '20px'
                }}>
                 
 <StakingList packageId={id} />
       </div>
       </Card>
       </Flex>
        </Page>
    
    
    )
}

export default UnStakeMnbView;