chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action == "openTab") {
      chrome.tabs.create({url: message.url});
    }
  });
  



  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'fetchWeatherData') {
        const { lat, lon } = request;
        fetchWeatherData(lat, lon)
            .then(data => sendResponse({ data }))
            .catch(error => sendResponse({ error }));
        return true; // Required to use sendResponse asynchronously
    }
 });
 
 async function fetchWeatherData(lat, lon) {
    const weatherApiUrl = `https://api.weatherapi.com/v1/current.json?key=a72468e1e3234dc3b0543634242403&q=${lat},${lon}&aqi=no`;
    const todayDate = new Date().toISOString().split('T')[0];
    const forecastApiUrl = `https://api.weatherapi.com/v1/forecast.json?key=a72468e1e3234dc3b0543634242403&q=${lat},${lon}&dt=${todayDate}&days=1&aqi=no&alerts=no`;
 
    try {
        const weatherResponse = await fetch(weatherApiUrl);
        const weatherData = await weatherResponse.json();
 
        if (weatherData && weatherData.current) {
            const forecastResponse = await fetch(forecastApiUrl);
            const forecastData = await forecastResponse.json();
            return { weatherData, forecastData };
        } else {
            throw new Error('Unexpected API response structure');
        }
    } catch (error) {
        throw error;
    }
 }

// a72468e1e3234dc3b0543634242403 - Weather API Key.
