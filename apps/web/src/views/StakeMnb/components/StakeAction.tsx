import { Card, Flex, CardBody, Heading, Text, CardHeader, Button, Input } from '@pancakeswap/uikit'
import { useWeb3LibraryContext, useWeb3React } from '@pancakeswap/wagmi';
import React, { useState } from 'react'
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
const [approved, setApporved] = useState<boolean>(true)
const [confirmed, setConfirmed] = useState<boolean>(true)
const handleStake = () => {
console.log({pSelected, account})
if(account) {
console.log(account)
} else{
console.log('hi')
}
}
const dis = true;
    return(
       
          
        <>
          <Heading><Flex justifyContent="space-between" flexDirection="row" alignItems="center" marginBottom="10px">
                
                <Text pb="2px" bold>Available Pool Limit: </Text>
                <Text bold pl="10px">${availableAmount}</Text>
             </Flex></Heading>
               
               <Text pb="2px">Enter amount:</Text>
               <Input scale='lg' value={value} type="number" onChange={(e) => setValue(parseInt(e.target.value))}/>
               <Button width="100%" disabled={approved} onClick={()=>console.log(approved)} variant="subtle" marginTop="20px" >Approve</Button>
               <Button width="100%" disabled={confirmed} variant="danger" marginTop="20px" >Confirm</Button>
               </>
       
    )
}

export default StakeAction