
const apiKey = '032004ca8f95408678aaea779051ed9c';
const city = 'london'; 


// Fetch weather data from OpenWeatherMap API
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
.then(response => response.json())
.then(data => {
  // Display the entire weather object in the console
  console.log(data);
  
  // Display the weather information
  const weatherDiv = document.getElementById('weather');
  const tempCelcius = data.main.temp -273.15;
  const roundedTemp = tempCelcius.toFixed(1);

  weatherDiv.innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${roundedTemp} Celcius</p>
    <p>Description: ${data.weather[0].description}</p>
  `;

  if (roundedTemp < 20) {
    weatherDiv.innerHTML += '<p>🥶</p>';
  }

})
.catch(error => {
  console.error('Error fetching weather data:', error);
});

