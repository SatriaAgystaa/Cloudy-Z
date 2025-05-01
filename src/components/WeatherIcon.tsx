'use client';

import {
  FiSun,
  FiCloud,
  FiCloudRain,
  FiCloudSnow,
  FiCloudLightning,
} from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function WeatherIcon({
  code,
  size = 24,
}: {
  code: string;
  size?: number;
}) {
  const animations = {
    sun: {
      animate: {
        rotate: [0, 360],
        scale: [1, 1.1, 1],
      },
      transition: {
        rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
        scale: { duration: 3, repeat: Infinity, repeatType: 'reverse' as const },
      },
    },
    cloud: {
      animate: {
        x: [0, -5, 5, 0],
        y: [0, -2, 2, 0],
      },
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    rain: {
      animate: {
        y: [0, 3, 0],
        opacity: [1, 0.8, 1],
      },
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
    snow: {
      animate: {
        rotate: [0, 360],
        y: [0, 2, 0],
      },
      transition: {
        rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
        y: { duration: 3, repeat: Infinity },
      },
    },
    lightning: {
      animate: {
        scale: [1, 1.3, 1],
        opacity: [1, 0.8, 1],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'mirror' as const,
      },
    },
  };

  const iconMap: Record<string, React.ReactElement> = {
    '01d': (
      <motion.div
        {...animations.sun}
        className="text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]"
      >
        <FiSun size={size} />
      </motion.div>
    ),
    '01n': (
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          scale: { duration: 5, repeat: Infinity },
        }}
        className="text-amber-200 drop-shadow-[0_0_6px_rgba(253,230,138,0.3)]"
      >
        <FiSun size={size} />
      </motion.div>
    ),
    '02d': (
      <motion.div
        {...animations.cloud}
        className="text-gray-300 mix-blend-overlay"
      >
        <FiCloud size={size} />
      </motion.div>
    ),
    '02n': (
      <motion.div
        {...animations.cloud}
        className="text-gray-400 mix-blend-overlay"
      >
        <FiCloud size={size} />
      </motion.div>
    ),
    '03d': (
      <motion.div {...animations.cloud} className="text-gray-400">
        <FiCloud size={size} />
      </motion.div>
    ),
    '03n': (
      <motion.div {...animations.cloud} className="text-gray-500">
        <FiCloud size={size} />
      </motion.div>
    ),
    '04d': (
      <motion.div
        animate={{
          x: [0, -3, 3, 0],
          y: [0, -1, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="text-gray-600"
      >
        <FiCloud size={size} />
      </motion.div>
    ),
    '04n': (
      <motion.div
        animate={{
          x: [0, -3, 3, 0],
          y: [0, -1, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="text-gray-700"
      >
        <FiCloud size={size} />
      </motion.div>
    ),
    '09d': (
      <motion.div
        {...animations.rain}
        className="text-blue-400/90 drop-shadow-[0_0_4px_rgba(96,165,250,0.3)]"
      >
        <FiCloudRain size={size} />
      </motion.div>
    ),
    '09n': (
      <motion.div
        {...animations.rain}
        className="text-blue-500/80 drop-shadow-[0_0_4px_rgba(59,130,246,0.3)]"
      >
        <FiCloudRain size={size} />
      </motion.div>
    ),
    '10d': (
      <motion.div
        animate={{
          y: [0, 4, 0],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
        }}
        className="text-blue-600 drop-shadow-[0_0_6px_rgba(37,99,235,0.2)]"
      >
        <FiCloudRain size={size} />
      </motion.div>
    ),
    '10n': (
      <motion.div
        animate={{
          y: [0, 4, 0],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
        }}
        className="text-blue-700 drop-shadow-[0_0_6px_rgba(29,78,216,0.2)]"
      >
        <FiCloudRain size={size} />
      </motion.div>
    ),
    '11d': (
      <motion.div
        {...animations.lightning}
        className="text-purple-700 drop-shadow-[0_0_8px_rgba(126,34,206,0.3)]"
      >
        <FiCloudLightning size={size} />
      </motion.div>
    ),
    '11n': (
      <motion.div
        {...animations.lightning}
        className="text-purple-800 drop-shadow-[0_0_10px_rgba(109,40,217,0.4)]"
      >
        <FiCloudLightning size={size} />
      </motion.div>
    ),
    '13d': (
      <motion.div
        {...animations.snow}
        className="text-blue-100 drop-shadow-[0_0_6px_rgba(191,219,254,0.5)]"
      >
        <FiCloudSnow size={size} />
      </motion.div>
    ),
    '13n': (
      <motion.div
        {...animations.snow}
        className="text-blue-200 drop-shadow-[0_0_6px_rgba(147,197,253,0.4)]"
      >
        <FiCloudSnow size={size} />
      </motion.div>
    ),
    '50d': (
      <motion.div
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="text-gray-400/80 mix-blend-overlay"
      >
        <FiCloud size={size} />
      </motion.div>
    ),
    '50n': (
      <motion.div
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="text-gray-500/80 mix-blend-overlay"
      >
        <FiCloud size={size} />
      </motion.div>
    ),
  };

  return (
    iconMap[code] || (
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          scale: { duration: 3, repeat: Infinity, repeatType: 'reverse' as const },
        }}
        className="text-gray-400"
      >
        <FiSun size={size} />
      </motion.div>
    )
  );
}
