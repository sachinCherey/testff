import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=840de593b7028de6e424162454790fe5&units=metric`
    );
    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <div id='con'>
      <h1>WeatherApp</h1>
      <div>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {weatherData ? (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>
            Weather: {weatherData.weather[0].main} - {weatherData.weather[0].description}
          </p>
        </div>
      ) : (
        <p>Your response should come here...</p>
      )}
    </div>
  );
};

export default WeatherApp;