function updateTime(){
    //Los Angeles
    let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format ("MMMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesElement.format(
      "h:mm:ss [<small>]A[</small>]"
    );
}

// PAris 
 let ParsElement = document.querySelector("#paris");
 if (ParisElement) {
    let ParisDateElement = ParisElement.querySelector(".date");
    let ParisTimeElement = ParsElementElement.querySelector(".time");
    let ParisTime = moment().tz("Europe/Paris");

losAngelesDateElement.innerHTML = losAngelesTime.format ("MMMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesElement.format(
    
     "h:mm:ss [<small>]A[</small>]"
    );
      }
}
function updateCity(event){
    let cityTimeZone=event.target.value;
    if (cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
    
    }
    let cityName = cityTimeZone.replace ("_"," ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector ("#cities");
    citiesElement.innerHTML = `
    <div class = "city">
    <div>
    <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);