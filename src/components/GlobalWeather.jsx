import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
const cities = [
  {
    city: "Londan",
    lat: 51.5074,
    long: -0.1278,
  },
  {
    city: "New York",
    lat: 40.7128,
    long: -74.006,
  },
  {
    city: "Mexico",
    lat: 19.4326,
    long: -99.1332,
  },
  {
    city: "Istanbul",
    lat: 41.0082,
    long: 28.9784,
  },
  {
    city: "Berlin",
    lat: 52.52,
    long: 13.405,
  },
  {
    city: "Paris",
    lat: 48.8566,
    long: 2.3522,
  },
  {
    city: "Rio de Janeiro",
    lat: -22.9068,
    long: -43.1729,
  },
  {
    city: "Lisbon",
    lat: 38.7223,
    long: -9.1393,
  },
  {
    city: "Sydney",
    lat: -33.8688,
    long: 151.2093,
  },
  {
    city: "Stockholm",
    lat: 59.3293,
    long: 18.0686,
  },
];

function GlobalWeather() {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const WeatherData = await Promise.all(
        cities.map(async (city) => {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${
              city.lat
            }&lon=${city.long}&units=metric&appid=${
              import.meta.env.VITE_WEATHER_API
            }`
          );
          console.log(response);
          return {
            city: city.city,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            main: response.data.weather[0].main,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
          };
        })
      );
      setWeather(WeatherData);
    };
    fetchData();
  }, []);
  return (
    <div>
      {weather.map((Cityweather) => (
        <div
          style={{
            display: "felx !important",
            flexDirection: "row !important",
          }}
          className=" flex flex-auto	"
          key={Cityweather.city}
        >
          <div
            style={{ boxShadow: "2px 2px 2px 1px rgba(1, 4, 3, 0.6)" }}
            className="  relative bg-[#acdfe7] w-1/6  h-80 p-2 mt-12"
          >
            <div className=" absolute inset-x-0 bottom-0">
              <svg
                className="absolute bottom-0"
                id="wave"
                style={{ transform: "rotate(0deg)", transition: "0.3s" }}
                viewBox="0 0 1440 330"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="sw-gradient-0"
                    x1="0"
                    x2="0"
                    y1="1"
                    y2="0"
                  >
                    <stop
                      stopColor="rgba(62, 187.819, 300, 1)"
                      offset="0%"
                    ></stop>
                    <stop
                      stopColor="rgba(11, 255, 238.269, 1)"
                      offset="100%"
                    ></stop>
                  </linearGradient>
                </defs>
                <path
                  style={{ transform: "translate(0, 0px)", opacity: 1 }}
                  fill="url(#sw-gradient-0)"
                  d="M0,99L48,93.5C96,88,192,77,288,77C384,77,480,88,576,126.5C672,165,768,231,864,258.5C960,286,1056,275,1152,236.5C1248,198,1344,132,1440,137.5C1536,143,1632,220,1728,247.5C1824,275,1920,253,2016,236.5C2112,220,2208,209,2304,170.5C2400,132,2496,66,2592,33C2688,0,2784,0,2880,33C2976,66,3072,132,3168,132C3264,132,3360,66,3456,44C3552,22,3648,44,3744,60.5C3840,77,3936,88,4032,110C4128,132,4224,165,4320,159.5C4416,154,4512,110,4608,121C4704,132,4800,198,4896,192.5C4992,187,5088,110,5184,82.5C5280,55,5376,77,5472,110C5568,143,5664,187,5760,220C5856,253,5952,275,6048,247.5C6144,220,6240,143,6336,104.5C6432,66,6528,66,6624,60.5C6720,55,6816,44,6864,38.5L6912,33L6912,330L6864,330C6816,330,6720,330,6624,330C6528,330,6432,330,6336,330C6240,330,6144,330,6048,330C5952,330,5856,330,5760,330C5664,330,5568,330,5472,330C5376,330,5280,330,5184,330C5088,330,4992,330,4896,330C4800,330,4704,330,4608,330C4512,330,4416,330,4320,330C4224,330,4128,330,4032,330C3936,330,3840,330,3744,330C3648,330,3552,330,3456,330C3360,330,3264,330,3168,330C3072,330,2976,330,2880,330C2784,330,2688,330,2592,330C2496,330,2400,330,2304,330C2208,330,2112,330,2016,330C1920,330,1824,330,1728,330C1632,330,1536,330,1440,330C1344,330,1248,330,1152,330C1056,330,960,330,864,330C768,330,672,330,576,330C480,330,384,330,288,330C192,330,96,330,48,330L0,330Z"
                />
              </svg>
              <svg
                id="wave"
                style={{ transform: "rotate(0deg)", transition: "0.3s" }}
                viewBox="0 0 1440 210"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="sw-gradient-0"
                    x1="0"
                    x2="0"
                    y1="1"
                    y2="0"
                  >
                    <stop
                      stopColor="rgba(242.651, 245.127, 146.213, 1)"
                      offset="0%"
                    ></stop>
                    <stop
                      stopColor="rgba(86.492, 223.445, 214.167, 1)"
                      offset="100%"
                    ></stop>
                  </linearGradient>
                </defs>
                <path
                  style={{
                    transform: "translate(0, 0px)",
                    opacity: "1",
                  }}
                  fill="url(#sw-gradient-0)"
                  d="M0,63L14.1,59.5C28.2,56,56,49,85,49C112.9,49,141,56,169,80.5C197.6,105,226,147,254,164.5C282.4,182,311,175,339,150.5C367.1,126,395,84,424,87.5C451.8,91,480,140,508,157.5C536.5,175,565,161,593,150.5C621.2,140,649,133,678,108.5C705.9,84,734,42,762,21C790.6,0,819,0,847,21C875.3,42,904,84,932,84C960,84,988,42,1016,28C1044.7,14,1073,28,1101,38.5C1129.4,49,1158,56,1186,70C1214.1,84,1242,105,1271,101.5C1298.8,98,1327,70,1355,77C1383.5,84,1412,126,1440,122.5C1468.2,119,1496,70,1525,52.5C1552.9,35,1581,49,1609,70C1637.6,91,1666,119,1694,140C1722.4,161,1751,175,1779,157.5C1807.1,140,1835,91,1864,66.5C1891.8,42,1920,42,1948,38.5C1976.5,35,2005,28,2019,24.5L2032.9,21L2032.9,210L2018.8,210C2004.7,210,1976,210,1948,210C1920,210,1892,210,1864,210C1835.3,210,1807,210,1779,210C1750.6,210,1722,210,1694,210C1665.9,210,1638,210,1609,210C1581.2,210,1553,210,1525,210C1496.5,210,1468,210,1440,210C1411.8,210,1384,210,1355,210C1327.1,210,1299,210,1271,210C1242.4,210,1214,210,1186,210C1157.6,210,1129,210,1101,210C1072.9,210,1045,210,1016,210C988.2,210,960,210,932,210C903.5,210,875,210,847,210C818.8,210,791,210,762,210C734.1,210,706,210,678,210C649.4,210,621,210,593,210C564.7,210,536,210,508,210C480,210,452,210,424,210C395.3,210,367,210,339,210C310.6,210,282,210,254,210C225.9,210,198,210,169,210C141.2,210,113,210,85,210C56.5,210,28,210,14,210L0,210Z"
                ></path>
              </svg>
            </div>
            <div className="text-center w-max capitalize text-[#7d8d8d] m-auto">
              <img src={Cityweather.icon} alt="" />

              <h3 className="font-bold font-serif	">
                It's a {Cityweather.main} day
              </h3>
              <p className="opacity-55 my-3	">{Cityweather.city}</p>
              <p className="text-2xl my-4">
                {Cityweather.temperature} C <sup>0</sup>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GlobalWeather;
