const apiKey = 'mhMQzh9kPNKLJ1FWCk3pmrULGOAd1ExI'; // Replace with your actual API key
let lat;
let lng;

let submitButton = document.getElementById('submit-button')

submitButton.addEventListener('click', function() {
    lat = document.getElementById('longInput').value; // Latitude of the location
    lng = document.getElementById('latInput').value;; // Longitude of the location
    const waterUrl = `https://api.meersens.com/environment/public/water/current?lat=${lat}&lng=${lng}&health_recommendations=true`;


    fetch(waterUrl, {
    method: 'GET',
    headers: {
        'apikey': apiKey
    }
    })
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Handle the response data here
        let waterPh = document.getElementById('ph')
        let waterState = document.getElementById('ph-area-state')
        let guidelines = document.getElementById('guidelines')
        
        waterPh.innerText = `${data.pollutants.ph.value}`
        waterState.innerText = `${data.pollutants.ph.index.qualification}`
        guidelines.innerText = `${data.health_recommendations.all}`



    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

});