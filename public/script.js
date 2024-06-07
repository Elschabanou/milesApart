var countDownDate = new Date("Jul 05, 2024 12:30:00").getTime();

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

// JavaScript to change background color based on selected radio button
const radioButtons = document.querySelectorAll('input[type="radio"]');
const body = document.getElementById('body');

radioButtons.forEach(button => {
    button.addEventListener('change', function () {
        if (this.checked) {
            switch (this.value) {
                case 'option1':
                    document.body.style.backgroundColor = "#F4FFCA";
                    document.getElementById("seconds").style.color = '#F4FFCA';
                    //date, border of event-card, slider, a in event-card
                    document.querySelectorAll('.event-card').forEach(function (element) {
                        element.style.border = '1px solid #F4FFCA';
                    });
                    document.querySelectorAll('.date').forEach(function (element) {
                        element.style.backgroundColor = '#F4FFCA';
                    });
                    document.querySelectorAll(".title").forEach(function (element) {
                        element.style.color = "#F4FFCA";
                    });
                    document.querySelectorAll('h2').forEach(function (element) {
                        element.style.color = '#B2CF5A';
                    });

                    break;
                case 'option2':
                    document.body.style.backgroundColor = '#CAEFFF';
                    document.getElementById("seconds").style.color = '#CAEFFF';
                    document.querySelectorAll('.date').forEach(function (element) {
                        element.style.backgroundColor = '#CAEFFF';
                    });
                    document.querySelectorAll('.event-card').forEach(function (element) {
                        element.style.border = '1px solid #CAEFFF';
                    });
                    document.querySelectorAll(".title").forEach(function (element) {
                        element.style.color = "#CAEFFF";
                    });
                    document.querySelectorAll('h2').forEach(function (element) {
                        element.style.color = '#4292e8';
                    });
                    break;

                case 'option3':
                    document.querySelectorAll('.date').forEach(function (element) {
                        element.style.backgroundColor = '#E4CAFF';
                    });
                    document.querySelectorAll('.event-card').forEach(function (element) {
                        element.style.border = '1px solid #E4CAFF';
                    });
                    document.querySelectorAll(".title").forEach(function (element) {
                        element.style.color = "#E4CAFF";
                    });
                    document.querySelectorAll('h2').forEach(function (element) {
                        element.style.color = '#ce54e3';
                    });
                    document.body.style.backgroundColor = '#E4CAFF';
                    document.getElementById("seconds").style.color = '#E4CAFF';
                    document.querySelector(".date").style.backgroundColor = "#E4CAFF";
                    break;

                case 'option4':
                    document.querySelectorAll('.date').forEach(function (element) {
                        element.style.backgroundColor = '#FFC46C';
                    });
                    document.querySelectorAll('.event-card').forEach(function (element) {
                        element.style.border = '1px solid #FFC46C';
                    });
                    document.querySelectorAll('.title').forEach(function (element) {
                        element.style.color = "#FFC46C";
                    });
                    document.querySelectorAll('h2').forEach(function (element) {
                        element.style.color = '#ffe19b';
                    });
                    document.body.style.backgroundColor = '#FFC46C';
                    document.getElementById("seconds").style.color = '#FFC46C';
                    document.querySelector(".date").style.backgroundColor = "#FFC46C";
                    break;
                default:

                    document.body.style.backgroundColor = '#FFC46C';
                    document.getElementById("seconds").style.color = '#FFC46C';

            }
        }
    });
});


// Fetch and display JSON events
async function fetchAndDisplayEvents() {
    try {
        const response = await fetch("/.netlify/functions/eventData");
        const jsonData = await response.json();
        displayEvents(jsonData);
        displayEventDetails(jsonData);
        countDownDate(jsonDatat);

    } catch (error) {
        console.error('Error fetching event data:', error);
    }
}

// Function to display events
function displayEvents(events) {
    var eventsList = document.getElementById('eventsList');
    eventsList.innerHTML = ''; // Clear existing events

    // Loop through the events array and create HTML elements for each event
    events.forEach(function (event) {
        var eventElement = document.createElement('div');
        eventElement.classList.add('event-card');

        var eventName = document.createElement('div');
        eventName.classList.add("title");
        eventName.textContent = event._id; // Using _id as the title

        var eventDateTime = document.createElement('div');
        eventDateTime.classList.add("date");
        var dateTime = new Date(event.dateTime);
        eventDateTime.textContent = dateTime.toDateString();

        // Add event link to the event name
        var eventLink = document.createElement('a');
        eventLink.href = 'events.html?title=' + encodeURIComponent(event._id);
        eventLink.appendChild(eventName);

        eventElement.appendChild(eventLink);
        eventElement.appendChild(eventDateTime);

        eventsList.appendChild(eventElement);
    });
}



// login.html
// Function to display event details
function displayEventDetails(event) {

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


// Call the function to fetch and display events
fetchAndDisplayEvents();


