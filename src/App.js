import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css';
import Time from './component/Time';
const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);
            console.log(data);
            setWeather(data);
            setQuery(query);
        }
    }

    return (
        <div className="main-container">
            <input type="text"className="search"placeholder="Search..."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                   
                    <div className="city-temp">
                       Temp: {(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="city-temp">
                       Feels Like: {(weather.main.feels_like)}
                        <sup>&deg;C</sup>
                    </div>
                   
                    <div className="city-temp">
                        Humidity: {(weather.main.humidity)} %
                        
                    </div>
                    <div className="city-temp">
                       Latitude: {(weather.coord.lat)}
                        <sup>&deg;</sup>
                    </div>
                    <div className="city-temp">
                      Longitude: {(weather.coord.lon)}
                        <sup>&deg;</sup>
                    </div>
                    <div className="city-temp">
                       Wind_Speed: {Math.round((weather.wind.speed)*18/5)} Km/h
                        
                    </div>
                    <div className="city-temp">
                       Wind_direction: {(weather.wind.deg)}
                        <sup>&deg;</sup> west-to-east
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
            <Time/>
        </div>
    );
}

export default App;