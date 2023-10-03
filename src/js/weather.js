

const lat = 44.837789;
const lon = -0.57918;
const key = '654fe30faf595ab977787808c42965c6';

fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+key)
.then(response => response.json())
.then(data => {
    console.log(data);
    let name = data.name;
    let temp = data.main.temp - 273.15;
    let weather = data.weather[0].main;
    let weatherDescription = data.weather[0].description;
    let windSpeed = data.wind.speed;
    let humidity = data.main.humidity;
    let logo = data.weather[0].icon;
    let timezoneOffset = data.timezone;

     // Get the current UTC time in milliseconds, adjust for the timezone offset, and create a new Date object
     let localTime = new Date((Date.now() + timezoneOffset * 1000));

     // Format the time as HH:MM
     let formattedTime = localTime.toISOString().substr(11, 5);

    let weatherDiv = `
    <section class="vh-100" style="background-color: #4B515D;">
  <div class="container py-5 h-100">

    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-8 col-lg-6 col-xl-4">

        <div class="card" style="color: #4B515D; border-radius: 35px;">
          <div class="card-body p-4">

            <div class="d-flex">
              <h6 class="flex-grow-1">${name}</h6>
              <h6>${formattedTime}</h6>
            </div>

            <div class="d-flex flex-column text-center mt-5 mb-4">
              <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> ${Math.floor(temp)} </h6>
              <span class="small" style="color: #868B94">${weatherDescription}</span>
            </div>

            <div class="d-flex align-items-center">
              <div class="flex-grow-1" style="font-size: 1rem;">
                <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${windSpeed}km
                  </span></div>
                <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${humidity}% </span>
                </div>
                <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${timezoneOffset/3600}H  </span>
                </div>
              </div>
              <div>
                <img src="https://openweathermap.org/img/wn/${logo}@2x.png"
                  width="100px">
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</section>`
      
    document.getElementById('weather').innerHTML = weatherDiv;
});