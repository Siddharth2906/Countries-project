import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './Component/Header'
import Card from './Component/Card'
import SearchContainer from './Component/SearchContainer'
import Region from './Component/Region'
import { Link } from 'react-router-dom'
import Cardskimmer from './Component/Cardskimmer'

function App() {
  const [count, setCount] = useState('');
  const [component, setcomponent] = useState([])
  const newarray=new Array(15);
console.log(component)

  async function fetchdata() {
    let resonse= await fetch('https://restcountries.com/v3.1/all');
      let data= await resonse.json();
       console.log(data)
      setcomponent(data);
      

  } 
  useEffect(() => {
     
    
  fetchdata();
    
  }, [])

  return (
    <>
      

      <div className='mini-header'>
        <SearchContainer setCount={setCount}/>
        <Region setCount={setCount}/>
       
      </div>
      <div className='countries-container'>
     
       
      {
      component.length==0?newarray.fill(0).map((i,j)=>{
        return(<Cardskimmer key={j}/>)
      }):component.filter((item)=> item.name.common.toLowerCase().includes(count) || item.region.toLowerCase().includes(count))
       .map((item,index)=>{

            return(<Link to={`/country/${item.name.common}` } state={item}><Card key={index} flags={item.flags.svg} title={item.name.common} region={item.region} population={item.population}  capital={item.capital}  /></Link>)
        })
      }
        </div>
    </>
  )
}

export default App
