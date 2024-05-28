import { useState } from "react"
import axios from "axios"
function App()
{
    const[deg,setdeg]=useState("")
    const[city,setcity]=useState("")
    const[desc,setdesc]=useState("")
    const[ecity,setecity]=useState("")
    function handlechange(event){
             setecity(event.target.value)
    } 
    function getweather(){
           var weatherdata=axios(`https://api.openweathermap.org/data/2.5/weather?q=${ecity}&appid=7fb7ee99c0338d89b217e829302d0480`)
           weatherdata.then(function(dalta){
            setdeg(dalta.data.main.temp)
            setcity(dalta.data.name)
            setdesc(dalta.data.weather[0].main)
           })
    }

     return(
        <div className="flex flex-row justify-center h-[100vh] items-center">
            <div style={{"backgroundImage": "linear-gradient(120deg, #a6c0fe 0%, #f68084 100% "}}
            className="p-2 rounded-md shadow">
                <h2 className="font-medium">Hey !☁️</h2>
                <p className="text-xs">Do you want to know the weather Report:)</p>
                <input onChange={handlechange} className="rounded-md h-6 text-sm p-1 mt-2 outline-none" 
                placeholder="Enter the City Name">
                </input>
                <br/>
                <button onClick={getweather} className="bg-black text-white rounded-md p-1 mt-2 text-xs">
                Get Report⚡</button>
            
            <p className="text-xs mt-2">Degree:{deg} | City:{city} | Weather:{desc}</p>
            </div>
            
        </div>
    )
}

export default App
