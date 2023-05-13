import { Flex, Card, CardBody, Heading, Text, CardHeader, Button } from "@pancakeswap/uikit"
import React from "react";

export interface StakePackageInterface {
    packageName: string;
    apr: number;
    duration: number;
    type: string;
    maxCap: number;
    onSelect?: () => void;
}

const StakePackage: React.FC<StakePackageInterface> = ({
    packageName,
    apr,
    duration, 
    type,
    maxCap,
    onSelect
}) =>{

 
    return(
        <>
              <Flex width="100%" flex={1}>
                    <Card style={{
                        width: "100%",
                        marginLeft: "10px"
                    }}>
                        <CardHeader>
                          
                        <Heading textTransform="uppercase">{packageName} </Heading>
                        </CardHeader>
                        <CardBody>
                            <Flex width="100%" flexDirection="column">
                               
                                <Flex justifyContent="space-between" alignItems="center"  marginBottom="10px">
                                    <Text> APR %</Text>
                                     <Text fontSize="16px" fontWeight="bold">{apr}%</Text>
                                </Flex>
                                <Flex justifyContent="space-between" alignItems="center" marginBottom="10px">
                                    <Text> Duration</Text>
                                     <Text fontSize="16px" fontWeight="bold">{duration} Days</Text>
                                </Flex>
                                <Flex justifyContent="space-between" alignItems="center"  marginBottom="10px">
                                    <Text> Type</Text>
                                     <Text fontSize="16px" fontWeight="bold">{type}</Text>
                                </Flex>
                                <Flex justifyContent="space-between" alignItems="center"  marginBottom="10px">
                                    <Text> Max Cap</Text>
                                     <Text fontSize="16px" fontWeight="bold">{maxCap}</Text>
                                </Flex>
                                    
                            </Flex>
                            <Button width="100%" onClick={onSelect}> STAKE NOW</Button>
                        </CardBody>
                    </Card>
                </Flex>
        </>
    )
}

export default StakePackage