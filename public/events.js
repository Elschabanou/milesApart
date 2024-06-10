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


document.addEventListener("DOMContentLoaded", (event) => {
    // Function to apply styles based on the selected option
    function applyStyles(option) {
        switch (option) {
            case 'option1':
                console.log("option1 selected", option);
                document.body.style.backgroundColor = "#F4FFCA";
                if (document.getElementById("seconds")) {
                    document.getElementById("seconds").style.color = '#F4FFCA';
                }
                document.getElementById("description").style.color = '#F4FFCA';
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

                console.log("option1 selected", option);
                document.body.style.backgroundColor = '#CAEFFF';
                if (document.getElementById("seconds")) {
                    document.getElementById("seconds").style.color = '#CAEFFF';
                }
                document.querySelectorAll('.date').forEach(function (element) {
                    element.style.backgroundColor = '#CAEFFF';
                });
                document.getElementById("description").style.color = '#CAEFFF';


                document.querySelectorAll(".title").forEach(function (element) {
                    element.style.color = "#CAEFFF";
                });
                document.querySelectorAll('h2').forEach(function (element) {
                    element.style.color = '#4292e8';
                });
                break;
            case 'option3':
                console.log("option1 selected", option);
                document.querySelectorAll('.date').forEach(function (element) {
                    element.style.backgroundColor = '#E4CAFF';
                });
                document.querySelectorAll('.event-card').forEach(function (element) {
                    element.style.border = '1px solid #E4CAFF';
                });

                document.getElementById("description").style.color = "#E4CAFF";

                document.querySelectorAll(".title").forEach(function (element) {
                    element.style.color = "#E4CAFF";
                });
                document.querySelectorAll('h2').forEach(function (element) {
                    element.style.color = '#ce54e3';
                });
                document.body.style.backgroundColor = '#E4CAFF';
                if (document.getElementById("seconds")) {
                    document.getElementById("seconds").style.color = '#E4CAFF';
                }
                if (document.querySelector(".date")) {
                    document.querySelector(".date").style.backgroundColor = "#E4CAFF";
                }
                break;
            case 'option4':
                console.log("option1 selected", option);
                document.querySelectorAll('.date').forEach(function (element) {
                    element.style.backgroundColor = '#FFC46C';
                });
                document.querySelectorAll('.event-card').forEach(function (element) {
                    element.style.border = '1px solid #FFC46C';
                });
                document.querySelectorAll('.title').forEach(function (element) {
                    element.style.color = "#FFC46C";
                });

                document.getElementById("description").style.color = "#FFC46C";
                document.querySelectorAll('h2').forEach(function (element) {
                    element.style.color = '#ff9300';
                });
                document.body.style.backgroundColor = '#FFC46C';
                if (document.getElementById("seconds")) {
                    document.getElementById("seconds").style.color = '#FFC46C';
                }
                if (document.querySelector(".date")) {
                    document.querySelector(".date").style.backgroundColor = "#FFC46C";
                }
                break;
            default:
                document.body.style.backgroundColor = '#FFC46C';
                if (document.getElementById("seconds")) {
                    document.getElementById("seconds").style.color = '#FFC46C';
                }
        }
    }

    // Retrieve the selected option from localStorage and apply styles
    const savedOption = localStorage.getItem('selectedStyle');
    if (savedOption) {
        console.log("savedOption", savedOption);
        applyStyles(savedOption);
    }
});
