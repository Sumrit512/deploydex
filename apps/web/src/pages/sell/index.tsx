import React, {useState} from "react";

const Sell = () => {




    const [txHash, setTxHash] = useState('0')
    const [account, setAccount] = useState('')
    const [bank, setBank] = useState('')
    const [ifsc, setIfsc] = useState('')
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
      setHover(true);
    };
  
    const handleMouseLeave = () => {
      setHover(false);
    };
  

    const sendDetails = async() => {
        console.log(txHash, account, bank, ifsc)
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
            <p> NOTE: To sell MNB tokens, first transfer the MNB tokens to the Wallet Address mentioned below, and after that enter the transaction hash
                and then enter your Bank details. And then click on Confirm button, after confirming the transaction
                we will transfer the INR into your entered Bank account number.
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
      <p ><span><b>Wallet Address :</b></span> <span> ABC</span></p>

      <label htmlFor="txHash" >Tx Hash : 
    <input type='text' id="txHash" name="amount" 
    onChange={(e) => setTxHash(e.target.value)}
    placeholder="Transaction Hash of the Transaction done by you?"
    style={{
         'width': '23vw',
         'marginLeft' : '10px',
         'borderRadius' :'8px',
         'border' : '1px solid gray'
    }}
    />

  </label>

<label htmlFor="account">Account no. :

  <input type="text" id="account" name="utr"
  onChange={(e)=>setAccount(e.target.value)}
  placeholder="Your Account Number"
     style={{
        'width': '21vw',
        'marginLeft' : '10px',
        'borderRadius' :'8px',
        'border' : '1px solid gray'
   }}
  />

  </label>

  <label htmlFor="bank">Bank&apos;s Name :
  <input onChange={(e) => setBank(e.target.value)} type="text" id="bank" name="address"
  placeholder="Bank's name"
     style={{
        'width': '20.5vw',
        'marginLeft' : '10px',
        'borderRadius' :'8px',
        'border' : '1px solid gray'
   }}
  />

  </label>
  <label htmlFor="ifsc">IFSC Code :
  <input onChange={(e) => setIfsc(e.target.value)} type="text" id="ifsc" name="address"
  placeholder="IFSC code"
     style={{
        'width': '22vw',
        'marginLeft' : '10px',
        'borderRadius' :'8px',
        'border' : '1px solid gray'
   }}
  />

  </label>



  {/*  eslint-disable-next-line react/button-has-type */}
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

export default Sell;