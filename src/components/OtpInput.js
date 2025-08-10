import React, { useState, useRef, useEffect } from 'react'
import '../App.css';

const OtpInput = ({ otpCharCount }) => {
    const otpCount = otpCharCount && otpCharCount<=20 ? otpCharCount : 5; 
    const [otpInput, setOtpInput] = useState(new Array(otpCount).fill(''));
    const inputRef = useRef([]);

    useEffect(()=>{
        console.log(inputRef.current)
        inputRef.current[0]?.focus();
    }, [])
     useEffect(()=>{
        console.log(otpInput.join(''))
    }, [otpInput])
    const handleChange = (value, index) => {
        if (isNaN(value)) return;
        const newOtpArr = [...otpInput];
        newOtpArr[index] = value.trim().slice(-1);
        console.log(value)
        value && inputRef.current[index+1]?.focus();
        setOtpInput(newOtpArr)
    }

    const handleKeyUp = (e, index) => {
       console.log(e.key)
       if(!e.target.value && e.key === 'Backspace'){
         inputRef.current[index-1]?.focus()
       }
    }

    return (
        <div>

            {
                otpInput.map((item, index) => (
                    <input key={index} type='text'
                        className="otp-box"
                        value={otpInput[index]}
                        onChange={(e) => handleChange(e.target.value, index)}
                        onKeyUp={(e) => handleKeyUp(e, index)}
                        ref={input => inputRef.current[index] = input} />
                ))
            }
        </div>
    )
}

export default OtpInput