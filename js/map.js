var swh = new naver.maps.LatLngBounds(
    new naver.maps.LatLng(37.26808090663331, 127.01686336327174),
    new naver.maps.LatLng(37.26487263504282, 127.02043641309393)
);

var mapOptions = {
    center : new naver.maps.LatLng(37.26736, 127.01812),
    Zoom : 19,
    minZoom : 19,
    maxZoom : 19,
    maxBounds : swh,
};
var map = new naver.maps.Map("map", mapOptions);

var football_markerOptions = {
    position: new naver.maps.LatLng(37.266751667226856, 127.0182328563324),
    map: map,
    icon: {
        content: `<img src="${footballImg}" style = "width:7cm; opacity = 0.1;"></img>`,
        size: new naver.maps.Size(1, 1),
        anchor: new naver.maps.Point(0, 0)
    }
};
var football = new naver.maps.Marker(football_markerOptions);

var basket_one_markerOptions = {
    position: new naver.maps.LatLng(37.266972433703806, 127.01815962842738 ),
    map: map,
    icon: {
        content: `<img src="${basketball_one_img}" style = "width:5cm; opacity = 0.1;"></img>`,
        size: new naver.maps.Size(1, 1),
        anchor: new naver.maps.Point(0, 0)
    }
};
var basket_one = new naver.maps.Marker(basket_one_markerOptions);

var basket_two_markerOptions = {
    position: new naver.maps.LatLng(37.26729905827339, 127.01817943648251 ),
    map: map,
    icon: {
        content: `<img src="${basketball_two_img}" style = "width:5cm; opacity = 0.1;"></img>`,
        size: new naver.maps.Size(1, 1),
        anchor: new naver.maps.Point(0, 0)
    }
};
var basket_one = new naver.maps.Marker(basket_two_markerOptions);