import React from 'react';

const RecentSearches = ({ searches, onSearchClick }) => {
  return (
    <div className="mt-6">
      <h3 className="text-center font-semibold mb-2">Recent Searches</h3>
      <ul className="flex flex-wrap justify-center gap-2">
        {searches.map((city, index) => (
          <li key={index}>
            <button
              onClick={() => onSearchClick(city)}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-100 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {city}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;