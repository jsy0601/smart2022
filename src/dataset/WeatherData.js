import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import GrainIcon from '@mui/icons-material/Grain';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AirIcon from '@mui/icons-material/Air';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import BlurOnIcon from '@mui/icons-material/BlurOn';

export const cityLatLon = [
    { name: "서울", lat: 37.5665, lon: 127.0246 },
    { name: "안양", lat: 37.3943, lon: 126.9568 },
    { name: "부산", lat: 35.1666, lon: 129.0666 },
    { name: "대전", lat: 36.2100, lon: 127.2306 },
    { name: "광주", lat: 35.1047, lon: 126.5241 },
    { name: "울산", lat: 35.5936, lon: 129.352 },
    { name: "시흥", lat: 37.3156, lon: 126.804 },
    { name: "파리", lat: 48.8032, lon: 2.3511 }
]

export const weather_mapping_data = {
    Thunderstorm : {
        name: "폭우",
        icon: ThunderstormIcon
    },
    Drizzle: {
        name: "보슬비",
        icon: GrainIcon
    },
    Rain: {
        name: "비",
        icon: UmbrellaIcon
    },
    Snow: {
        name: "눈",
        icon: AcUnitIcon
    },
    Atmosphere: {
        name: "대기",
        icon: AirIcon
    },
    Clear: {
        name: "맑음",
        icon: WbSunnyIcon
    },
    Clouds: {
        name: "구름 많음",
        icon: CloudIcon
    },
    Mist: {
        name: "안개",
        icon: BlurOnIcon
    }
}