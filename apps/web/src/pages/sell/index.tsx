import React, {useState} from "react";
import { ProgressBar } from "react-loader-spinner";
import { Button, Flex, Text, Grid, Input } from "@pancakeswap/uikit";
import { Toaster,toast } from "react-hot-toast";
import { LeftWrapper } from "views/Home/components/Banners/Styled";
import Page from "views/Page";



const Sell = () => {



    const [isLoading, setIsLoading] = useState(false)
    const [isDisable, setIsDisable] = useState(false)
    const [txHash, setTxHash] = useState('0')
    const [account, setAccount] = useState('')
    const [bank, setBank] = useState('')
    const [mailId, setMailId] = useState('')
    const [ifsc, setIfsc] = useState('')
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
      setHover(true);
    };
  
    const handleMouseLeave = () => {
      setHover(false);
    };
  
const input = {
  txHash: "jdfhjsdfh",
  accountNo: "hfasdjhsjd",
  bankName: "sdfhjs", 
  ifscCode: "kdahfjks", 
  mailId: "sahjdasj"
}
    const sendDetails = async() => {

      try{
        const txHashInput = document.getElementById("txHash") as HTMLInputElement | null;
        const accountInput = document.getElementById("account") as HTMLInputElement | null;
       const bankInput = document.getElementById("bank") as HTMLInputElement | null;
       const ifscInput = document.getElementById("ifsc") as HTMLInputElement | null;
       const mailIdInput = document.getElementById("mailId") as HTMLInputElement | null;
        
       
        if(
          txHashInput.value === '' || 
          accountInput.value === '' ||
          bankInput.value === '' ||
          ifscInput.value === '' ||
          mailIdInput.value === ''
        ) {
          toast.error('Please fill all the field')
        
        }
        else{
          setIsLoading(true)
          setIsDisable(true)
          console.log(txHash, account, bank, ifsc)
          let data = await fetch("https://dexbackend.onrender.com/txDetailsSell", {
           method: 'POST',
           headers: {
            "Content-type" : "application/json"
           } ,
           body: JSON.stringify(input)
          })
            data = await data.json()
            console.log(data)
  
          toast.success('Transaction sent!', {
          duration: 2000,
        })
  
  
     setTxHash('')
     setAccount('')
     setBank('')
     setIfsc('')
     setMailId('')
  
    txHashInput.value = ''
    accountInput.value = ''
    bankInput.value = ''
    ifscInput.value = ''
    mailIdInput.value = ''
    setIsDisable(false)
    setIsLoading(false)
    setHover(false)
        }
      
      } catch(e) {
     console.log(e)
     toast.error('something went wrong! Please try again', {
      duration: 2000
     })
     setIsDisable(false)
     setIsLoading(false)
     setHover(false)
      }
        

        // toast('Good Job!', {
        //     icon: '👏',
        //   });
          
    }

    return(
        
      <Page>
        <Flex >
          
        <div style={{
           
            'padding': '20px',
      
          
            'justifyContent' : 'center',
            'alignItems' : 'center',
            'marginBottom': '10%'
        }}>
            <Text mb={4}> NOTE: To sell MNB tokens, first transfer the MNB tokens to the Wallet Address mentioned below, and after that enter the transaction hash
                and then enter your Bank details. And then click on Confirm button, after confirming the transaction
                we will transfer the INR into your entered Bank account number.
            </Text>
          <Flex >
            
          <div style={{
                'border': 'black solid 1px', 
                'borderRadius': '16px',
                'background': 'white',
             width: '100%',
             maxWidth: '450px',
             margin: '0 auto',
                  
                    'padding' : '20px'
            }}>
<Grid mb={2} gridTemplateRows="1fr 1fr 1fr 1fr 1fr" gridGap="15px">
  <Grid gridTemplateColumns="auto auto">
 <Text bold>Wallet Address</Text>
 <Text bold>ABC</Text>
  </Grid>
 
<Grid gridTemplateColumns="110px auto" alignItems="center">
<Text bold>Tx Hash : </Text>
<Input type='text' id="txHash" name="amount" 
onChange={(e) => setTxHash(e.target.value)}
placeholder="Transaction Hash of the Transaction done by you?"

/>


</Grid>

<Grid gridTemplateColumns="110px auto" alignItems="center"> 
<Text bold>Account no. :</Text>

<Input type="text" id="account" name="utr"
onChange={(e)=>setAccount(e.target.value)}
placeholder="Your Account Number"
/>


</Grid>

<Grid gridTemplateColumns="110px auto" alignItems="center"> 
<Text bold>Bank&apos;s Name :</Text>
<Input onChange={(e) => setBank(e.target.value)} type="text" id="bank" name="address"
placeholder="Bank's name"

/>


</Grid>
<Grid gridTemplateColumns="110px auto" alignItems="center">
<Text bold>IFSC Code :</Text>
<Input onChange={(e) => setIfsc(e.target.value)} type="text" id="ifsc" name="address"
placeholder="IFSC code"
/>

</Grid>

<Grid gridTemplateColumns="110px auto" alignItems="center">
<Text bold>Email Id :</Text>
<Input onChange={(e) => setMailId(e.target.value)} type="email" id="mailId" name="mailId"
placeholder="Email"

/>


</Grid>




{/*  eslint-disable-next-line react/button-has-type */}


</Grid>
<Button 
width="100%"
mt={2}
onClick={sendDetails}
disabled={isDisable}
style={{
'borderRadius': '16px',
'backgroundColor' : isDisable? 'gray': (hover? '#7645D980' : '#7645D9') ,
'cursor' : isDisable? 'not-allowed' : (hover?  'pointer' : 'arrow') ,
'border': '1px solid white',
'color' : hover? 'black' : 'white',

}}

onMouseEnter={handleMouseEnter}

onMouseLeave={handleMouseLeave}

>
{
isLoading?  (

  <ProgressBar
    height="38"
    width ="100"
  //   ariaLabel="progress-bar-loading"
    wrapperStyle={{  }}
  //   wrapperClass="progress-bar-wrapper"
    borderColor = 'black'
    barColor = 'white'
  />
      ) : 'Confirm' 

}  


</Button>
     

            </div>
          </Flex>
        



        </div>
        </Flex>
  
      </Page>
      
    )

}

export default Sell;