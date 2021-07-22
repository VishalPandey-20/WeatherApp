import React, { useState, useEffect } from "react";
import "./style.css";

const WeatherApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("delhi");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=250b92b2a0a5aa00d166148d3831e91d`;
      const respons = await fetch(url);
      const resJson = await respons.json();
      console.log(resJson.main);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <div className="main">
      <div className="here">
        <input
          className="inputdata"
          type="search"
          placeholder="Search here "
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        {!city ? (
          <p>No data found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view">{search}</i>
              </h2>
              <h1 className="temp">{city.temp} C</h1>
              <h3 className="tempmin_max">Min:5.6 C | Max:24.4 C</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
