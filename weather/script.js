// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = '032004ca8f95408678aaea779051ed9c';
const city = 'kuching'; // Replace 'New York' with the city you want to get the weather for

// Fetch weather data from OpenWeatherMap API
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
.then(response => response.json())
.then(data => {
  // Display the entire weather object in the console
  console.log(data);
  
  // Display the weather information
//   const weatherDiv = document.getElementById('weather');
//   weatherDiv.innerHTML = `
//     <h2>${data.name}</h2>
//     <p>Temperature: ${data.main.temp} Kelvin</p>
//     <p>Description: ${data.weather[0].description}</p>
//   `;
})
.catch(error => {
  console.error('Error fetching weather data:', error);
});

