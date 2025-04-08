// src/hooks/useWeather.js
import { useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

const useWeather = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    if (!city) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather',
        {
          params: {
            q: city,
            appid: API_KEY,
            units: 'metric',
          },
        }
      );
      setData(response.data);
    } catch (err) {
      if (err.response?.status === 404) {
        setError('City not found. Please try again.');
      } else {
        setError('Failed to fetch weather data. Please try again later.');
      }
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchWeather };
};

export default useWeather;
