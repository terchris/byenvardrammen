var datasetContainer = document.getElementById("dataset-place");

$(document).ready(function(){
    var data = {
      // resource_id: '346d58fc-b7c1-4c38-bf4d-c9d5fb43ce7b', // the resource id
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
        renderDataset(successData.result.records)
      }
    });
  
  });

  


function renderDataset(dataset) {
    var htmlString = "";
    console.log('Received:');
    console.log(dataset);
  for (i = 0; i < dataset.length; i++) {
    htmlString += "<p> AveragePeriod:" + dataset[i].AveragePeriod + " QuarterOfDay:" + dataset[i].QuarterOfDay + " </p> ";
  }
  console.log(htmlString);
  datasetContainer.insertAdjacentHTML('beforeend', htmlString);
}