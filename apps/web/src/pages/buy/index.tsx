import React, { useState } from "react";
import InputField from "components/InputFields/InputFields";

const Buy = () => {

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
    }

    return(
        
        <div style={{
            'display': 'flex',
            'flexDirection': 'column',
            'padding': '20px',
            'gap' : '40px',
            'justifyContent' : 'center',
            'alignItems' : 'center',
            'marginBottom': '20px'

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
         'width': '20vw',
         'marginLeft' : '10px',
         'borderRadius' :'8px',
         'border' : '1px solid gray'
    }}
    />
  </label>

  <button onClick={sendDetails}
   style={{
'borderRadius': '8px',
'backgroundColor' : hover? '#7645D980': '#7645D9',
'cursor' : hover? 'pointer' : 'arrow',
'border': '1px solid white',
'color' : hover? 'black' : 'white'

  }}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  >Confirm</button>

            </div>



        </div>
    )
}

export default Buy;