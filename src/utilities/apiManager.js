const weatherKey = '43df7ed317e5646ac516d5c73acdd3fc';
// Newport location data
const lat = 51.5842;
const lon = 2.9977;

const ApiManager = (() => {
  const newportQuery = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=metric`;

  const getCurrentTemp = async () => {
    const response = await fetch(newportQuery);
    const weatherData = await response.json();

    if (!response.ok) return false;

    return Math.round(weatherData.list[0].main.temp);
  };

  return { getCurrentTemp };
})();

export default ApiManager;
