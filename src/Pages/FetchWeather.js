import React from "react";
import axios from "axios";
import { useState } from "react";
import Weather from "./weather";

const FetchWeather = () => {

    const[city,setCity]=useState();
    const [currentWeather, setCurrentWeather] = useState();
    const [location, setLocation] = useState();

    const api =(city)=>`https://api.weatherapi.com/v1/forecast.json?key=d8653ce062f748cc9b0173619241410&q=${city}&days=7&aqi=no&alerts=no`;
    
    const fetch=async ()=>{
        try{
            const response=await axios.get(api(city));
            const resp=response.data;
            console.log(resp);
            setCurrentWeather(resp.current);
            setLocation(resp.location);
        }
        catch(e){
            console.log("Error :",e);
        }
    }
    
    return (
        <>
            <div className="back">
                <nav className="navbar  ">
                    <div className="container-fluid  p-1">
                        <span className="navbar-brand mb-0 h1 m-1 p-2 text-white">Weather App</span>
                    </div>
                </nav>
                <div className='container   rounded p-5 mt-5'>
                    <div className='d-flex justify-content-center'>
                        <div className='input-group w-50'>
                            <input type='text'  placeholder='Enter your Region' className='form-control ' onChange={(e)=>{setCity(e.target.value);
                                if(e.target.value==""){
                                    setCurrentWeather();
                                }
                            }}/>
                        </div>
                    </div>

                </div>
                <div className='d-flex justify-content-center'>
                <button type="button" class="btn btn-primary" onClick={fetch} >Fetch Weather</button>

                </div>
                
                {currentWeather && <Weather currentWeather={currentWeather} location={location}/>}
                
            </div>


            
            


        </>)
}

export default FetchWeather;