import React from "react";
import InputField from "components/InputFields/InputFields";

const Buy = () => {

    return(
        
        <div style={{
            'display': 'flex',
            'flexDirection': 'column',
            'padding': '20px',
            'gap' : '40px',
            'justifyContent' : 'center',
            'alignItems' : 'center'

        }}>
            
            <div style={{
                'background': 'white',
                'display': 'flex',
                'flexDirection' : 'column',
                    'gap': '40px',
                    'padding' : '20px'
            }}>
      <p ><span><b>Account No. :</b></span></p>

<p><span> <b>IFSC code :</b></span>  </p>

<p> <span><b>Bank Name :</b></span> </p>

 <InputField
 type="text"
 text="address to recieve MNB tokens"/>
            </div>



        </div>
    )
}

export default Buy;