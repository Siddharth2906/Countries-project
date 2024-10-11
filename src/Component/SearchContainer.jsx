import React, { useState } from 'react'

const SearchContainer = ({setCount}) => {
    
 
  return (
    <div className='input-container'> <input type="text" placeholder='Search countries' onChange={(e)=>setCount(e.target.value)}/></div>
  )
}

export default SearchContainer