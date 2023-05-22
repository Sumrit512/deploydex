import React, { useState } from "react";
import InputField from "components/InputFields/InputFields";
import toast, {Toaster} from 'react-hot-toast'
import { Button, Flex, Input, Text, Grid } from "@pancakeswap/uikit";
import { ProgressBar } from "react-loader-spinner";
import axios from 'axios'
import validator from 'validator';
import Page from "components/Layout/Page";

const Buy = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [isDisable, setIsDisable] = useState(false)
     const [amount, setAmount] = useState('0')
    const [address, setAddress] = useState('')
    const [utr, setUtr] = useState('')
    const [mailId, setMailId] = useState('')
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
      setHover(true);
    };
  
    const handleMouseLeave = () => {
      setHover(false);
    };
  

    const sendDetails = async() => {
      try{
        const utrInput = document.getElementById("utr") as HTMLInputElement | null
        const addressInput = document.getElementById("address") as HTMLInputElement | null
        const amountInput = document.getElementById("amount") as HTMLInputElement | null
        const mailIdInput = document.getElementById("mailId") as HTMLInputElement | null

        if(
          utrInput.value === '' ||
          addressInput.value === '' ||
          amountInput.value === '' ||
          mailIdInput.value === ''
        ) {
          toast.error('Please fill all the fields')
          if(validator.isEmail(mailIdInput.value))
          {
            toast.success('yes')
          }
          else{
            toast.error('Please enter a valid email')
          }
          // if(Number.isFinite(Number(amountInput.value)))
          // {
          //   toast.success('yes')
          // }
          // else{
          //   toast.error('Please enter a valid amount')
          // }
      //  return
          
        }
        else{
          setIsLoading(true)
          setIsDisable(true)
            console.log(amount, address, utr)
    
            const input = {
              utr,
              "walletAddress" : address,
             amount, 
             mailId
          }
           let data = await fetch('https://dexbackend.onrender.com/txDetails', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(input)
           })
           data = await data.json()
           console.log(data)
            toast.success('Transaction sent!',{
              duration: 2000
            })
            setUtr('')
            setAddress('')
            setAmount('')
            setMailId('')
  
            utrInput.value = ''
            addressInput.value = ''
            amountInput.value = ''
            mailIdInput.value = ''
            setIsDisable(false)
            setIsLoading(false)
            setHover(false)
        }
        
      }catch(e){
        console.log(e)
        toast.error("something went wrong! Please try again")
        setIsDisable(false)
        setIsLoading(false)
        setHover(false)
      }
    

    }

    return(
      <Page>
    
    
    <Flex width="100%" alignItems="center">
        <div style={{
            'padding': '20px',
            'gap' : '40px',
            'justifyContent' : 'center',
            'alignItems' : 'center',
            'marginBottom': '10%'
        }}>
            <Text mb={4}> NOTE: To buy MNB tokens, first transfer the INR to the Account no. mentioned below, and after that enter the utr transaction number
                and then enter your wallet address and the amount of MNB tokens you want to receive. And then click on Confirm button, after confirming the transaction
                we will transfer the MNB tokens into your entered Wallet address.
            </Text>
         <Flex >
            <div style={{
                'border': 'black solid 1px', 
                borderRadius: '16px',
                'background': 'white',
              width: '100%',
              margin: '0 auto',
              maxWidth: '450px',
              display: 'flex',
              flexDirection: 'column',
                    'gap': '40px',
                    'padding' : '20px'
            }}>
              <Flex flexDirection="column" justifyContent="space-between" alignItems="center">
             
     <Grid gridTemplateRows="1fr 1fr 1fr" gridGap="10px">
     <Grid gridTemplateColumns="1fr 1fr">

<Text bold mr={10}>Account No. : </Text>

<Text>ABC</Text>  


</Grid>
<Grid gridTemplateColumns="1fr 1fr">

<Text bold>IFSC code : </Text>

<Text>ABC</Text>  


</Grid>
<Grid gridTemplateColumns="1fr 1fr">

<Text bold>Bank Name : </Text>

<Text>ABC</Text>  


</Grid>
     </Grid>


              </Flex>
        
<Grid gridTemplateRows="1fr 1fr 1fr 1fr" gridGap="10px" >

<Grid mb={3} gridGap="4px" gridTemplateColumns="80px auto" alignItems="center" justifyContent="">


<Text bold >UTR:</Text>


<Input  type="text" id="utr" name="utr"
  onChange={(e)=>setUtr(e.target.value)}
  placeholder="Payment Transaction Number"

  />
</Grid>

<Grid mb={3} gridTemplateColumns="80px auto" justifyContent="" alignItems="center">

<Text bold mr={3}>Address: </Text>
  <Input onChange={(e) => setAddress(e.target.value)} type="text" id="address" name="address"
  placeholder="To what address should we send MNB to?"
 
  />
 
</Grid>
 <Grid mb={3} gridTemplateColumns="80px auto" justifyContent="" alignItems="center" > 
 <Text bold mr={3}>Amount: </Text>
    <Input type='text' id="amount" name="amount" 
    onChange={(e) => setAmount(e.target.value)}
    placeholder="How much MNB tokens?"

    />

 </Grid>
<Grid mb={3} gridTemplateColumns="80px auto" justifyContent="" alignItems="center">
<Text bold mr={3}>Email: </Text>
    <Input type='email' id="mailId" name="mailId" 
    onChange={(e) => setMailId(e.target.value)}
    placeholder="Email Id"

    />
 

</Grid>

</Grid>



  {/*  eslint-disable-next-line react/button-has-type */}
  <Button onClick={sendDetails}
  disabled={isDisable}
width="100%"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  >{

    isLoading? (
      <ProgressBar
      height={39}
      width={100}
      //   ariaLabel="progress-bar-loading"
      wrapperStyle={{  }}
      //   wrapperClass="progress-bar-wrapper"
        borderColor = 'black'
        barColor = 'white'
      />
      
          ) :'Confirm' 
  }</Button>

            </div>

            </Flex>

        </div>
        </Flex> 
        </Page>
    )
}

export default Buy;