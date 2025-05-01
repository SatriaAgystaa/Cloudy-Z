'use client';
import { WeatherData } from '@/types/weather';
import { FiSunrise, FiSunset, FiDroplet, FiWind, FiEye } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function WeatherHighlights({ weather }: { weather: WeatherData }) {
  const formatTime = (ts: number) =>
    new Date(ts * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const highlights = [
    { icon: <FiSunrise size={28} className="text-amber-400" />, title: "Sunrise", value: formatTime(weather.sys.sunrise) },
    { icon: <FiSunset size={28} className="text-indigo-400" />, title: "Sunset", value: formatTime(weather.sys.sunset) },
    { icon: <FiDroplet size={28} className="text-blue-500" />, title: "Humidity", value: `${weather.main.humidity}%` },
    { icon: <FiWind size={28} className="text-blue-500" />, title: "Wind", value: `${weather.wind.speed} m/s` },
    { icon: <FiEye size={28} className="text-blue-500" />, title: "Visibility", value: `${(weather.visibility / 1000).toFixed(1)} km` },
    { icon: <div className="w-7 h-7 bg-blue-200 text-blue-700 font-bold rounded-full flex items-center justify-center">P</div>, title: "Pressure", value: `${weather.main.pressure} hPa` },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="bg-white p-6 rounded-2xl shadow-lg"
    >
      <h2 className="text-gray-800 font-bold text-xl mb-6">Today&rsquo;s Highlights</h2>
      <div className="grid grid-cols-2 gap-4">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <HighlightCard 
              icon={item.icon} 
              title={item.title} 
              value={item.value} 
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function HighlightCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="bg-gradient-to-br from-gray-100 via-blue-100 to-teal-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
      <div className="flex items-center gap-2 text-lg text-gray-700 mb-2">
        {icon}
        <span className="font-bold">{title}</span>
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
    </div>
  );
}