

$('#weatherBtn').click(function(e){
  e.preventDefault();
  //alert("it works")
  
  $.ajax({
    url:"geonamesExample/libs/php/weatherInfo.php",
    type:"POST",
    dataType: 'json',
    data: {
      stationName:$('#stationName').val(),
    },

    success:function(result){
      console.log(result);
      $('#result').html('');

      $('#result').append('Temperature: '+result.data.weatherObservations['0'].temperature + '<br/>');
      $('#result').append('Humidity: '+result.data.weatherObservations['0'].humidity + '<br/>');
      $('#result').append('Station Name: '+result.data.weatherObservations['0'].stationName + '<br/>');
      $('#result').append('Longitude: '+result.data.weatherObservations['0'].lng + '<br/>');
      $('#result').append('Latitude: '+result.data.weatherObservations['0'].lat + '<br/>');
      
      
    },
    error: function(jqXHR, textStatus, errorThrown) {
      // your error code
      console.log(textStatus)
    }
  })
});







$("#timezoneBtn").click(function(e){
  e.preventDefault();
  //alert("it works")
  $.ajax({
    url:"geonamesExample/libs/php/timezoneInfo.php",
    type:"POST",
    dataType:"json",
    data: JSON.stringify({ }),

    success:function(result){
      console.log(result);
        $('#result').html('');


        $('#result').append('Sunrise:'+result.data.sunrise + '<br/>');
        $('#result').append('Sunset:'+result.data.sunset + '<br/>');
        $('#result').append('Timezone:'+result.data.timezoneId + '<br/>');
        $('#result').append('Country:'+result.data.countryName + '<br/>');
      
    },
    error: function(jqXHR, textStatus, errorThrown) {
      // your error code
      console.log(textStatus)
    }
  })
});

$("#elevationBtn").click(function(e){
  e.preventDefault();
  $.ajax({
    url:"geonamesExample/libs/php/elevationInfo.php",
    type:"GET",
    dataType:"json",
    data:{
      lng:$('#lng').val(),
      lat:$('#lat').val()
    },
    success:function(result){
      console.log(result);
        $('#result').html('');
      
        $('#result').append('Longitude: '+result.data.lng + '<br/>');
        $('#result').append('Elevation: '+result.data.astergdem + '<br/>');
        $('#result').append('Latitude: '+result.data.lat + '<br/>');
      
      
    },
    error: function(jqXHR, textStatus, errorThrown) {
      // your error code
      console.log(textStatus)
  }
  })
})









