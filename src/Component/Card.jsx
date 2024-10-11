import React from 'react'

const Card = ({flags,title,population,region,capital}) => {

  return (
  <div className='Country-card'>
     <img src={flags} alt={title+"flags"} />
     <div className='inside-card'>
      <h2>{title}</h2>
      <p><b>population :</b>{population.toLocaleString("en-IN")}</p>
      <p><b>region :</b>{region}</p>
      <p><b>capital :</b>{capital}</p>
     </div>
     </div>
  )
}

export default Card