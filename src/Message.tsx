import React from 'react'
import { Button } from './Button'

export const Message = () => {
  return (
    <div>
        <h1>Message Component</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsum id eligendi nulla! Dignissimos earum excepturi
             voluptatibus eius quidem quaerat, in adipisci 
            corrupti aliquid modi explicabo non enim sed sequi
             est?</p>
             <Button onClick={() => alert('What are You Thinking Of....')}>
                <p>message</p>
             </Button>
    </div>
  )
}
