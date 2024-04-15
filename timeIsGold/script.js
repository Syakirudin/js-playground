function updateTime() {
    // Create a new Date object to get the current time
    const currentTime = new Date();

    // Extract hours, minutes, and seconds
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // Add leading zeros if necessary
    const formattedHours = (hours < 10 ? "0" : "") + hours;
    const formattedMinutes = (minutes < 10 ? "0" : "") + minutes;
    const formattedSeconds = (seconds < 10 ? "0" : "") + seconds;

    // Format the time as HH:MM:SS
    const formattedTime = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;

    // Update the content of the paragraph with id "liveTime"
    document.getElementById("liveTime").textContent = formattedTime;
}

// Call updateTime function initially to display the time immediately
updateTime();

// Update time every second
setInterval(updateTime, 1000);
