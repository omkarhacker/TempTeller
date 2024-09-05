import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const INIT_URL="https://w0.peakpx.com/wallpaper/999/787/HD-wallpaper-cloudy-day-cloudy-weather.jpg";
    const COLD_URL="https://cdn.mos.cms.futurecdn.net/8Zw7hWD5ZaquyftsRbEmof-1200-80.jpg";
    const HOT_URL="https://i.pinimg.com/736x/65/dc/1d/65dc1de0fadad885ae84540cf9f8eb7a.jpg";
    const RAIN_URL="https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg";

    
  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity>80 ? RAIN_URL:info.temp > 15 ? HOT_URL:COLD_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {info.humidity>80 ? <ThunderstormIcon/>:info.temp > 15 ? <WbSunnyIcon/>:<AcUnitIcon/> }
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
            <p>Temperaturn = {info.temp}&deg;C</p>
            <p>Humadity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>The weather can be described as <b>{info.weather}</b> and feels like {info.feels_like}&deg;C</p>

          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
