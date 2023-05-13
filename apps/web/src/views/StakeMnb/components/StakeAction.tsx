import { Card, Flex, CardBody, Heading, Text, CardHeader, Button, Input } from '@pancakeswap/uikit'
import { useWeb3LibraryContext, useWeb3React } from '@pancakeswap/wagmi';
import React from 'react'
import FloppyContract from '../helpers/FloppyContract';
import FloppyStakeContract from '../helpers/FloppyStakeContract';
import { STAKE_PACKAGE } from './type';


export interface StakeActionProps {
    availableAmount: number;
    pSelected: STAKE_PACKAGE;
}

const StakeAction: React.FC<StakeActionProps> = ({
    availableAmount,
    pSelected
}) => {

const [value, setValue] = React.useState<number>(0)
const {account} = useWeb3React()

const handleStake = () => {
console.log({pSelected, account})
if(account) {
console.log(account)
} else{
console.log('hi')
}
}

    return(
        <Card style={{
            width: "100%"
        }}>
            <CardHeader>
                <Heading>
                    STAKE
                </Heading>
            </CardHeader>
            <CardBody>
               <Flex justifyContent="space-between" alignItems="center" marginBottom="10px">
                  <Text fontSize="12px">Stake amount</Text>
                  <Text>Available amount: ${availableAmount}</Text>
               </Flex>
               <Input scale='lg' value={value} type="number" onChange={(e) => setValue(parseInt(e.target.value))}/>
               <Button width="100%" variant="danger" marginTop="20px" >Confirm</Button>
            </CardBody>
        </Card> 
    )
}

export default StakeAction