//grabbing input
document.getElementById("enter").addEventListener("click", getLoc());


//getting location
function getLoc(){
    location = document.getElementById("loc");
    partURL = "https://weatherdbi.herokuapp.com/data/weather/";
    urlLink = partURL + location;
    
    const base = urlLink;
    console.log(base);
}
