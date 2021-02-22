function initMap() {
	L.mapquest.key = 'NqxnYmgkvvGYc72gdxbCxtQqjp1UvucT';

// 'map' refers to a <div> element with the ID map
	L.mapquest.map('map', {
	center: [32.87920508226757, -117.23614349207305],
	layers: L.mapquest.tileLayer('map'),
	zoom: 12
	});
}