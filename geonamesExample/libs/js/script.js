

$('#weatherBtn').click(function(e){
    e.preventDefault();
    //alert("it works")
    
    $.ajax({
      url:"geonamesExample/libs/php/weatherInfo.php",
      type:"GET",
      dataType: 'json',
      data:JSON.stringify({  }),

      success:function(result){
        console.log(result);

        if(result.status.name=="ok") {
          $("#result").html(result.data.temperature),
          $("#result").html(result.data.clouds),
          $("#result").html(result.data.lng),
          $("#result").html(result.data.lat)
        }
        
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
      type:"GET",
      dataType:"json",
      data: JSON.stringify({  }),

      success:function(result){
        console.log(result);
          $('#result').append(result.data.sunrise);
          $('#result').append(result.data.sunset);
          $('#result').append(result.data.countryName);
        
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
      data:JSON.stringify({  }),
      success:function(result){
        console.log(result);

        if(result.status.name =="ok") {
          $('#result').html(result.data.lng);
          $('#result').html(result.data.astergdem);
          $('#result').html(result.data.lat);
        }
        
      },
      error: function(jqXHR, textStatus, errorThrown) {
        // your error code
        console.log(textStatus)
    }
    })
  })








