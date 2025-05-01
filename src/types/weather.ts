export interface WeatherData {
    name: string;
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
      pressure: number;
      temp_min?: number;
      temp_max?: number;
    };
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
    wind: {
      speed: number;
    };
    clouds: {
      all: number;
    };
    sys: {
      country: string;
      sunrise: number;
      sunset: number;
    };
    visibility: number;
  }
  
  export interface ForecastData {
    list: {
      dt: number;
      dt_txt: string;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
      };
      weather: {
        main: string;
        description: string;
        icon: string;
        id: number;
      }[];
    }[];
  }
  
  export interface Coordinates {
    lat: number;
    lon: number;
  }
  