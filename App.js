
/*import { useState } from "react"
import "./App.css"
function App()
{
  const [name1,setName1]=useState()  //  usestate(0) inside the bracket value is 0 means <input type> text value 0.
  const [birthplace,setBirthplace]=useState()
  const [role,setRole]=useState()
 const insert=()=>{
    var url=`http://127.0.0.1:8220/mongoinsertfun?n1=${name1}&n2=${birthplace}&n3=${role}` // ``(this is down to esc)
 window.open(url)
  }
// find:
  const [name2,setName2]=useState()  
  const find=()=>{
  window.open("http://127.0.0.1:8996/mongofindfun?h1="+name2)
  }
 // update:
const [name3,setName3]=useState()  //  usestate(0) inside the bracket value is 0 means <input type> text value 0.
    const [birthplace3,setBirthplace3]=useState()
    const [role3,setRole3]=useState()
   
  const update=()=>{
   var url=`http://127.0.0.1:9944/mongoupdatefun?d1=${name3}&d2=${birthplace3}&d3=${role3}` // ``(this is down to esc)
   window.open(url)
  }
 //  delete:
 const [name4,setName4]=useState() 
  const deletes=()=>{
 window.open("http://127.0.0.1:6780/mongodeletefun?k1="+name4)
  }
  return(
    <>
    <h2><center> CRUD-Application using MERN</center></h2><br></br><br></br><br></br>
    <div className="app">
    
   <div className="create-data">
    <form onSubmit={insert} >
    <input type="text" placeholder="Name"  value={name1} onChange={(event)=>{setName1(event.target.value)}}></input><br></br>
    <input type="text" placeholder="Birthplace"  value={birthplace} onChange={(event)=>{setBirthplace(event.target.value)}}></input><br></br>
    <input type="text" placeholder="Role" value={role} onChange={(event)=>{setRole(event.target.value)}}></input><br></br>
    <input type="submit" value="Add data" id="b1"></input>
    </form>
    </div>
<br></br>
   
    <div className="update-data">
      <form onSubmit={update}>
   <input type="text" placeholder="Name"  value={name3} onChange={(event)=>{setName3(event.target.value)}}></input><br></br>
    <input type="text" placeholder="Birthplace"  value={birthplace3} onChange={(event)=>{setBirthplace3(event.target.value)}}></input><br></br>
    <input type="text" placeholder="Role" value={role3} onChange={(event)=>{setRole3(event.target.value)}}></input><br></br>
     < input type="submit" value="Update" id="b2"></input>  
          </form>
    </div>
    <br></br>
   
 <div className="read-data">
    <form onSubmit={find}>
    <input type="text" placeholder="Name" value={name2}   onChange={(event)=>{setName2(event.target.value)}}></input><br></br>
  <input type="submit" value="Read" id="b3" ></input>
    </form>
   </div>
   <br></br>   
  
  <div className="delete-data">
    <form onSubmit={deletes}>
    <input type="text" placeholder="Name"  value={name4} onChange={(event)=>{setName4(event.target.value)}}></input><br></br>
    <input type="submit"  value="Delete" id="b4"></input>
    </form>
    </div>
    </div>
    <div class="footer">
			<div class="last-update">Last updated on june 18,2023</div>
			</div>
		</>
  )
}
export default App

*/

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

