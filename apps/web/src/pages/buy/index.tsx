import React, { useState } from "react";
import InputField from "components/InputFields/InputFields";
import toast, {Toaster} from 'react-hot-toast'
import { ProgressBar } from "react-loader-spinner";
import axios from 'axios'

const Buy = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [isDisable, setIsDisable] = useState(false)
     const [amount, setAmount] = useState('0')
    const [address, setAddress] = useState('')
    const [utr, setUtr] = useState('')
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
      setHover(true);
    };
  
    const handleMouseLeave = () => {
      setHover(false);
    };
  

    const sendDetails = async() => {
        console.log(amount, address, utr)

        const input = {
          utr,
          "walletAddress" : address,
         amount
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

        const utrInput = document.getElementById("utr") as HTMLInputElement | null
        const addressInput = document.getElementById("address") as HTMLInputElement | null
        const amountInput = document.getElementById("amount") as HTMLInputElement | null
        utrInput.value = ''
        addressInput.value = ''
        amountInput.value = ''

    }

    return(
        
        <div style={{
            'display': 'flex',
            'flexDirection': 'column',
            'padding': '20px',
            'gap' : '40px',
            'justifyContent' : 'center',
            'alignItems' : 'center',
            'marginBottom': '10%'
        }}>
            <p> NOTE: To buy MNB tokens, first transfer the INR to the Account no. mentioned below, and after that enter the utr transaction number
                and then enter your wallet address and the amount of MNB tokens you want to receive. And then click on Confirm button, after confirming the transaction
                we will transfer the MNB tokens into your entered Wallet address.
            </p>
         
            <div style={{
                'border': 'black solid 1px', 
                borderRadius: '16px',
                'background': 'white',
                'display': 'flex',
                'flexDirection' : 'column',
                    'gap': '40px',
                    'padding' : '20px'
            }}>
      <p ><span><b>Account No. :</b></span> <span> ABC</span></p>

<p><span> <b>IFSC code :</b></span> <span> ABC</span> </p>

<p> <span><b>Bank Name :</b></span> <span> ABC</span></p>

<label htmlFor="utr">UTR no. :
  <input type="text" id="utr" name="utr"
  onChange={(e)=>setUtr(e.target.value)}
  placeholder="Payment Transaction Number"
     style={{
      'padding' : '5px',
        'width': '20vw',
        'marginLeft' : '10px',
        'borderRadius' :'8px',
        'border' : '1px solid gray'
   }}
  />
  </label>
  <label htmlFor="address">Address :
  <input onChange={(e) => setAddress(e.target.value)} type="text" id="address" name="address"
  placeholder="To what address should we send MNB to?"
     style={{
      'padding' : '5px',
        'width': '20vw',
        'marginLeft' : '10px',
        'borderRadius' :'8px',
        'border' : '1px solid gray'
   }}
  />
  </label>
  <label htmlFor="amount" >Amount : 
    <input type='text' id="amount" name="amount" 
    onChange={(e) => setAmount(e.target.value)}
    placeholder="How much MNB tokens?"
    style={{
      'padding' : '5px',
         'width': '20vw',
         'marginLeft' : '10px',
         'borderRadius' :'8px',
         'border' : '1px solid gray'
    }}
    />
  </label>

  {/*  eslint-disable-next-line react/button-has-type */}
  <button onClick={sendDetails}
  disabled={isDisable}
   style={{
    'borderRadius': '8px',
    'backgroundColor' : isDisable? 'gray' : (hover ? '#7645D980': '#7645D9') ,
    'cursor' : isDisable? 'not-allowed' : (hover? 'pointer' : 'arrow'),
    'border': '1px solid white',
    'color' : hover? 'black' : 'white',
   
  }}
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
  }</button>

            </div>



        </div>
    )
}

export default Buy;