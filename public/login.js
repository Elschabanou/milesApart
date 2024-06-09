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
