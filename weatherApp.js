//@ts-check
// let latitute=document.getElementById('latitude').value;
// let longitute=document.getElementById('longitude').value;
// const url=`https://api.open-meteo.com/v1/forecast?latitude=${latitute}&longitude=${longitute}&current_weather=true`;

// fetch(url).then(response=>{
//     return response.json();
// }).then(jsonResult=>{
//     console.log(jsonResult);
// })

function weatherConverter() {
   
    let latitude = document.getElementById('latitude').value;
    let longitude = document.getElementById('longitude').value;

    
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

   
    fetch(url)
        .then(response => response.json())
        .then(jsonResult => {
            
            if (jsonResult && jsonResult.current_weather) {
                const temperature = jsonResult.current_weather.temperature;
                const windspeed = jsonResult.current_weather.windspeed;
                const weatherInfo = `Temperature: ${temperature}°C\nWindspeed: ${windspeed} km/h`;
                alert(weatherInfo);
            } else {
                alert('No weather data available for the provided coordinates.');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred while fetching the weather data. Please try again.');
        });
}

// function searchWeatherByCity(){
//     let city=document.getElementById('city').value;
//     let latitude = document.getElementById('latitude').value;
//     let longitude = document.getElementById('longitude').value;
 
//     const url=`https://geocode.maps.co/search?q=${city}&api_key=661428db18e9f245220327tcqc5b864`;

//    fetch(url).then(response =>response.json())
//    .then(jsonResult=>{
//        latitude=jsonResult[0].lat;
//        longitude=jsonResult[0].lon;
//         const url1 = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
//         fetch(url1).then(response1=>response.json())
//         .then(jsonResult1=>{
//             if(jsonResult1 && jsonResult1.current_weather){
//                 const temperature=jsonResult1.current_weather.temperature;
//                 const windspeed=jsonResult1.current_weather.windspeed;
//                 const weatherInfo=`Temperature: ${temperature}°C\nWindspeed: ${windspeed} km/h`;
//                 alert(weatherInfo);
//             }else{
//                 alert('No weather data available for the provided coordinates.');
//             }
//         }).catch(error=>{
//             console.error('Error fetching weather data:', error);
//             alert('An error occurred while fetching the weather data. Please try again.');
//         })
//    })

// }




function searchWeatherByCity() {
    let city = document.getElementById('city').value;
    let latitude = document.getElementById('latitude').value;
    let longitude = document.getElementById('longitude').value;

    const url = `https://geocode.maps.co/search?q=${city}&api_key=661428db18e9f245220327tc5b864`;

    fetch(url).then(response => response.json())
    .then(jsonResult => {
        latitude = jsonResult[0].lat;
        longitude = jsonResult[0].lon;

        const url1 = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

        fetch(url1).then(response1 => response1.json())
        .then(jsonResult1 => {
            if (jsonResult1 && jsonResult1.current_weather) {
                const temperature = jsonResult1.current_weather.temperature;
                const windspeed = jsonResult1.current_weather.windspeed;
                const weatherInfo = `Temperature: ${temperature}°C\nWindspeed: ${windspeed} km/h`;

                let imageContainer = document.getElementById('imageContainer');
                imageContainer.innerHTML = '';

                let windImage = document.createElement('img');
                if (windspeed < 20) {
                    windImage.src = "./photos/1";
                    windImage.alt = 'Low wind';
                } else if (windspeed >= 20 && windspeed < 40) {
                    windImage.src = './photos/2';
                    windImage.alt = 'Moderate wind';
                } else if (windspeed >= 40) {
                    windImage.src = './photos/3';
                    windImage.alt = 'High wind';
                }

                imageContainer.appendChild(windImage);
                alert(weatherInfo);
            } else {
                alert('No weather data available for the provided coordinates.');
            }
        }).catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred while fetching the weather data. Please try again.');
        });
    }).catch(error => {
        console.error('Error fetching geocode data:', error);
        alert('An error occurred while fetching the city coordinates. Please try again.');
    });
}




window.searchWeatherByCity = searchWeatherByCity;



// window.weatherConverter = weatherConverter;
