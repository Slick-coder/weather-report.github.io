import React, { useEffect, useState } from 'react'
import './style.css'

const Weathercard = ({tempInfo}) => {
    const [weatherState, setWeaherState] = useState();
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;

    useEffect(() => {
      if (weathermood) {
        switch (weathermood) {
          case "Clouds":
            setWeaherState("wi-cloudy");
            break;
          case "Haze":
            setWeaherState("wi-fog");
            break;
          case "Clear":
            setWeaherState("wi-day-sunny");
            break;
          case "Rain":
            setWeaherState("wi-rain");
            break;
          default:
            setWeaherState("wi-day-sunny")
            break;
        }
      }
    }, [weathermood])

    let sec = sunset;
    let date = new Date(sec*1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
        <article className='widget'>
          <div className='weatherIcon'>
            <i className={`wi ${weatherState}`}></i>
          </div>
          <div className='weatherInfo'>
            <div className='temperature'>
              <span>{temp}&deg;</span>
            </div>
            <div className='description'>
              <div className='weatherCondition'>{weathermood}</div>
              <div className='place'>{name}, {country}</div>
            </div>
          </div>

          <div className='date'> {new Date().toLocaleString()} </div>

          <div className='extra-temp'>
            <div className='temp-info-minmax'>
              <div className='two-sided-section'>
                <p>
                  <i className={"wi wi-sunset"}></i>
                </p>
                <p className='extra-info-leftside'>
                  {timeStr} PM<br/>
                  SUNSET              
                </p>
              </div>

              <div className='two-sided-section'>
                <p>
                  <i className={"wi wi-humidity"}></i>
                </p>
                <p className='extra-info-leftside'>
                  {humidity} <br/>
                  HUMIDITY                 
                </p>
              </div>

              
            </div>
            <div className='temp-info-minmax'>
            <div className='two-sided-section'>
                <p>
                  <i className={"wi wi-rain"}></i>
                </p>
                <p className='extra-info-leftside'>
                  {pressure}<br/>
                  PRESSURE                  
                </p>
              </div>

              <div className='two-sided-section'>
                <p>
                  <i className={"wi wi-strong-wind"}></i>
                </p>
                <p className='extra-info-leftside'>
                  {speed}<br/>
                  WIND SPEED                 
                </p>
              </div>
            </div>
          </div>
        </article>
    </>
  );
}

export default Weathercard