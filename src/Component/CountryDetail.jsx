import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Header from './Header';

const CountryDetail = () => {

    const params= useParams();
    const {state}=useLocation()   
     
    const [country, setcountry] = useState(null)
      const[found,setfound]=useState(true)

    function updateData({...data}){
      console.log(data)
      setcountry({
        name:data.name.common,
        flag:data.flags.svg,
        region:data.region,
        population:data.population.toLocaleString("en-IN"),
       subregion:data.subregion,
       nativename:Object.values(data.name.nativeName)[0].common,
        capital:data.capital,
        tid:data.tld,
        currencies:Object.values(data.currencies).map((currency)=>currency.name).join(', '),
        border:[]
       
        
       
      })
  
    Promise.all(data.borders.map((bord)=>{
        fetch(`https://restcountries.com/v3.1/alpha/${bord}`)
        .then((res)=>res.json())
        .then((bordercountry)=>{
         setcountry((prev)=>({...prev,border:[...prev.border,bordercountry[0].name.common]}))
        })
    
    })
    .catch((err)=>{
     console.log(err)
    }))
      
    }
      
  
    async function fetchCountry() {


      if(state){
        updateData(state)
        return
      }
        let resonse= await fetch(`https://restcountries.com/v3.1/name/${params.name}?fullText=true`);
        let data= await resonse.json();
        
       updateData(data)
       
   
      } 

    useEffect(() => {
      fetchCountry()
    

    },[params.name])
     
   
  return country==null?"loading":(<>
 <div className='Detail'>
  <img src={country.flag} alt={country.name} />
  <div className='innerDetail'>
  <p><b>Name : </b>{country.name}</p>
  <p><b>Nativename : </b>{country.nativename}</p>
  <p><b>Region : </b>{country.region}</p>
  <p><b>Subregion : </b>{country.subregion}</p>
  <p><b>Population : </b>{country.population}</p>
  <p><b>Tld : </b>{country.tid}</p>
  <p><b>Currencies : </b>{country.currencies}</p>
  <p><b>Capital : </b>{country.capital}</p>
 
 {country.border.length!=0&& <p className='border'><b>borders :</b>{ country.border.map((item, i)=>{
     return <Link to={`/country/${item}`} key={i} className='border-name'>{item}</Link>
   
  })}</p>}
   </div>
 </div>

  </>)
}

export default CountryDetail