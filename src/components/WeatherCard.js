import React, { useState, useEffect } from 'react';
import Typography from "@mui/material/Typography";
import { weather_mapping_data, cityLatLon } from "../dataset/WeatherData";
import { Grid } from '@mui/material';
import axios from 'axios';
import { InputLabel,MenuItem,FormControl,Select } from '@mui/material';

function WeatherCard(props) {
    const { id } = props;
    const defaultCityName = localStorage.getItem(id+'_city') || "안양";
    const [weatherData, setWeatherData] = useState(null);
    const [apiError, setApiError] = useState(null);
    const [selectedCityData,setSelectedCityData] = useState(cityLatLon.find(data=> data.name === defaultCityName));
    // const [selectedCityData,setSelectedCityData] = useState({ name: "안양",lat: 37.3943,lon: 126.9568 }); 

    const selectHandleChange = (event) => {
        const cityName = event.target.value;
        const findCityLatLon = cityLatLon.find(data => data.name === cityName);
        setSelectedCityData(findCityLatLon);
        localStorage.setItem(id+'_city', findCityLatLon.name)
    };

    useEffect(() => {
        // 현재 시간 - 로컬스토리지에 저장한 시간 = 로컬스토리지에 저장한 시간으로부터 흘러간 시간이 나옴 ms
        // 흘러간 시간이 10분 미만이면 로컬스토리지에 저장한 날씨 데이터를 활용
        // 흘러간 시간이 10분 이상이면 openAPI를 호출
        const cityName = selectedCityData.name;
        const cityGetDate = cityName+'_저장시간'
        if(Date.now() - localStorage.getItem(cityGetDate) / 1000 / 60 > 60){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${selectedCityData.lat}&lon=${selectedCityData.lon}&lang=kr&units=metric&appid=b1cd9e3d5006fb41508c9ae443a66edf`)
            .then(result => {
                setWeatherData(result.data);
                    localStorage.setItem(cityName, JSON.stringify(result.data));
                    localStorage.setItem(cityGetDate, Date.now());
            })  
            .catch(error => {
                setApiError(error);
            })
        }else{
            setWeatherData(JSON.parse(localStorage.getItem(cityName)));
        }
    },[selectedCityData]);

    const makeWeatherInfo = () => {
        const { temp, temp_min, temp_max, feels_like, humidity } = weatherData.main;
        const { main, icon } = weatherData.weather[0];
        const parseWeatherData = weather_mapping_data[main] ? weather_mapping_data[main] : weather_mapping_data["Mist"];

        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        return <Grid item xs={2} sm={4} md={4}>
            <FormControl>
                <InputLabel id="selected-city-label">도시</InputLabel>
                <Select
                labelId="selected-city-label"
                id="selected-city"
                value={selectedCityData.name}
                label="도시"
                onChange={selectHandleChange}
                >
                {cityLatLon.map((city)=> <MenuItem value={city.name}>{city.name}</MenuItem>)}
                </Select>
            </FormControl>
            <Typography>{`현재 날씨: ${parseWeatherData.name}`}</Typography>
            <parseWeatherData.icon sx={{fontSize: 125, color: 'red'}} />
            <img src={iconUrl} alt="현재날씨 아이콘"/>
            <Typography>{`현재온도: ${temp}°C 체감온도: ${feels_like}°C`}</Typography>
            <Typography>{`최저기온: ${temp_min}°C 최고기온: ${temp_max}°C 습도: ${humidity}%`}</Typography>
        </Grid>
    }
    
    return <>
        { apiError ? 
            <Typography>{apiError.message}</Typography>
            :
            weatherData ?
                makeWeatherInfo()
            :
            <Typography>날씨정보 없음</Typography>
        }
    </>
}

export default WeatherCard;