
function checkWeather() {
        let city= document.getElementById('city').value;
        if (city == "") {
            alert("Please enter a valid city")
        } else {

        

            const xmlhttp = new XMLHttpRequest();
            xmlhttp.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=b175082b293926e209acd43ea59df4c8');
            xmlhttp.send();
            xmlhttp.onreadystatechange = (event) => {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    document.getElementById('errorDiv').classList.add("d-none");
                    document.getElementById('weatherContent').classList.remove("d-none");

                    const resp  = xmlhttp.responseText;
                    jsonResponse = JSON.parse(resp);
                    
                    weatherImg = `<img src="https://openweathermap.org/img/w/${jsonResponse.weather[0].icon}.png">`
                    temperature = jsonResponse.main.temp
                    humidity = jsonResponse.main.humidity
                    pressure = jsonResponse.main.pressure
                    description = jsonResponse.weather[0].description

                    document.getElementById('weatherIcon').innerHTML = weatherImg;
                    document.getElementById('temperature').innerHTML = temperature;
                    document.getElementById('humidity').innerHTML = humidity;
                    document.getElementById('pressure').innerHTML = pressure;
                    document.getElementById('description').innerHTML = description;
                    
                }else if(xmlhttp.status == 404){
                    document.getElementById('weatherContent').classList.add("d-none");
                    document.getElementById('errorDiv').classList.remove("d-none");

                    document.getElementById('errorDiv').innerHTML = '<div class="alert alert-danger">City Not Found</div>';
                    
                }
        }
    }
}
