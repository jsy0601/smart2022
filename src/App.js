import Container from '@mui/material/Container';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import UserCardList from './components/UserCardList';
import { makeUserDatas } from './Utils';

const userDatas = makeUserDatas(5000);

function App() {
  const [useDarkMode, setUseDarkMode] = useState(true);
  const [weatherData, setWeathreData] = useState(null);
  const [apiError, setApiError] = useState(null);
  
  const handleChange = (event) => {
    setUseDarkMode(event.target.checked);
  }

  useEffect(() => {
    const callApi = async() =>{
      try{
        const result = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=37.394&lon=126.9568&appid=5bb29823a904b3493af4b2f66218b43c&lang=kr&units=metric&appid=5bb29823a904b3493af4b2f66218b43c")
        setWeathreData(result.data)
      }catch(err){
        setApiError(err)
      }
    }
    callApi();
    console.log("component did mount");
  },[]);

  useEffect(() => {
    console.log(`theme 변경됨 -> ${useDarkMode}`)
  },[useDarkMode]);


  return (
    <ThemeProvider theme={createTheme({
        palette: {
          mode: useDarkMode ? 'dark' : 'light',
        },
      })
    }>
      <Box sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 1,
      }}>
        <WeatherCard weatherData={weatherData} apiError={apiError}/>
      </Box>
      <Box sx={{
        height: '100%',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 1,
      }}>
        <Switch
          checked={useDarkMode}
          onChange={handleChange}
          color="secondary"
          inputProps={{ 'aria-label': 'controlled' }}
          />
        <Container maxWidth="lg" sx={{p:1}}>
          <UserCardList userDatas={userDatas}/>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;