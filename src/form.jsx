import React, { ReactNode, useReducer } from 'react'
import './App.css'
// interface ButtonProps {
//     text: string;
//     backgroundColor: string;
//     stepCount: number
// }
function formReducer(state, action) {
  return {
    ...state,
    [action.target.name]: action.target.value
  }
}
export const Form = () => {


  const [formData, setFormData] = useReducer(formReducer, {})
 
  function handleSubmit() {
    alert('hello')
  }
  return (
    <div>
      <form onSubmit={() => alert('hello world')}></form>
          <label>
              <input type="text" name='name' onChange={setFormData} placeholder='name' />
          </label>
          <button type='submit'>Submit</button>
     </div>
  )
}
