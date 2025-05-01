'use client';
import { useState, useEffect } from 'react';
import SearchForm from '@/components/SearchForm';
import WeatherCard from '@/components/WeatherCard';
import ForecastList from '@/components/ForecastList';
import WeatherHighlights from '@/components/WeatherHighlights';
import { getWeatherData, getForecastData } from '@/lib/weatherApi';
import { WeatherData, ForecastData } from '@/types/weather';
import { FiMapPin, FiCloudRain } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    handleSearch('Bogor'); // Default location
  }, []);

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError('');
    try {
      const [weatherData, forecastData] = await Promise.all([
        getWeatherData(city),
        getForecastData(city),
      ]);
      if (weatherData && forecastData) {
        setWeather(weatherData);
        setForecast(forecastData);
      } else {
        setError('Location not found.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch weather data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-teal-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800">
          Cloudy'z
          </h1>
          <p className="text-lg text-gray-600 mt-2">Check out the weather in a fun way!</p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <SearchForm onSearch={handleSearch} loading={loading} />
        </motion.div>

        {error && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded mt-4"
          >
            {error}
          </motion.div>
        )}

        {weather && !loading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-8 mt-6"
          >
            <WeatherCard data={weather} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {forecast && <ForecastList forecast={forecast} />}
              <WeatherHighlights weather={weather} />
            </div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-4 flex items-center justify-center gap-2 text-sm text-gray-700 font-medium shadow-md"
            >
              <FiMapPin className="text-blue-500" />
              <span>{weather.name}, {weather.sys.country}</span>
            </motion.div>
          </motion.div>
        )}

        {loading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center mt-12"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="text-4xl mb-4"
            >
              <FiCloudRain className="text-blue-500" />
            </motion.div>
            <p className="text-gray-600 font-medium">Memuat data cuaca...</p>
          </motion.div>
        )}
      </div>
    </main>
  );
}