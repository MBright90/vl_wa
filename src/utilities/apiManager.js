const weatherKey = '43df7ed317e5646ac516d5c73acdd3fc';

const ApiManager = (() => {
  const newportQuery = `https://api.openweathermap.org/geo/1.0/direct?q=Newport&limit=1&appid=${weatherKey}`;

  const getCurrentTemp = async () => {
    const response = await fetch(newportQuery);

    if (!response.ok) return false;

    return response;
  };

  return { getCurrentTemp };
})();

export default ApiManager;
