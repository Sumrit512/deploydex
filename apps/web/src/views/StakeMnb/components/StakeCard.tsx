import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text } from '@pancakeswap/uikit';

const Container = styled(Flex)`

`

export interface StakeCardProps {
    title: string;
    value: number;
    pre?: string;
}

const StakeCard: React.FC<StakeCardProps> = ({
    title,
    value,
    pre
}) =>{
return (
    <>
    <Container flexDirection="column">
        <Text>{title}</Text>
        <Heading>${pre}{value}</Heading>
    </Container>

    </>
)
}

export default StakeCard
