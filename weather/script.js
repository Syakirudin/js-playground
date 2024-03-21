const cityInMalayia = [
  'Kuala Lumpur', 'Kota Bharu', 'Kuala Terengganu', 'Kuantan', 'Johor Bahru', 'Melaka', 'Seremban', 'Shah Alam', 'Ipoh', 'Alor Setar', 'George Town','Kangar','Kota Kinabalu', 'Kuching'
];

// Get the div element where you want to display the city names
const detailsSectionDiv = document.getElementById('details-section');

// Loop through each city and concatenate them within the div's inner HTML
let cityNamesHTML = '';
cityInMalayia.forEach(cityMy => {
  cityNamesHTML += `<div class="city" data-city="${cityMy}">${cityMy}</div>`;
});

// Set the inner HTML of the div to the concatenated city names
detailsSectionDiv.innerHTML = cityNamesHTML;

const apiKey = '032004ca8f95408678aaea779051ed9c';

fetch('https://api.openweathermap.org/data/2.5/weather?q=Kuala Lumpur&appid=032004ca8f95408678aaea779051ed9c')
    .then(response => response.json())
    .then(data => {
        // Display the entire weather object in the console
        console.log(data);
    });

document.querySelectorAll('.city').forEach(cityDiv => {
    cityDiv.addEventListener('click', function() {
        let city = this.dataset.city; // Retrieve the city name from the data attribute
        let icon;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                // Display the entire weather object in the console
                console.log(data);

                // Display the weather information
                const weatherDiv = document.getElementById('weather');
                const iconDiv = document.getElementById('icon');
                const tempCelcius = data.main.temp - 273.15;
                const roundedTemp = tempCelcius.toFixed(1);

                weatherDiv.innerHTML = `
                    <h2>${data.name}</h2>
                    <p>Temperature: ${roundedTemp} Celsius</p>
                    <p>Description: ${data.weather[0].description}</p>
                    <p>${displayDateTime()}</p>
                `;

                if (roundedTemp >= 30) {
                    icon = '<img src="./src/sun-svgrepo-com.svg" alt="Sun" style="width: 300px; height: 300px;"/>';
                } else if (roundedTemp >= 20) {
                    icon = '<img src="./src/sun-behind-cloud-svgrepo-com.svg" alt="cloudy" style="width: 300px; height: 300px;">';
                } else {
                    icon = '<img src="./src/sun-behind-rain-cloud-svgrepo-com.svg" alt="rain" style="width: 300px; height: 300px;">';
                }
                

                iconDiv.innerHTML = `<div class="icon-img">${icon}</div>`;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    });
});


function displayDateTime() {
    let currentDate = new Date();
    let date = currentDate.toDateString();
    let time = currentDate.toLocaleTimeString();

    return date + "<br>" + time;
}

// Call the function to display date and time
// document.getElementById('displayDateTime').innerHTML = displayDateTime();




