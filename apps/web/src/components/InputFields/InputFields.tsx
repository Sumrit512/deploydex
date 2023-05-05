import React from 'react'

interface InputFieldProps{
    type: string,
    text: string,

} 

const InputField: React.FC<InputFieldProps> = ({
    type,
    text
}) => {
    return (
        <div>
        <input  type={type} placeholder={text}/>
       
        </div>
    )
}

export default InputField