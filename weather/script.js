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
        let emoji;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                // Display the entire weather object in the console
                console.log(data);

                // Display the weather information
                const weatherDiv = document.getElementById('weather');
                const iconDiv = document.getElementById('icon');
                const header = document.getElementById('header-weather');
                const tempCelcius = data.main.temp - 273.15;
                const roundedTemp = tempCelcius.toFixed(1);

                if (roundedTemp >= 30) {
                    icon = '<img src="./src/sun-svgrepo-com.svg" alt="Sun" style="width: 300px; height: 300px;"/>';
                    emoji = '🥵'
                } else if (roundedTemp >= 20) {
                    icon = '<img src="./src/sun-behind-cloud-svgrepo-com.svg" alt="cloudy" style="width: 300px; height: 300px;">';
                    emoji = '😊'
                } else {
                    icon = '<img src="./src/sun-behind-rain-cloud-svgrepo-com.svg" alt="rain" style="width: 300px; height: 300px;">';
                    emoji = '😌'
                }
                

                weatherDiv.innerHTML = `
                    
                    <p>Temperature: ${roundedTemp} C ${emoji} </p>
                    <p>Description: ${data.weather[0].description}</p>
                    <p>${displayDateTime()}</p>
                    
                `;

                header.innerHTML = `<h2>${data.name}</h2>`             

                

                iconDiv.innerHTML = `<div class="icon-img">${icon}</div>`;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    });
});

        document.querySelectorAll('.city').forEach(cityDiv => {
            cityDiv.addEventListener('click', function() {
                const cityName = this.textContent.trim(); // Get the text content of the clicked city

                fetch(`https://waktu-solat-api.herokuapp.com/api/v1/prayer_times.json?zon=${cityName}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        // Display the entire data object in the console
                        console.log(data);
                    
                        const waktuSolatDiv = document.getElementById('waktuSolat');
                        const prayerTimes = data.data[0].waktu_solat;
                    
                        let prayerTimesHTML = '';
                        prayerTimes.forEach(prayer => {
                          prayerTimesHTML += `<div class="prayer-time">${prayer.name}: ${prayer.time}</div>`;
                        });

                        // Set the inner HTML of the element with the prayer times HTML
                        waktuSolatDiv.innerHTML = `<ul>${prayerTimesHTML}</ul>`;
                    })
                    .catch(error => {
                        console.error('Error fetching data:', error);
                    });
            });
        });











function displayDateTime() {
    let currentDate = new Date();
    let date = currentDate.toDateString();
    let time = currentDate.toLocaleTimeString();

    return date + "<br>" + time;
}


document.getElementById('weather').innerHTML = displayDateTime();




