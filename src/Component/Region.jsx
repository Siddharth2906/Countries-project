import React from 'react'

const Region = ({setCount}) => {
  return (
    <div className='Region'>
    <select name="cars" onChange={(e)=>{setCount(e.target.value.toLowerCase())}}>
  <option hidden >Filter By region</option>
  <option value="Asia">Asia</option>
  <option value="Oceania">Oceania</option>
  <option value="Americas">North Americas </option>
  <option value="Caribbean">Caribbean</option>
  <option value="Europe">Europe</option>
  <option value="Middle East">Middle East</option>
  <option value="Africa">Africa</option>
</select>

    </div>
  )
}

export default Region