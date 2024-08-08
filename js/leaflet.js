
//Map

const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//Marker

const LeafIcon = L.Icon.extend({
    options: {
       
        iconSize:     [70, 60], // size of the icon

    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    }
});

const icon1 = new LeafIcon({iconUrl: 'img/marker.png'}),
    icon2 = new LeafIcon({iconUrl: 'img/marker.png'}),
    icon3 = new LeafIcon({iconUrl: 'img/marker.png'});



L.marker([51.5, -0.09], {icon: icon1}).addTo(map).bindPopup("23 Sterry Street<br>Camden <br>London<br> NW1 8XY<br> United Kingdom");
L.marker([51.495, -0.083], {icon: icon2}).addTo(map).bindPopup("12 Lerroy Street<br>Camden <br>London<br> NW1 8XY<br> United Kingdom");
L.marker([51.49, -0.1], {icon: icon3}).addTo(map).bindPopup("3 Crampton Street<br>Camden <br>London<br> NW1 8XY<br> United Kingdom");

//Polygon
const polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);


polygon.bindPopup("coming soon");