import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){

   const [weatherInfo,setWeatherInfo]=useState({
       city:"Delhi",
       feels_like:25,
       temp:25.05,
       tempMin:25.05,
       tempMax:25.05,
       humidity:47,
       weather:"haze",
   });

   let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
   }

    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather app</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}