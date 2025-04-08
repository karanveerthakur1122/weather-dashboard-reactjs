import React from 'react';

const Forecast = ({ data }) => {
  const list = data.list.filter((_, i) => i % 8 === 0);

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {list.map((item) => (
          <div key={item.dt} className="bg-white dark:bg-gray-800 p-3 rounded-lg text-center shadow">
            <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
              className="mx-auto"
            />
            <p>{Math.round(item.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;