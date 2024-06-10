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

document.addEventListener("DOMContentLoaded", (event) => {

    // Function to apply styles based on the selected option
    function applyStyles(option) {

        localStorage.setItem('selectedStyle', option);  // Save the selected option to localStorage
        
        switch (option) {
            case 'option1':
                document.body.style.backgroundColor = "#F4FFCA";
                if (document.getElementById("seconds")) {
                    document.getElementById("seconds").style.color = '#F4FFCA';
                }
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
                if (document.getElementById("seconds")) {
                    document.getElementById("seconds").style.color = '#CAEFFF';
                }
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
                if (document.getElementById("seconds")) {
                    document.getElementById("seconds").style.color = '#E4CAFF';
                }
                if (document.querySelector(".date")) {
                    document.querySelector(".date").style.backgroundColor = "#E4CAFF";
                }
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


    // Apply the stored option if available
    const savedOption = localStorage.getItem('selectedOption');
    if (savedOption) {
        const radioButton = document.querySelector(`input[name="customRadio"][value="${savedOption}"]`);
        if (radioButton) {
            radioButton.checked = true;
            applyStyles(savedOption);  // Apply styles after setting the radio button checked
        } else {
            console.error("No radio button found for saved option:", savedOption);
        }
    }

    // Add event listeners to radio buttons
    const radioButtons = document.querySelectorAll('input[name="customRadio"]');
    radioButtons.forEach(button => {
        button.addEventListener('change', function () {
            if (this.checked) {
                const selectedOption = this.value;
                applyStyles(selectedOption);
                localStorage.setItem('selectedOption', selectedOption);


            }
        });
    });
    // Observe changes to the DOM and apply styles to newly added event cards
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                // New nodes have been added
                applyStyles(localStorage.getItem('selectedOption'));
            }
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
});





// Fetch and display JSON events
async function fetchAndDisplayEvents() {
    try {
        const response = await fetch("/.netlify/functions/eventData");
        const jsonData = await response.json();
        displayEvents(jsonData);


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


// Call the function to fetch and display events
fetchAndDisplayEvents();
