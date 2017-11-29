  var opts = {
  lines: 15,
  angle: 0,
  radiusScale: 1,
  lineWidth: 0.44,
  pointer: {
    length: 0.9,
    strokeWidth: 0.035,
    color: '#000000'
  },
  limitMax: 'false',

  staticZones: [{
      strokeStyle: "#F03E3E",
      min: 0,
      max: 50
    }, // Red 
    {
      strokeStyle: "#FFDD00",
      min: 50,
      max: 70
    }, // Yellow
    {
      strokeStyle: "#30B32D",
      min: 70,
      max: 100
    }, // Green
  ],
  staticLabels: {
    font: "10px sans-serif", // Specifies font
    labels: [50, 70, 90], // Print labels at these values
    color: "#000000", // Optional: Label text color
    fractionDigits: 0 // Optional: Numerical precision. 0=round off.
  },


  strokeColor: '#E0E0E0',
  generateGradient: true
};



var target = document.getElementById('night');
var gauge = new Gauge(target).setOptions(opts);
gauge.maxValue = 100;
gauge.animationSpeed = 55;
gauge.set(55);

var target2 = document.getElementById('morning');
var gauge2 = new Gauge(target2).setOptions(opts);
gauge2.maxValue = 100;
gauge2.animationSpeed = 55;
gauge2.set(80);

var target3 = document.getElementById('day');
var gauge3 = new Gauge(target3).setOptions(opts);
gauge3.maxValue = 100;
gauge3.animationSpeed = 55;
gauge3.set(23);

var target4 = document.getElementById('evening');
var gauge4 = new Gauge(target4).setOptions(opts);
gauge4.maxValue = 100;
gauge4.animationSpeed = 55;
gauge4.set(40);





var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://urbalurba.no/api/3/action/datastore_search?resource_id=b66f9a97-61ac-43b7-8f02-a982ad46b712&q=Friday');

  ourRequest.onload = function() {
     console.log(ourRequest.responseText);
    gauge.set(5);
   
    };
    