import React from 'react'

const Region = () => {
  return (
    <div className='Region'>
    <select name="cars" >
      <option hidden="">Filter By region</option>
  <option value="Asia">Asia</option>
  <option value="Oceania">Oceania</option>
  <option value="North America">North America </option>
  <option value="Caribbean">Caribbean</option>
  <option value="Europe">Europe</option>
  <option value="Middle East">Middle East</option>
  <option value="Africa">Africa</option>
</select>

    </div>
  )
}

export default Region