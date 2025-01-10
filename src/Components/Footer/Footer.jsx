import React, { useEffect, useRef, useState } from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import search_icon from '../Assets/Wheather/search.png'
import cloud from '../Assets/Wheather/cloud.png'
import drizzle from '../Assets/Wheather/drizzle.png'
import rain from '../Assets/Wheather/rain.png'
import humidity from '../Assets/Wheather/humidity.png'
import snow from '../Assets/Wheather/snow.png'
import wind from '../Assets/Wheather/wind.png'
import clear from '../Assets/Wheather/clear.png'


import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigator = useNavigate();
    const Officesnavigator = useNavigate()
    const help = useNavigate()
    const cityName = useRef()
    const [WheatherData, setWheatherData] = useState(false)
    const allImageIcons = {
        "01d": clear,
        "01n": clear,
        "02d": cloud,
        "50n": cloud,
        "03d": cloud,
        "03n": cloud,
        "04d": drizzle,
        "04n": drizzle,
        "09d": rain,
        "09n": rain,
        "10d": rain,
        "10n": rain,
        "13d": snow,
        "13n": snow,

        "50d": cloud,
    }
    const SearchCityWheather = async (city) => {
        if (city == '') alert("Enter City Name")

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

            const responseWheatherData = await fetch(url);
            const data = await responseWheatherData.json();
            // console.log(import.meta.env.VITE_APP_ID)
            const iconCode = allImageIcons[data.weather[0].icon] || clear;

            setWheatherData({
                cityName: city,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: data.main.temp,
                iconCod: iconCode
            })
            console.log(data)
        }
        catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    return (
        <div className='footer'>

            <hr ></hr>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>FUNSHOP</p>
            </div>
            <ul className='footer-links'>
                <li onClick={() => {

                    navigator('/AboutCompany')
                }}>Company</li>
                <li>Products</li>
                <li onClick={() => {
                    Officesnavigator('/offices')
                }}>Offices</li>
                <li>About</li>
                <li onClick={() => {
                    help('/help')
                }}>Help</li>

            </ul>
            <div className="weather" >
                <h1 style={{ marginTop: '10px' }}>Wheather</h1>
                <div className="weather-search-bar">
                    <input type="text" ref={cityName} placeholder='Enter City' />
                    <img src={search_icon} alt="" onClick={() => {
                        const cityNameelement = cityName.current.value;
                        SearchCityWheather(cityNameelement)
                        cityName.current.value = ""
                    }} />
                </div>

                <img src={WheatherData.iconCod || clear} alt="" className='weather-icon' />
                <p className='temratureWeather'>{WheatherData.temperature || '30'}&deg;c</p>
                <p className='tempLocation'>{WheatherData.cityName || 'Bengaluru'}</p>

                <div className="weatherdata">
                    <div className="weathercol">
                        <img src={humidity} alt="" />
                        <div className="humiditydata">
                            <p>{WheatherData.humidity || '208'}</p>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div className="weathercol">
                        <img src={wind} alt="" />
                        <div className="humiditydata">
                            <p>{WheatherData.windSpeed || 3.4}km/hr</p>
                            <span>wind Speed</span>
                        </div>
                    </div>

                </div>


            </div>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>

            <div className="footer-copyright">
                <hr></hr>
                <p>Copyright @2023 - All Rights Reserved</p>
            </div>

        </div>

    )
}

export default Footer