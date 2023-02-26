import React from "react";

export default function Weather(props) {
function convertToFahrenheit () {
    let Fahrenheit = props.temperature * ( 9 / 5) * 32;
    let roundedFahrenheit = Math.round(Fahrenheit);
    return roundedFahrenheit
}

  return (
    <div className="Weather">
      The temperature in {props.city} is {props.temperature}°C and {''} 
      {convertToFahrenheit()}°F
    </div>
  );
}



