function contactsBlock() {

    ymaps.ready(init);
    let myMap;
    let el = document.getElementById('map').dataset;

    function init () {
        myMap = new ymaps.Map("map", {
            center: [el.lat, el.lon],
            zoom: el.zoom
        });

        let myPlacemark = new ymaps.Placemark([el.latmark, el.lonmark], {}, {
            iconLayout: 'default#image',
            iconImageHref: '/img/map-mark.svg',
            iconImageSize: [30, 30],
            iconImageOffset: [-13, 0],
            hintContent: '',
            balloonContent: ''
        });

        myMap.geoObjects.add(myPlacemark);

        myMap.balloon.open([el.latmark, el.lonmark], el.balloon, {
            closeButton: false
        });

        myMap.controls
            .remove('Button')
            .remove('fullscreenControl')
            .remove('typeSelector')
            .remove('geolocationControl')
            .remove('searchControl')
            .remove('trafficControl')
            .remove('rulerControl')
            .remove('zoomControl');

        myMap.behaviors.disable([
            'scrollZoom',
            'multiTouch',
            'drag'
        ]);
    }

}