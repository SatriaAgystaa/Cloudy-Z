'use client';
import { useState } from 'react';
import { FiSearch, FiLoader } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function SearchForm({ onSearch, loading }: { onSearch: (city: string) => void, loading: boolean }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="mb-8 max-w-md mx-auto w-full"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative">
        <motion.input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:outline-none focus:border-teal-300 shadow-sm text-lg text-gray-800 placeholder-gray-400 font-medium transition-all duration-300"
          whileFocus={{
            scale: 1.02,
            boxShadow: "0 4px 20px rgba(16, 185, 129, 0.15)",
            borderColor: "#B4BED9"
          }}
          transition={{ type: "spring", stiffness: 400 }}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-teal-400 text-white p-3 rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
          aria-label="Search"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {loading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <FiLoader className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <FiSearch className="h-6 w-6" />
            </motion.div>
          )}
        </motion.button>
      </div>
    </motion.form>
  );
}