import React, { useMemo, useState } from 'react'
import { RE_DIGIT } from './constants'

export type InputProps = {
    value: string
    valLength: number
    onChange: (value: string) => void
  }
  
const Otp = ({onChange, value, valLength = 6}: InputProps) => {
    const [otp, setOtp] = useState('')
    const valueItems = useMemo(() => {
        const valueArray = otp.split('')
        const items: Array<string> = [];

        for (let i = 0; i < valLength; i++) {
            const char = valueArray[i]
            
            if (RE_DIGIT.test(char)) {
                items.push(char)
            } else {
                items.push('')
            }
        }
        return items

    }, [otp, valLength])

    
    const inputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        idx: number
    ) => {
        const target = e.target
        const targetValue = target.value;

        if (!RE_DIGIT.test(targetValue)) {
            return;
        }

        const newValue = otp.substring(0, idx) + targetValue + otp.substring(idx + 1)
        setOtp(newValue)

        const nextElementSibling = target.nextElementSibling as HTMLInputElement
        if (nextElementSibling) {
            nextElementSibling.focus()
            
        }
    }
  return (
    <div className='otp-group'>
        {
            valueItems.map((digit, idx) => 
            <input 
                type="text" 
                placeholder='_'
                key={idx}
                inputMode='numeric'
                pattern='\d{1}'
                maxLength={valLength}
                className='otp-input'
                value={digit}
                onChange={evt => inputChange(evt, idx)}
            />)
        }
    </div>
  )
}

export default Otp