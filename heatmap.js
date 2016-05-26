// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">
var map, heatmap;

function initMap() {
    map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 5,
        center: {
            lat: 28.636523,
            lng: 77.224962
        },
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map
    });
}

function toggleHeatmap() {
    heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
    var gradient = [
        'rgba(0, 255, 255, 0)',
        'rgba(0, 255, 255, 1)',
        'rgba(0, 191, 255, 1)',
        'rgba(0, 127, 255, 1)',
        'rgba(0, 63, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 223, 1)',
        'rgba(0, 0, 191, 1)',
        'rgba(0, 0, 159, 1)',
        'rgba(0, 0, 127, 1)',
        'rgba(63, 0, 91, 1)',
        'rgba(127, 0, 63, 1)',
        'rgba(191, 0, 31, 1)',
        'rgba(255, 0, 0, 1)'
    ]
    heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
    heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function changeOpacity() {
    heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

// Heatmap data: 500 Points
function getPoints() {
    return [
        new google.maps.LatLng(28.8404, 72.4152),
        new google.maps.LatLng(24.3572, 78.1783),
        new google.maps.LatLng(25.44, 72.995),
        new google.maps.LatLng(22.6727, 74.9287),
        new google.maps.LatLng(20.2521, 70.5606),
        new google.maps.LatLng(22.6959, 76.95),
        new google.maps.LatLng(23.5168, 77.1045),
        new google.maps.LatLng(28.2713, 76.5848),
        new google.maps.LatLng(29.5721, 73.9003),
        new google.maps.LatLng(28.368, 73.8069),
        new google.maps.LatLng(22.2839, 77.7454),
        new google.maps.LatLng(25.7548, 73.9028),
        new google.maps.LatLng(21.904, 75.9766),
        new google.maps.LatLng(27.6141, 71.4404),
        new google.maps.LatLng(22.4254, 76.0898),
        new google.maps.LatLng(28.505, 72.685),
        new google.maps.LatLng(20.8632, 71.2658),
        new google.maps.LatLng(24.2608, 72.8622),
        new google.maps.LatLng(27.7909, 76.3032),
        new google.maps.LatLng(26.8638, 76.9335),
        new google.maps.LatLng(23.8834, 78.043),
        new google.maps.LatLng(25.1475, 79.5597),
        new google.maps.LatLng(26.1445, 77.4002),
        new google.maps.LatLng(21.3005, 73.4188),
        new google.maps.LatLng(27.2257, 75.7166),
        new google.maps.LatLng(23.462, 79.6685),
        new google.maps.LatLng(23.5713, 79.5096),
        new google.maps.LatLng(25.4862, 79.2168),
        new google.maps.LatLng(20.6572, 75.4753),
        new google.maps.LatLng(21.5651, 73.1003),
        new google.maps.LatLng(25.7853, 73.0826),
        new google.maps.LatLng(24.3484, 70.0701),
        new google.maps.LatLng(22.9323, 76.6486),
        new google.maps.LatLng(22.9518, 78.6091),
        new google.maps.LatLng(25.5426, 70.7232),
        new google.maps.LatLng(28.7662, 79.8156),
        new google.maps.LatLng(29.3753, 79.426),
        new google.maps.LatLng(26.8262, 73.9137),
        new google.maps.LatLng(27.3325, 75.5198),
        new google.maps.LatLng(21.2363, 78.1267),
        new google.maps.LatLng(27.7952, 74.5582),
        new google.maps.LatLng(24.0678, 74.6983),
        new google.maps.LatLng(23.9151, 71.3666),
        new google.maps.LatLng(26.8419, 79.554),
        new google.maps.LatLng(22.6544, 74.5723),
        new google.maps.LatLng(27.6549, 78.407),
        new google.maps.LatLng(28.4771, 78.4397),
        new google.maps.LatLng(25.0883, 72.0032),
        new google.maps.LatLng(20.6123, 71.4094),
        new google.maps.LatLng(22.1326, 78.0401),
        new google.maps.LatLng(27.8556, 76.1549),
        new google.maps.LatLng(25.5809, 70.8988),
        new google.maps.LatLng(24.8125, 77.2309),
        new google.maps.LatLng(22.7507, 72.4071),
        new google.maps.LatLng(20.5338, 72.1449),
        new google.maps.LatLng(26.7032, 73.987),
        new google.maps.LatLng(28.6853, 78.3291),
        new google.maps.LatLng(29.6956, 70.771),
        new google.maps.LatLng(20.325, 72.6004),
        new google.maps.LatLng(27.1727, 76.5375),
        new google.maps.LatLng(24.9445, 72.9794),
        new google.maps.LatLng(21.4191, 74.8275),
        new google.maps.LatLng(26.8307, 73.4216),
        new google.maps.LatLng(24.8309, 76.5074),
        new google.maps.LatLng(24.5474, 77.4431),
        new google.maps.LatLng(23.598, 76.9636),
        new google.maps.LatLng(27.8623, 72.4031),
        new google.maps.LatLng(29.634, 79.1789),
        new google.maps.LatLng(21.5861, 72.6748),
        new google.maps.LatLng(24.8198, 72.3846),
        new google.maps.LatLng(26.3716, 72.1199),
        new google.maps.LatLng(20.4489, 71.5229),
        new google.maps.LatLng(22.2939, 75.057),
        new google.maps.LatLng(27.6573, 70.1446),
        new google.maps.LatLng(26.6821, 72.6189),
        new google.maps.LatLng(25.5983, 74.83),
        new google.maps.LatLng(29.6575, 71.6266),
        new google.maps.LatLng(25.0482, 77.0174),
        new google.maps.LatLng(23.5248, 76.4883),
        new google.maps.LatLng(23.9314, 79.8791),
        new google.maps.LatLng(26.8427, 78.0722),
        new google.maps.LatLng(20.4752, 77.5294),
        new google.maps.LatLng(26.7083, 74.705),
        new google.maps.LatLng(27.3798, 70.1092),
        new google.maps.LatLng(22.4938, 78.2943),
        new google.maps.LatLng(20.4142, 72.1996),
        new google.maps.LatLng(23.7225, 78.8655),
        new google.maps.LatLng(23.9224, 70.8632),
        new google.maps.LatLng(21.0078, 76.0164),
        new google.maps.LatLng(28.6354, 71.5798),
        new google.maps.LatLng(26.4098, 77.6899),
        new google.maps.LatLng(29.3165, 74.2337),
        new google.maps.LatLng(21.251, 76.0673),
        new google.maps.LatLng(22.5556, 74.3646),
        new google.maps.LatLng(24.2437, 74.7758),
        new google.maps.LatLng(22.848, 76.4869),
        new google.maps.LatLng(24.0163, 71.0864),
        new google.maps.LatLng(25.7914, 73.3232),
        new google.maps.LatLng(23.4324, 70.7246),
        new google.maps.LatLng(29.0189, 73.1712)
    ];
}