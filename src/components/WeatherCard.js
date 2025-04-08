import React from 'react';
import { motion } from 'framer-motion';

const WeatherCard = ({ data }) => {
  const { name, main, weather, wind, sys } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  const formatTime = (unixTime) => {
    return new Date(unixTime * 1000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-100 dark:bg-blue-900 p-6 rounded-xl shadow-md flex flex-col items-center text-center space-y-2"
    >
      <h2 className="text-2xl font-semibold">{name}</h2>
      <img src={iconUrl} alt={weather[0].description} className="w-20 h-20" />
      <p className="text-lg font-medium">{weather[0].main}</p>
      <p>Temperature: <strong>{main.temp}°C</strong></p>
      <p>Humidity: <strong>{main.humidity}%</strong></p>
      <p>Wind Speed: <strong>{wind.speed} km/h</strong></p>
      <p>Sunrise: <strong>{formatTime(sys.sunrise)}</strong></p>
      <p>Sunset: <strong>{formatTime(sys.sunset)}</strong></p>
    </motion.div>
  );
};

export default WeatherCard;