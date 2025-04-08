import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import RecentSearches from './components/RecentSearches';
import useWeather from './hooks/useWeather';

const App = () => {
  const { data, loading, error, fetchWeather } = useWeather();
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = (city) => {
    if (!city) return;
    fetchWeather(city);

    setRecentSearches((prev) => {
      const updated = [city, ...prev.filter((c) => c.toLowerCase() !== city.toLowerCase())];
      return updated.slice(0, 5);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-white shadow-lg rounded-2xl p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-800">Weather Dashboard</h1>

        <SearchBar onSearch={handleSearch} />

        {loading && <p className="text-center text-gray-600">Loading...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        {data && !error && <WeatherCard data={data} />}

        {recentSearches.length > 0 && (
          <RecentSearches searches={recentSearches} onSearchClick={handleSearch} />
        )}
      </div>
    </div>
  );
};

export default App;