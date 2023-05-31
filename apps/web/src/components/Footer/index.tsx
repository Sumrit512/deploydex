import { Flex, useMatchBreakpoints } from "@pancakeswap/uikit"
import styled from "styled-components"
import {AiFillGithub} from "react-icons/ai"
import {BsDiscord, BsTelegram, BsTwitter} from 'react-icons/bs'
import { useRouter } from "next/router"

const Footer = () => {
    const {isMobile} = useMatchBreakpoints()

const Wrapper = styled.div`
width: 100%;
background-color: #7645D9;
color: white;
padding: 16px;
margin-top: 50px;
z-index: 10;
`

const MenuContainer = styled.div`
margin-bottom: 50px;
padding: 16px;
`

const InnerContainer = styled.div`

margin: ${isMobile ? '10' : '0'}px;
text-align: center;
&:hover {
    text-decoration: underline;
    cursor: pointer;
}
`
const router = useRouter()

const goTo = () => {
    router.push('/about')
}

const socialHandles = () => {
    return(
        <>
         <InnerContainer>
            <AiFillGithub
            size={26}
            />
            </InnerContainer>
            <InnerContainer>
            <BsDiscord
               size={26}
               />
            </InnerContainer>
            <InnerContainer>
            <BsTwitter
               size={26}
            />
            </InnerContainer>
            <InnerContainer>
            <BsTelegram
               size={26}
            />
            </InnerContainer>
        </>
    )
}

    return (
        <Wrapper>
            <MenuContainer >
          <Flex flexDirection={isMobile? 'column' : 'row'} justifyContent="space-between" alignItems={isMobile? 'flex-start' : 'center'}> 
            <InnerContainer onClick={goTo}>
         About 
            </InnerContainer>
            <InnerContainer>
            Contact Us
            </InnerContainer>
            <InnerContainer>
            Customer Support
            </InnerContainer>
            {
            isMobile ? 
            (<Flex>
               {socialHandles()}
            </Flex>)  
            : 
            (socialHandles())
            }

        
          </Flex>
            </MenuContainer>
          
        </Wrapper>
    )
}

export default Footer