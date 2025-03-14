toolbar.fixedDistance = 100

function onMouseMove(event) {
  var path = new Path.Circle({
    center: event.middlePoint,
    radius: Math.random() * 50,
  })

  path.fillColor = {
    hue: event.count * 3,
    saturation: 1,
    brightness: 1
  };
}