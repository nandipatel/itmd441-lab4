function init(){
    document.addEventListener('DOMContentLoaded', init);
    document.getElementById("enter").addEventListener("click", search);
    document.getElementById("geoloc").addEventListener("click", current);
}

//grabbing input
document.getElementById("enter").addEventListener("click", search);
// search button & getting location
function search(){
    location = document.getElementById("loc");
    partURL = "https://weatherdbi.herokuapp.com/data/weather/";
    urlLink = partURL + location;

    const base = urlLink;
    console.log(base);

    document.getElementById("weather").value = urlLink;
}

//grabbing input
document.getElementById("geoloc").addEventListener("click", current);
// current geo button
function current(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
