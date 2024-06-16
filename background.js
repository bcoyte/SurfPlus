chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "openTabs" && message.urls) {
    message.urls.forEach((url) => {
      chrome.tabs.create({
        url: url,
        pinned: true,
        active: false // Ensure the new tabs do not take focus
      }, (tab) => {
        // Set a timeout to close the tab after 5 seconds
        setTimeout(() => {
          chrome.tabs.remove(tab.id);
        }, 10000);
      });
    });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fetchWeatherData") {
      const { lat, lon } = request;
      fetchWeatherData(lat, lon)
          .then((data) => sendResponse({ data }))
          .catch((error) => sendResponse({ error }));
      return true;
  }
});

async function fetchWeatherData(lat, lon) {
  const weatherApiUrl = `https://api.weatherapi.com/v1/current.json?key=a72468e1e3234dc3b0543634242403&q=${lat},${lon}&aqi=no`;
  const marineApiUrl = `https://api.weatherapi.com/v1/marine.json?key=a72468e1e3234dc3b0543634242403&q=${lat},${lon}&days=2`;
  const todayDate = new Date().toISOString().split("T")[0];
  const forecastApiUrl = `https://api.weatherapi.com/v1/forecast.json?key=a72468e1e3234dc3b0543634242403&q=${lat},${lon}&dt=${todayDate}&days=1&aqi=no&alerts=no`;

  try {
      const [weatherResponse, marineResponse, forecastResponse] = await Promise.all([
          fetch(weatherApiUrl),
          fetch(marineApiUrl),
          fetch(forecastApiUrl)
      ]);

      const [weatherData, marineData, forecastData] = await Promise.all([
          weatherResponse.json(),
          marineResponse.json(),
          forecastResponse.json()
      ]);

      if (weatherData && weatherData.current && marineData && forecastData) {
          return { weatherData, marineData, forecastData };
      } else {
          throw new Error("Unexpected API response structure");
      }
  } catch (error) {
      throw error;
  }
}

// Import the necessary modules for the extension
chrome.runtime.onInstalled.addListener(function() {
  // Listener that triggers on the installation of the extension
  chrome.tabs.create({url: "Install.html"}); // Opens 'Install.html' in a new tab
});

chrome.runtime.onStartup.addListener(function() {
  chrome.tabs.create({url: "Install.html"}); // Opens 'Install.html' in a new tab
});

// a72468e1e3234dc3b0543634242403 - Weather API Key

chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setOptions({
    path: 'sidepanel.html',
    enabled: true
  });
});

chrome.action.onClicked.addListener((tab) => {
  chrome.sidePanel.open({ tabId: tab.id });
});

// Listen for a message to get the version number
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getVersion") {
    // Fetch the version number from manifest.json
    const version = chrome.runtime.getManifest().version;
    sendResponse({ version });
  }
});