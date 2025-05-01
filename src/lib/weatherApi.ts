import { WeatherData, ForecastData, Coordinates } from '@/types/weather';

const API_KEY = 'c80f82af4e3ad1a0b126ec3da5d3aba0'; // Ganti dengan API key asli

// Mengambil data cuaca saat ini
export async function getWeatherData(city: string): Promise<WeatherData | null> {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!res.ok) throw new Error('Kota tidak ditemukan');
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

// Mengambil prakiraan cuaca 5 hari
export async function getForecastData(city: string): Promise<ForecastData | null> {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!res.ok) throw new Error('Prakiraan cuaca tidak ditemukan');
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

// Mengambil data cuaca berdasarkan koordinat
// Mengambil data cuaca berdasarkan koordinat
export async function getWeatherByCoordinates(city: string): Promise<Coordinates | null> {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      if (!res.ok) throw new Error('Data koordinat tidak ditemukan');
      const data = await res.json();
      return { lat: data.coord.lat, lon: data.coord.lon }; // Kembalikan objek, bukan array
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  
