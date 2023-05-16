import { Flex, Card, CardBody, Heading, Text, CardHeader, Button, useModal, Modal, ModalProps, Input } from "@pancakeswap/uikit"
import React, { useCallback, useState } from "react";
import StakeAction from "./StakeAction";
import { STAKE_PACKAGE } from "./type"

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
    const [stakePackage, setStakePackage] = useState<STAKE_PACKAGE>()
    const CustomModal: React.FC<React.PropsWithChildren<ModalProps>> = ({ title, onDismiss, ...props }) => (
        <Modal title={title} style={{
        "background": `${title==='Gold' ? 'gold' : 'silver'}`
        }} onDismiss={onDismiss} {...props}>
        
                        <StakeAction
                        availableAmount={10000}
                        pSelected={stakePackage}
                        
                        />
                
        </Modal>
      );

    const [onPresent1] = useModal(<CustomModal title={packageName} />);
 
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
                               () => { onPresent1()}
                             
                              
                            }> STAKE NOW</Button>
                           
                        </CardBody>
                    </Card>
                </Flex>
        </>
    )
}

export default StakePackage