import { useEffect,useState } from 'react';
import { CssBaseline,Box,Container,InputLabel,MenuItem,FormControl,Select } from '@mui/material';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import { Switch } from '@mui/material';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import UserCardList from './components/UserCardList';
import { cityLatLon } from './dataset/WeatherData';
import { makeUserDatas } from './Utils';
import { Grid } from '@mui/material';

const userDatas = makeUserDatas(128);

function App() {
  const [useDarkMode, setUseDarkMode] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [selectedCityData,setSelectedCityData] = useState({ name: "안양",lat: 37.3943,lon: 126.9568 }); 

  const handleChange = (event) => {
    setUseDarkMode( event.target.checked );
  };

  const selectHandleChange = (event) => {
    const cityName = event.target.value;
    const findCityLatLon = cityLatLon.find((element) => {
      return element.name === cityName;
    });
    setSelectedCityData( findCityLatLon );
  };

  useEffect(() => {
    console.log("component did mount");
  },[]);

  useEffect(() => {
    const callApi = async() => {
      try{
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${selectedCityData.lat}&lon=${selectedCityData.lon}&lang=kr&units=metric&appid=b1cd9e3d5006fb41508c9ae443a66edf`);
        setWeatherData( result.data );
      }catch(err){
        setApiError(err);
      }
    }
    callApi();
  },[selectedCityData]); 

  useEffect(() => {
    console.log(`theme 변경됨 -> ${useDarkMode}`);
  },[useDarkMode]);

  return (
    <ThemeProvider theme={createTheme({
        palette: {
          mode: useDarkMode? 'dark' : 'light',
        },
      })
    }>
      <Box sx={{
        minHeight: '100%',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 1
      }}>
        <Container maxWidth="lg">
          <FormControl>
            <InputLabel id="selected-city-label">Age</InputLabel>
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
          <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12}}>
            <WeatherCard weatherData={weatherData} apiError={apiError}/>
            <WeatherCard weatherData={weatherData} apiError={apiError}/>
            <WeatherCard weatherData={weatherData} apiError={apiError}/>
          </Grid>
        <CssBaseline/>
        <Switch
          checked={useDarkMode}
          onChange={handleChange}
          color="warning"
          inputProps={{'aria-label':'controlled'}}
        />
          <UserCardList userDatas={userDatas}/>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
