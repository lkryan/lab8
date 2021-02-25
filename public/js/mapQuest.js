function initMap() {
	L.mapquest.key = '1kgHXWKbj2xlQevBexVCuY5pvn0co7aV';

// 'map' refers to a <div> element with the ID map
var map = L.mapquest.map('map', {
  center: [32.878587858374, -117.23589673114331],
  layers: L.mapquest.tileLayer('map'),
  zoom: 14,
  zoomControl: false
});

L.marker([32.878587858374, -117.23589673114331]).addTo(map);

}