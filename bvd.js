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



var night = document.getElementById('night');
var nightGauge = new Gauge(night).setOptions(opts);
nightGauge.maxValue = 100;
nightGauge.animationSpeed = 55;
nightGauge.set(99);

var morning = document.getElementById('morning');
var morningGauge = new Gauge(morning).setOptions(opts);
morningGauge.maxValue = 100;
morningGauge.animationSpeed = 55;
morningGauge.set(99);

var day = document.getElementById('day');
var dayGauge = new Gauge(day).setOptions(opts);
dayGauge.maxValue = 100;
dayGauge.animationSpeed = 55;
dayGauge.set(99);

var evening = document.getElementById('evening');
var eveningGauge = new Gauge(evening).setOptions(opts);
eveningGauge.maxValue = 100;
eveningGauge.animationSpeed = 55;
eveningGauge.set(99);


var datasetContainer = document.getElementById("dataset-place");

$(document).ready(function(){
    var data = {
      resource_id: 'b66f9a97-61ac-43b7-8f02-a982ad46b712', // the resource id
      limit: 5, // get 5 results
    q: 'Friday' // query for 'Friday'
    };
  

    $.ajax({
        url: 'http://urbalurba.no/api/3/action/datastore_search',
      data: data,
      dataType: 'jsonp',
      success: function(successData) {
        console.log('Total results found: ' + successData.result.records.length);
        console.log(successData.result.records);
        renderDataset(successData.result.records);
        updateGauges(successData.result.records)
      }
    });
  
  });


function updateGauges(dataset) {
  console.log('UpdateGauges:');
  for (i = 0; i < dataset.length; i++) {

    switch (dataset[i].QuarterOfDay.toLowerCase()) {
      case "night" :
          // Do work here
          nightGauge.set(dataset[i].NeedlePercent);
          break;
      case "morning" :
          // Do work here
          morningGauge.set(dataset[i].NeedlePercent);
          break;
      case "day" :
          // Do work here
          dayGauge.set(dataset[i].NeedlePercent);
          break;
      case "evening" :
          // Do work here
          eveningGauge.set(dataset[i].NeedlePercent);
          break;
          
      default :
          // Do work here
          nightGauge.set(100);
          break;
    }   
  }
}  


function renderDataset(dataset) {
    var htmlString = "";
    console.log('Received:');
    console.log(dataset);
  for (i = 0; i < dataset.length; i++) {
    htmlString += "<p> WeekDay: " + dataset[i].WeekDay + " QuarterOfDay:" + dataset[i].QuarterOfDay + " NeedlePercent:" + dataset[i].NeedlePercent + " AveragePeriod:" + dataset[i].AveragePeriod +  " </p> ";
  }
  console.log(htmlString);
  datasetContainer.insertAdjacentHTML('beforeend', htmlString);
}


function findDay(dataset) {
// to figure out what day to get
switch (new Date().getDay()) {
  case 0:
      day = "Sunday";
      break;
  case 1:
      day = "Monday";
      break;
  case 2:
      day = "Tuesday";
      break;
  case 3:
      day = "Wednesday";
      break;
  case 4:
      day = "Thursday";
      break;
  case 5:
      day = "Friday";
      break;
  case 6:
      day = "Saturday";
}
}