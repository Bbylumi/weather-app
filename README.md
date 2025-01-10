# Weather App

## Overview
This Weather App is an Angular-based application that fetches real-time weather data from the OpenWeatherMap API. The app allows users to input a city name and retrieve the current weather details, including temperature, weather conditions, and more.

---

## Features
- **Search Weather by City**: Users can enter the name of a city to get live weather updates.
- **Real-Time Data**: Fetches data directly from the OpenWeatherMap API.
- **Responsive Design**: Works seamlessly on devices of all screen sizes.

---

## Technology Stack
- **Frontend**: Angular
- **Backend API**: OpenWeatherMap
- **Styling**: Tailwind CSS 
- **HTTP Client**: Angular's `HttpClient`

---

## Prerequisites
1. Node.js installed (v14 or higher recommended)
2. Angular CLI installed globally
3. An active API key from OpenWeatherMap

---

## Usage
1. Open the app in your browser.
2. Enter the name of a city in the search bar.
3. Press "Search" or hit Enter to fetch the weather data.
4. View weather details such as temperature, weather description, and humidity.

---

## Project Structure
```
weather-app/
|
├── src/
│   ├── app/
│   │   ├── services/
│   │   │   └── weather.service.ts
│   │   ├── models/
│   │   │   └── weather.model.ts
│   │   ├── components/
│   │   │   └── weather/
│   │   │       ├── weather.component.ts
│   │   │       ├── weather.component.html
│   │   │       └── weather.component.css
│   ├── environments/
│   │   └── environment.ts
│   └── main.ts
│
├── angular.json
├── package.json
└── README.md
```

---

## API Details
The app uses the following OpenWeatherMap endpoint:

### Current Weather Data Endpoint
**Base URL**: `https://api.openweathermap.org/data/2.5/weather`

**Parameters**:
- `q`: City name (e.g., `London`)
- `units`: Measurement system (e.g., `metric` for Celsius)
- `appid`: Your API key

**Example**:
```bash
https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=YOUR_API_KEY
```

---

## Known Issues
- Ensure the API key is valid and has not exceeded the free usage limit.
- Slow responses may occur depending on the OpenWeatherMap server.

---

## Future Enhancements
- Add a 7-day weather forecast feature.
- Include geolocation support to automatically fetch weather for the user's current location.
- Improve error handling and user-friendly error messages.

---

## License
This project is licensed under the MIT License. Feel free to modify and distribute.

---

## Contact
For questions or feedback, feel free to reach out:
- Email: odetoyinbopelumi42@gmail.com
- GitHub: [Bbylumi](https://github.com/BbyLumi)

