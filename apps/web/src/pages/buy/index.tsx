import React, { useState, useEffect } from "react";
import InputField from "components/InputFields/InputFields";
import toast, {Toaster} from 'react-hot-toast'
import {  Flex, Input, Text, Grid } from "@pancakeswap/uikit";
import { ProgressBar } from "react-loader-spinner";
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "components/Footer";
import validator from 'validator';
import { useWeb3React } from "@pancakeswap/wagmi";
import { BsArrowRight } from "react-icons/bs";
import Page from "components/Layout/Page";
import WalletAnimation from "views/UnStakeMnbView/components/WalletAnimation";
import styles from "../../style/Buy.module.css";

import { Sizes } from '../../../packages/uikit/src/components/Heading/index.stories';



const Buy = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    
 },[])
  
  const {account} = useWeb3React()
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
      if(!account){
        toast.error('Please Connect to the Wallet')
      } else{
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
            // if(validator.isEmail(mailIdInput.value))
            // {
            //   toast.success('yes')
            // }
            // else{
            //   toast.error('Please enter a valid email')
            // }
            // if(Number.isFinite(Number(amountInput.value)))
            // {
            //   toast.success('yes')
            // }
            // else{
            //   toast.error('Please enter a valid amount')
            // }
         return
            
          }
          
            if(validator.isEmail(mailIdInput.value)) {
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
            }  else{
              toast.error('Please enter valid email or amount')
            }
         
          
        }catch(e){
          console.log(e)
          toast.error("something went wrong! Please try again")
          setIsDisable(false)
          setIsLoading(false)
          setHover(false)
        }
      }
     
    

    }

  

    return(
    
      <div style={{
        "background": "linear-gradient(120deg, #f1f8ff 0%, #f8f2ff 100%)"
              }}>
      <Page>
       

      <div className="container">
      <img src="../../images/hand_megaphone.png" alt="" className="hand-mega slide_up_down"/>
            <img src="../../images/head6_rating.png" alt="" className="head6-rating scale_up_down"/>
            <img src="../../images/header5_linechart.png" alt="" className="head6-charts scale_up_down"/>
            <img src="../../images/rocket.png" alt="" className="head6-rocket slide_up_down"/>
      <div className="notice-text">
										
                    <strong>NOTE:</strong> To buy MNB tokens, first transfer the INR to the Account no. mentioned below, and after that enter the utr transaction number and then enter your wallet address and the amount of MNB tokens you want to receive. And then click on Confirm button, after confirming the transaction we will transfer the MNB tokens into your entered Wallet address.
                                 

                                 
                                 </div>

      <div className="row">

     

                            <div className="col-sm-6 col-lg-4 offset-lg-4">


                            <div className="card buy box-hover">
							<div className="card-header py-3">
								<h5 className="mb-0">Buy MNB Token</h5>
							</div>
							<div className="card-body">
              <ul className="list-group">
															<li className="list-group-item d-flex justify-content-between align-items-center">
                              Account No.  <span className="text-primary " >xxxxxxxx989</span>
															</li>
															<li className="list-group-item d-flex justify-content-between align-items-center">
																IFSC Code <span className="text-primary ">2xxxxxxx</span>
															</li>
															<li className="list-group-item d-flex justify-content-between align-items-center">
																Bank Name <span className="text-primary ">xxxxxxxxxxuni</span>
															</li>

														
														</ul>


                            <div  className="mt-3">
                                            <div className="mb-3">
                                                <label className="form-label">UTR</label>
                                               
                                                <input  type="text" id="utr" className="form-control buy" name="utr"
  onChange={(e)=>setUtr(e.target.value)}
  placeholder="Payment Transaction Number"

  />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Address</label>
                                                <input onChange={(e) => setAddress(e.target.value)} type="text" className="form-control buy" id="address" name="address"
  placeholder="To what address should we send MNB to?"
 
  />
                                              
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Amount</label>
                                               
                                                <input type='text' id="amount"  className="form-control buy" name="amount" 
    onChange={(e) => setAmount(e.target.value)}
    placeholder="How much MNB tokens?"

    />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Email </label>
                                                
                                                <input type='email' className="form-control buy" id="mailId" name="mailId" 
    onChange={(e) => setMailId(e.target.value)}
    placeholder="Email Id"

    />
                                            </div>
                                           
                                           
                                        </div>

                            

								
							
								
							</div>
              <div className="linear-progress">
                <div className="linear-progress-bar"></div>
            
              </div>
							<div className="card-footer   flex-wrap">
            
              <Button className="btn pull-right btn-primary btn-block text-white"   onClick={sendDetails}
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
      //   wrapperclassName="progress-bar-wrapper"
        borderColor = 'black'
        barColor = 'white'
      />
      
          ) :'Confirm' 
  } &nbsp;< BsArrowRight /></Button>
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

export default Buy;