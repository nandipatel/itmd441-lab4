function init(){
    document.addEventListener('DOMContentLoaded', init);
    document.getElementById("enter").addEventListener("click", getLoc);
}
//grabbing input
document.getElementById("enter").addEventListener("click", getLoc);
//getting location
function getLoc(){
    console.log("working");
    location = document.getElementById("loc");
    partURL = "https://weatherdbi.herokuapp.com/data/weather/";
    urlLink = partURL + location;

    const base = urlLink;
    console.log(base);
}
