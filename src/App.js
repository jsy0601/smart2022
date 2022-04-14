import { useEffect,useState } from 'react';
import { CssBaseline,Box,Container } from '@mui/material';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import { Switch } from '@mui/material';
import WeatherCard from './components/WeatherCard';
import UserCardList from './components/UserCardList';
import { makeUserDatas } from './Utils';
import { Grid } from '@mui/material';

const userDatas = makeUserDatas(128);

function App() {
  const [useDarkMode, setUseDarkMode] = useState(true);

  const handleChange = (event) => {
    setUseDarkMode( event.target.checked );
  };

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
          <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12}}>
            {
              [1,2,3,4,5,6,7,8,9].map((no) => {
                return <WeatherCard id={no} />
              })
            }
          </Grid>
        <CssBaseline/>
        <Switch
          checked={useDarkMode}
          onChange={handleChange}
          color="secondary"
          inputProps={{'aria-label':'controlled'}}
        />
          <UserCardList userDatas={userDatas}/>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
