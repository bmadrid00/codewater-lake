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
  const weatherIconUrl = "https://openweathermap.org/img/wn/";

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
    return dailyForecast.map((forecast, index) => {
      const { icon } = forecast.weather[0];
      const iconUrl = `${weatherIconUrl}${icon}@2x.png`;
      const tempInFahrenheit = Math.round(
        ((forecast.main.temp - 273.15) * 9) / 5 + 32
      );
      return (
        <div key={index}>
          <div>
            {Math.round(tempInFahrenheit)}°F
          </div>
          <img
            src={iconUrl}
            alt="weather icon"
            style={{ width: "4em", height: "4em" }}
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
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="8" lg="10" xl="">
            <MDBCard className="mb-2" style={{ borderRadius: "25px" }}>
              <MDBCardBody className="p-3">
                <MDBCardTitle className="text-center"> 5 DAY FORECAST</MDBCardTitle>
                <div className="d-flex justify-content-around text-center">
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
