// Fetch and display JSON events
async function fetchAndDisplayEvents() {
    try {
        const response = await fetch("/.netlify/functions/eventData");
        const jsonData = await response.json();

        // Get the _id from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const eventId = urlParams.get('title');

        // Find the event with the matching _id
        const event = jsonData.find(e => e._id === eventId);

        if (event) {
            displayEventDetails(event);
            countDownDate(event);
        } else {
            console.error('Event not found');
        }

    } catch (error) {
        console.error('Error fetching event data:', error);
    }
}

// Function to display event details
function displayEventDetails(event) {
    console.log(event);

    var headerElement = document.querySelector('.header-title');
    headerElement.textContent = event._id;

    var eventDescription = document.getElementById('description');
    eventDescription.textContent = event.description;
}

function countDownDate(event) {
    var countDownDate = new Date(event.dateTime).getTime();

    // Update the countdown every 1 second
    var x = setInterval(function () {

        // Get the current date and time
        var now = new Date().getTime();

        // Calculate the distance between now and the countdown date
        var distance = countDownDate - now;

        // Calculate days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in the elements with the corresponding IDs
        document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}

fetchAndDisplayEvents();
