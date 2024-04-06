chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action == "openTab") {
      chrome.tabs.create({url: message.url});
    }
  });
  

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.contentScriptQuery === "fetchWeatherAndMarineData") {
      const { lat, lon, todayDate } = request;
      const weatherApiUrl = `https://api.weatherapi.com/v1/current.json?key=a72468e1e3234dc3b0543634242403&q=${lat},${lon}&aqi=no`;
      const marineApiUrl = `https://api.weatherapi.com/v1/marine.json?key=a72468e1e3234dc3b0543634242403&q=${lat},${lon}`;
      const forecastApiUrl = `https://api.weatherapi.com/v1/forecast.json?key=a72468e1e3234dc3b0543634242403&q=${lat},${lon}&dt=${todayDate}&days=1&aqi=no&alerts=no`;

      Promise.all([
        fetch(weatherApiUrl).then(response => response.json()),
        fetch(marineApiUrl).then(response => response.json()),
        fetch(forecastApiUrl).then(response => response.json())
      ]).then(values => {
        sendResponse({
          weatherData: values[0],
          marineData: values[1],
          forecastData: values[2]
        });
      }).catch(error => {
        console.error('Error fetching data:', error);
        sendResponse({error: 'Failed to fetch data.'});
      });

      return true;  // indicates we will send a response asynchronously
    }
  }
);


// a72468e1e3234dc3b0543634242403