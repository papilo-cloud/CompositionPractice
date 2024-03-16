import React from 'react'

export const Home = () => {

  function handleClick(e:React.MouseEvent<HTMLButtonElement>) {
    console.log(e)
    
  }
  return (
    <div className='home'>
        <h2>Homepage</h2>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}
