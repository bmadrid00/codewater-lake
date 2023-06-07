import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCardTitle,
} from "mdb-react-ui-kit";

const Weather = () => {
  const [apiData, setApiData] = useState();
  const API_KEY = "7a1c3fca54d378c6d010e3a3632b7f43";
  const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/forecast`;
  const DEFAULT_CITY = "Kalispell";
  const weatherIconUrl = "http://openweathermap.org/img/wn/";

const weatherByDay = () => {
  if (!apiData) {
    return [];
  }
  const dailyData = {};
  for (const forecast of apiData.list) {
    const date = forecast.dt_txt.split(" ")[0];
    if (!dailyData[date]) {
      dailyData[date] = forecast;
    }
  }
  const dailyForecasts = Object.values(dailyData);
  return dailyForecasts.slice(0, 5);
};

const renderForecast = () => {
  const dailyForecast = weatherByDay();
  console.log(dailyForecast);
  return dailyForecast.map((forecast, index) => {
  const { icon } = forecast.weather[0];
  const iconUrl = `${weatherIconUrl}${icon}@2x.png`;
  const tempInFahrenheit = Math.round(
    ((forecast.main.temp - 273.15) * 9) / 5 + 32
  );
      return (
        <div key={index} className="flex-column">
          <div>
            {Math.round(tempInFahrenheit)}°F
          </div>
          <img
            src={iconUrl}
            alt="weather icon"
            style={{ width: "4em", height: "4em" }}
            className="mb-3"
            />
          <div>
              {new Date(forecast.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
          </div>
        </div>
      );
    });
  };

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(
      `${API_ENDPOINT}?q=${DEFAULT_CITY}&appid=${API_KEY}`
    );
    const data = await response.json();
    if (response.ok) {
      setApiData(data);
    } 
  };

  fetchData();
}, [API_KEY, API_ENDPOINT]);

  return (
    <>
      <MDBContainer>
        <MDBRow
          className="justify-content-center align-items-center h-100"
          style={{ color: "#282828" }}>
          <MDBCol md="10" lg="5" xl="5">
            <MDBCard className="mb-6" style={{ borderRadius: "25px" }}>
            </MDBCard>
            <MDBCard className="mb-4" style={{ borderRadius: "25px" }}>
              <MDBCardBody className="p-4">
                <MDBCardTitle> Current 5 day forecast
                </MDBCardTitle>
                <div className="d-flex justify-content-around text-center pb-3 pt-2">
                  {renderForecast()}
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  </>
  );
};

export default Weather;



