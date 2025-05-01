'use client';
import { ForecastData } from '@/types/weather';
import WeatherIcon from '@/components/WeatherIcon';
import { FiCalendar } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ForecastList({ forecast }: { forecast: ForecastData }) {
    const dailyForecasts = forecast.list.filter((_, i) => i % 8 === 0).slice(0, 5);
  
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-white p-6 rounded-2xl shadow-lg relative overflow-hidden"
      >
        {/* Gradient lighting effect */}
        
        <div className="flex items-center gap-2 mb-6 text-gray-700">
          <div className="bg-gradient-to-r from-blue-400 to-teal-400 p-2 rounded-full">
            <FiCalendar className="text-white text-xl" />
          </div>
          <h2 className="font-bold text-xl text-gray-800">5-Day Forecast</h2>
        </div>
        <div className="space-y-4">
          {dailyForecasts.map((item, index) => (
            <motion.div
              key={item.dt}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-400 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity" />
              <div className="relative flex justify-between items-center p-3 hover:bg-blue-50/50 rounded-lg transition-colors z-10">
                <span className="text-gray-800 font-bold text-lg">
                  {new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
                </span>
                <div className="flex items-center gap-2">
                  <div className="px-2">
                    <WeatherIcon code={item.weather[0].icon} size={28} />
                  </div>
                  <span className="text-lg capitalize text-gray-700">
                    {item.weather[0].description}
                  </span>
                </div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 font-bold text-lg">
                  {Math.round(item.main.temp_max)}° / {Math.round(item.main.temp_min)}°
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }