$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});

var map;
function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(33.774640, -84.396417),
      zoom:7,
    };
    map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    document.getElementById("googleMap").style.width = window.innerWidth - 250 + "px";
}

var plot;
document.getElementById('plot_button').onclick = function() {
    var sid = document.getElementById("inputGroupSelect04").value;
    plot = $.get('/?type=plot&SID=' + sid, (data, status) => {
        console.log('test ' + sid + data);
        return data;
    });
    var i;
    var path = []
    for (i = 0; i < plot.length; i++) {
        path.push(new google.maps.LatLng(plot["lat"][i], plot["lon"][i]))
    }
    var polyline = new google.maps.Polyline({path:path, strokeColor: "#FF0000", strokeOpacity: 1.0, strokeWeight: 2});
    polyline.setMap(map);
    map.setCenter(new google.maps.LatLng(plot["lat"][0], plot["lon"][0]), 6);

}
