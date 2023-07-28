/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useState, useEffect} from "react";
import { ProgressBar } from "react-loader-spinner";
import 'bootstrap/dist/css/bootstrap.css';
import {  Flex, Text, Grid, Input } from "@pancakeswap/uikit";
import Button from 'react-bootstrap/Button';
import { Toaster,toast } from "react-hot-toast";
import { LeftWrapper } from "views/Home/components/Banners/Styled";
import Footer from "components/Footer";
import Page from "views/Page";
import {AiOutlineCopy} from "react-icons/ai"
import { useWeb3React } from "@pancakeswap/wagmi";
import { BsArrowRight } from "react-icons/bs";



const Sell = () => {

  const accountAddress = "0x70a0F7A104b27C3eaf9c8F771ef6476AFaFC5757"

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    
 },[])

const useWeb3Reac  = useWeb3React()
const accountConnected = useWeb3Reac.account
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
      if(!accountConnected){
        console.log(accountConnected)
      toast.error('Please Connect to the wallet')
      } else{
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
      }

    
        

        // toast('Good Job!', {
        //     icon: '👏',
        //   });
          
    }

    const handleCopyToClipboard = async () => {
      console.log('copied')
      await navigator.clipboard.writeText(accountAddress)
      toast.success("Address Copied")
    }

    return(
        <div >
      <Page>

      <div className="container" >
            <img src="../../images/hand_megaphone.png" alt="" className="hand-mega slide_up_down"/>
            <img src="../../images/head6_rating.png" alt="" className="head6-rating scale_up_down"/>
            <img src="../../images/header5_linechart.png" alt="" className="head6-charts scale_up_down"/>
            <img src="../../images/rocket.png" alt="" className="head6-rocket slide_up_down"/>
      <div className="notice-text">
										
       <strong>NOTE:</strong> To sell MNB tokens, first transfer the MNB tokens to the Wallet Address mentioned below, and after that enter the transaction hash
                and then enter your Bank details. And then click on Confirm button, after confirming the transaction
                we will transfer the INR into your entered Bank account number.
										</div>
   <div className="row">
      <div className="col-sm-6 col-lg-4 offset-lg-4 mbuni">
         <div className="card buy box-hover">
            <div className="card-header py-3">
               <h5 className="mb-0">Sell MNB Token</h5>
            </div>
            <div className="card-body">
               <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">Wallet Address  <span className="text-primary hoverme">{`${accountAddress.substring(0,6)}...${accountAddress.substring(accountAddress.length-4, accountAddress.length)}`} <AiOutlineCopy
                  onClick={handleCopyToClipboard}
                  /></span></li>
               </ul>
               <div className="mt-3">
                  <div className="mb-3"><label className="form-label">Tx Hash </label>
                  <input type='text' id="txHash" name="amount" className="form-control buy" 
onChange={(e) => setTxHash(e.target.value)}
placeholder="Transaction Hash of the Transaction done by you?"

/>

                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      MNB token amount:
                      </label>
                      <input type="number" className="form-control buy" id="quantity" name="utr"
onChange={(e)=>setAccount(e.target.value)}
placeholder="No. of MNB token"
/>
                     </div> 
                  <div className="mb-3">
                    <label className="form-label">
                      Account no. :
                      </label>
                      <input type="text" className="form-control buy" id="account" name="utr"
onChange={(e)=>setAccount(e.target.value)}
placeholder="Your Account Number"
/>
                     </div> 
                  <div className="mb-3"><label className="form-label">Bank's Name :</label>
                  
                  <input  className="form-control buy" onChange={(e) => setBank(e.target.value)} type="text" id="bank" name="address"
placeholder="Bank's name"

/>
                  </div>
                  <div className="mb-3"><label className="form-label">IFSC Code : </label>
                  <input className="form-control buy" onChange={(e) => setIfsc(e.target.value)} type="text" id="ifsc" name="address"
placeholder="IFSC code"
/>
                  </div>
                  <div className="mb-3"><label className="form-label">Email Id : </label>
                  <input className="form-control buy" onChange={(e) => setMailId(e.target.value)} type="email" id="mailId" name="mailId"
placeholder="Email"

/></div>
               
               </div>
            </div>
            <div className="linear-progress">
               <div className="linear-progress-bar" />
            </div>
            <div className="card-footer flex-wrap">
             
               <Button 


onClick={sendDetails}

disabled={isDisable}



onMouseEnter={handleMouseEnter}

onMouseLeave={handleMouseLeave}

className="btn pull-right btn-primary btn-block text-white btn btn-primary"
>
{
isLoading?  (

  <ProgressBar
    height="38"
    width ="100"
  //   ariaLabel="progress-bar-loading"
    wrapperStyle={{  }}
  //   wrapperclassName="progress-bar-wrapper"
    borderColor = 'black'
    barColor = 'white'
  />
      ) : 'Confirm' 

} &nbsp;< BsArrowRight /> 


</Button>


            </div>
         </div>
      </div>
   </div>
</div>

  
      </Page>
     <Footer/>
      </div>
    )

}

export default Sell;