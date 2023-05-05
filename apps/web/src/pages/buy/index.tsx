import React from "react";
import InputField from "components/InputFields/InputFields";

const Buy = () => {

    return(
        <div style={{
            'display': 'flex',
            'flexDirection': 'column',
            'padding': '20px',
            'gap' : '40px'
        }}>

<p><span><b>Account No. :</b></span></p>

<p><span> <b>IFSC code :</b></span>  </p>

<p> <span><b>Bank Name :</b></span> </p>

 <InputField
 type="text"
 text="address to recieve MNB tokens"/>
        </div>
    )
}

export default Buy;