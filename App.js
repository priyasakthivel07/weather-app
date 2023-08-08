
import {useState,useEffect} from 'react'
import axios from 'axios'
import "./App.css"


function App()
{
  const[ans,setAns]=useState(null)
  // const[city,setCity]=useState('karur')
   const[city,setCity]=useState(null)

  useEffect(()=>{
    if(city!==null)
    {
        const baseURL="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=3fd756d3c6233eecf8a57b9da9ce4d07"
        axios.get(baseURL).then((response)=>{
        console.log(response.data)
        setAns(response.data)      
        }).catch((err)=>{
        setAns(err.response.data)
        //console.log(err.response.data)
        },[])
    }
  })
  const show=()=>{
    setCity(document.getElementById("cn").value)
  }
    //  if(!ans)
    //  return "===="

  return(
    <>
    <div className='app'>
    
        
  

<input type="text" id="cn" placeholder='search here...'></input>
    <input type="button" onClick={show} className='submit' value="go"></input>
    {ans!==null && 
    <>
    {ans.cod==="404" && "City Not FOund"}   

    {ans.cod===200 && 
    <>
     <h2 className='h2'>Status code : {ans.cod}</h2><br></br>
    <h2 className='h2'>City Name : {ans.name}</h2><br></br>
    <h2 className='h2'>Weather Report : {ans.weather[0].main}</h2><br></br>
    <h2 className='h2'>Detailed Description : {ans.weather[0].description}</h2> <br></br>
    <h2 className='h2'>Temperature : {ans.main.temp}<sup><small>o</small></sup>C</h2>
   </>
   
    }
    
    
    </>
  }
  </div>
    </>
    
  )
  

}
export default App

