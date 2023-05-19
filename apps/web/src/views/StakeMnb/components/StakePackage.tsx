import { Flex, Card, CardBody, Heading, Text, CardHeader, Button, useModal, Modal, ModalProps, Input } from "@pancakeswap/uikit"
import React, { useCallback, useEffect, useState } from "react";
import {useRouter} from 'next/router'
import { useContract } from "hooks/useContract";
import { useWeb3React } from "@pancakeswap/wagmi";
import abi from 'config/abi/floppyStaking.json'
import StakeAction from "./StakeAction";
import { STAKE_PACKAGE } from "./type"
import UnStakeAction from "./UnStakeAction";
import { STAKE_CONTRACT_ADDRESS } from "../config/constants/stakeContractAddress";


export interface StakePackageInterface {
    packageName: string;
    apr: number;
    duration: number;
    type: string;
    maxCap: number;
    onSelect?: () => void;
    onUnstake?: () => void;
}

const StakePackage: React.FC<StakePackageInterface> = ({
    packageName,
    apr,
    duration, 
    type,
    maxCap,
    onSelect, 
    onUnstake
}) =>{

    const router = useRouter()
    const [stakePackage, setStakePackage] = useState<string>()
    const [isStaker, setIsStaker] = useState<boolean>(false)
    const stakingContractAddress = STAKE_CONTRACT_ADDRESS
    const stakeContract = useContract(stakingContractAddress,abi, true )
    const {account} = useWeb3React()
    const checkUserStaking = async () => {
       
    const goToStaking = () => {
        router.push('/unstakeMnb')
    }

    const getStakerInfo = await stakeContract.stakers(account,0).then( (tx) =>
    {
        setIsStaker(true)
       return tx
    })
    .catch ( (e: any) => {
       console.log(e)
       setIsStaker(false)
          return console.log('no staking')
        
        
    })
    console.log(getStakerInfo)

    }

    useEffect(() => {
// console.log(account)
setStakePackage(packageName)
 checkUserStaking()
    },[account, packageName])
    const CustomModal: React.FC<React.PropsWithChildren<ModalProps>> = ({ title, onDismiss, ...props }) => (
        <Modal title={title} style={{
        
        }} onDismiss={onDismiss} {...props}>
        
                        <StakeAction
                        availableAmount={10000}
                        pSelected={stakePackage}
                        
                        />
                
        </Modal>
      );
    const CustomModal2: React.FC<React.PropsWithChildren<ModalProps>> = ({ title, onDismiss, ...props }) => (
        <Modal title={title} style={{
        "background": `${title==='Gold' ? 'gold' : 'silver'}`
        }} onDismiss={onDismiss} {...props}>
        
                       <UnStakeAction
                       pSelected={packageName}/>
                
        </Modal>
      );

    const [onPresent1] = useModal(<CustomModal title={packageName} />);

    const [onPresent2] = useModal(<CustomModal2 title={packageName} />);
 
    const goToStaking = () => {
        router.push('/unstakeMnb')
    }

    return(
        <>
              <Flex width="100%" flex={1}>
                    <Card style={{
                        width: "100%",
                        marginLeft: "10px"
                    }}>
                        <CardHeader style={{
                            "background" : `${packageName === 'Gold'? 'gold' : 'silver'}`
                        }}>
                          
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
                            <Button width="100%" onClick={
                               () => { onPresent1()
                            }
                            }>{isStaker?'STAKE MORE': 'STAKE NOW'}</Button>
                         {  isStaker &&  <Button width="100%" mt={2} onClick={goToStaking}>VIEW MY STAKINGS</Button>}
                            
                           
                        </CardBody>
                    </Card>
                </Flex>
                
        </>
    )
}

export default StakePackage