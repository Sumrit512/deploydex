import { Card, Flex, CardBody, Heading, Text, CardHeader, Button } from '@pancakeswap/uikit'
import React from 'react'

export interface StakeActionProps {
    availableAmount: number;
}

const StakeAction: React.FC<StakeActionProps> = ({
    availableAmount,
}) => {
    return(
        <Card>
            <CardHeader>
                <Heading>
                    STAKE
                </Heading>
            </CardHeader>
            <CardBody>
               <Flex>
                  <Text>Stake amount</Text>
                  <Text>Available amount: ${availableAmount}</Text>
               </Flex>
            </CardBody>
        </Card>
    )
}

export default StakeAction