/////// 1
document.getElementById("reset").style.display = "none";

function giphyFunction() {

    event.preventDefault(); 
    document.getElementById("reset").style.display = "block";
    document.getElementById('emojies').style.display = 'none';    
      $("#divForGif").empty();
      var giphy = $("#silly").val().trim();
      
      console.log(giphy);

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=10"; // limit = 10 to limit the amount of gifs 
      // console.log(queryURL);
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        console.log(queryURL);
        console.log(response);


        var results = response.data;
        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");
          
          var gifImage = $("<img>");
          gifImage.attr({
            "src": results[i].images.fixed_height.url,
            "data-animate": results[i].images.fixed_height.url,
            "data-still": results[i].images.fixed_height_still.url,
            "data-state": "animate",
            "class": "gif"
          });

        

          // gifDiv.append();
          gifDiv.append(gifImage);
          $("#divForGif").prepend(gifDiv);

        } 


      }); // to close response funtion
     
    
  } // to close button function

  $("#silly").on("click", giphyFunction) 


/////////2


  function giphyFunction2() {

    event.preventDefault();
    document.getElementById('emojies').style.display = 'none';
    document.getElementById("reset").style.display = "block";      
    $("#divForGif").empty();
      var giphy = $("#happy").val().trim();
      
      console.log(giphy);

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=10"; // limit = 10 to limit the amount of gifs 
      // console.log(queryURL);
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        console.log(queryURL);
        console.log(response);


        var results = response.data;
        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");
          
          var gifImage = $("<img>");
          gifImage.attr({
            "src": results[i].images.fixed_height.url,
            "data-animate": results[i].images.fixed_height.url,
            "data-still": results[i].images.fixed_height_still.url,
            "data-state": "animate",
            "class": "gif"
          });

          gifDiv.append();
          gifDiv.append(gifImage);
          $("#divForGif").prepend(gifDiv);

        } 


      }); // to close response funtion
     
    
  } // to close button function


  
  
    $("#happy").on("click", giphyFunction2) 

//////3


  function giphyFunction3() {

    event.preventDefault();
    document.getElementById('emojies').style.display = 'none';
    document.getElementById("reset").style.display = "block";      
    $("#divForGif").empty();
      var giphy = $("#laughing").val().trim();
      
      console.log(giphy);

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=10"; // limit = 10 to limit the amount of gifs 
      // console.log(queryURL);
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        console.log(queryURL);
        console.log(response);


        var results = response.data;
        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");
          
          var gifImage = $("<img>");
          gifImage.attr({
            "src": results[i].images.fixed_height.url,
            "data-animate": results[i].images.fixed_height.url,
            "data-still": results[i].images.fixed_height_still.url,
            "data-state": "animate",
            "class": "gif"
          });

          gifDiv.append();
          gifDiv.append(gifImage);
          $("#divForGif").prepend(gifDiv);

        } 


      }); // to close response funtion
     
    
  } // to close button function


  $("#laughing").on("click", giphyFunction3) 


  ////4 


 function giphyFunction4() {

  event.preventDefault();     
  $("#divForGif").empty();
  document.getElementById('emojies').style.display = 'none';
  document.getElementById("reset").style.display = "block"; 
    var giphy = $("#cool").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=10"; // limit = 10 to limit the amount of gifs 
    // console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL);
      console.log(response);


      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        
        var gifImage = $("<img>");
        gifImage.attr({
          "src": results[i].images.fixed_height.url,
          "data-animate": results[i].images.fixed_height.url,
          "data-still": results[i].images.fixed_height_still.url,
          "data-state": "animate",
          "class": "gif"
        });

        gifDiv.append();
        gifDiv.append(gifImage);
        $("#divForGif").prepend(gifDiv);

      } 


    }); // to close response funtion
   
  
} // to close button function

$("#cool").on("click", giphyFunction4) 
  
//// 5 


 function giphyFunction5() {

    event.preventDefault(); 
    document.getElementById("reset").style.display = "block";
    document.getElementById('emojies').style.display = 'none';     
    $("#divForGif").empty();
      var giphy = $("#stressed").val().trim();
      
      console.log(giphy);

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=10"; // limit = 10 to limit the amount of gifs 
      // console.log(queryURL);
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        console.log(queryURL);
        console.log(response);


        var results = response.data;
        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");
          
          var gifImage = $("<img>");
          gifImage.attr({
            "src": results[i].images.fixed_height.url,
            "data-animate": results[i].images.fixed_height.url,
            "data-still": results[i].images.fixed_height_still.url,
            "data-state": "animate",
            "class": "gif"
          });

          gifDiv.append();
          gifDiv.append(gifImage);
          $("#divForGif").prepend(gifDiv);

        } 


      }); // to close response funtion
     
    
  } // to close button function

  $("#stressed").on("click", giphyFunction5) 

  ////6


function giphyFunction6() {

  event.preventDefault(); 
  document.getElementById('emojies').style.display = 'none';
  document.getElementById("reset").style.display = "block";     
  $("#divForGif").empty();
    var giphy = $("#sad").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=10"; // limit = 10 to limit the amount of gifs 
    // console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL);
      console.log(response);


      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        
        var gifImage = $("<img>");
        gifImage.attr({
          "src": results[i].images.fixed_height.url,
          "data-animate": results[i].images.fixed_height.url,
          "data-still": results[i].images.fixed_height_still.url,
          "data-state": "animate",
          "class": "gif"
        });

        gifDiv.append();
        gifDiv.append(gifImage);
        $("#divForGif").prepend(gifDiv);

      } 


    }); // to close response funtion
   
  
} // to close button function

$("#sad").on("click", giphyFunction6)

///// 7



function giphyFunction7() {

  event.preventDefault();
  document.getElementById('emojies').style.display = 'none';
  document.getElementById("reset").style.display = "block";      
  $("#divForGif").empty();
    var giphy = $("#mad").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=10"; // limit = 10 to limit the amount of gifs 
    // console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL);
      console.log(response);


      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        
        var gifImage = $("<img>");
        gifImage.attr({
          "src": results[i].images.fixed_height.url,
          "data-animate": results[i].images.fixed_height.url,
          "data-still": results[i].images.fixed_height_still.url,
          "data-state": "animate",
          "class": "gif"
        });

        gifDiv.append();
        gifDiv.append(gifImage);
        $("#divForGif").prepend(gifDiv);

      } 


    }); // to close response funtion
   
  
} // to close button function

$("#mad").on("click", giphyFunction7) 

////8



function giphyFunction8() {

  event.preventDefault(); 
  document.getElementById('emojies').style.display = 'none';
  document.getElementById("reset").style.display = "block";     
  $("#divForGif").empty();
    var giphy = $("#crying").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=10"; // limit = 10 to limit the amount of gifs 
    // console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL);
      console.log(response);


      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        
        var gifImage = $("<img>");
        gifImage.attr({
          "src": results[i].images.fixed_height.url,
          "data-animate": results[i].images.fixed_height.url,
          "data-still": results[i].images.fixed_height_still.url,
          "data-state": "animate",
          "class": "gif"
        });

        gifDiv.append();
        gifDiv.append(gifImage);
        $("#divForGif").prepend(gifDiv);

      } 


    }); // to close response funtion
   
  
} // to close button function

$("#crying").on("click", giphyFunction8)

////9



function giphyFunction9() {

  event.preventDefault(); 
  document.getElementById('emojies').style.display = 'none'; 
  document.getElementById("reset").style.display = "block";    
  $("#divForGif").empty();
    var giphy = $("#sleepy").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=10"; // limit = 10 to limit the amount of gifs 
    // console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL);
      console.log(response);


      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        
        var gifImage = $("<img>");
        gifImage.attr({
          "src": results[i].images.fixed_height.url,
          "data-animate": results[i].images.fixed_height.url,
          "data-still": results[i].images.fixed_height_still.url,
          "data-state": "animate",
          "class": "gif"
        }); 

        gifDiv.append();
        gifDiv.append(gifImage);
        $("#divForGif").prepend(gifDiv);

      } 


    }); // to close response funtion
   
  
} // to close button function

$("#sleepy").on("click", giphyFunction9) 

//// 10




function giphyFunction10() {

  event.preventDefault();
  document.getElementById('emojies').style.display = 'none'; 
   document.getElementById("reset").style.display = "block";

  $("#divForGif").empty();
    var giphy = $("#sick").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=10"; // limit = 10 to limit the amount of gifs 
    // console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL);
      console.log(response);


      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        
        var gifImage = $("<img>");
        gifImage.attr({
          "src": results[i].images.fixed_height.url,
          "data-animate": results[i].images.fixed_height.url,
          "data-still": results[i].images.fixed_height_still.url,
          "data-state": "animate",
          "class": "gif"
        });

        gifDiv.append();
        gifDiv.append(gifImage);
        $("#divForGif").prepend(gifDiv);

      } 


    }); // to close response funtion
   
  
} // to close button function

$("#sick").on("click", giphyFunction10)

/// 11




function giphyFunction11() {

  event.preventDefault(); 
  document.getElementById('emojies').style.display = 'none';
  document.getElementById("reset").style.display = "block";     
  $("#divForGif").empty();
    var giphy = $("#fuck").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=10"; // limit = 10 to limit the amount of gifs 
    // console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL);
      console.log(response);


      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        
        var gifImage = $("<img>");
        gifImage.attr({
          "src": results[i].images.fixed_height.url,
          "data-animate": results[i].images.fixed_height.url,
          "data-still": results[i].images.fixed_height_still.url,
          "data-state": "animate",
          "class": "gif"
        });

        gifDiv.append();
        gifDiv.append(gifImage);
        $("#divForGif").prepend(gifDiv);

      } 


    }); // to close response funtion
   
  
} // to close button function

$("#fuck").on("click", giphyFunction11)


/// 12




function giphyFunction12() {

  event.preventDefault();
  document.getElementById('emojies').style.display = 'none'; 
  document.getElementById("reset").style.display = "block";     
  $("#divForGif").empty();
    var giphy = $("#swearing").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=10"; // limit = 10 to limit the amount of gifs 
    // console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL);
      console.log(response);


      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        
        var gifImage = $("<img>");
        gifImage.attr({
          "src": results[i].images.fixed_height.url,
          "data-animate": results[i].images.fixed_height.url,
          "data-still": results[i].images.fixed_height_still.url,
          "data-state": "animate",
          "class": "gif"
        });

        gifDiv.append();
        gifDiv.append(gifImage);
        $("#divForGif").prepend(gifDiv);

      } 


    }); // to close response funtion
   
  
} // to close button function

$("#swearing").on("click", giphyFunction12)


//// 13 




function giphyFunction13() {

  event.preventDefault();     
  document.getElementById('emojies').style.display = 'none';
  document.getElementById("reset").style.display = "block"; 
    var giphy = $("#mindBlown").val().trim();
    $("#divForGif").empty();
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=10"; // limit = 10 to limit the amount of gifs 
    // console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL);
      console.log(response);


      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        
        var gifImage = $("<img>");
        gifImage.attr({
          "src": results[i].images.fixed_height.url,
          "data-animate": results[i].images.fixed_height.url,
          "data-still": results[i].images.fixed_height_still.url,
          "data-state": "animate",
          "class": "gif"
        });

        gifDiv.append();
        gifDiv.append(gifImage);
        $("#divForGif").prepend(gifDiv);

      } 


    }); // to close response funtion
   
  
} // to close button function

$("#mindBlown").on("click", giphyFunction13)


//// 14



function giphyFunction14() {

  event.preventDefault();
  document.getElementById('emojies').style.display = 'none';
  document.getElementById("reset").style.display = "block";      
  $("#divForGif").empty();
    var giphy = $("#poop").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=10"; // limit = 10 to limit the amount of gifs 
    // console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL);
      console.log(response);


      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        
        var gifImage = $("<img>");
        gifImage.attr({
          "src": results[i].images.fixed_height.url,
          "data-animate": results[i].images.fixed_height.url,
          "data-still": results[i].images.fixed_height_still.url,
          "data-state": "animate",
          "class": "gif"
        });

        gifDiv.append();
        gifDiv.append(gifImage);
        $("#divForGif").prepend(gifDiv);

      } 


    }); // to close response funtion
   
  
} // to close button function

$("#poop").on("click", giphyFunction14)


/// 15 




function giphyFunction15() {

  event.preventDefault(); 
  document.getElementById('emojies').style.display = 'none';
  document.getElementById("reset").style.display = "block";     
  $("#divForGif").empty();
    var giphy = $("#love").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=10"; // limit = 10 to limit the amount of gifs 
    // console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL);
      console.log(response);


      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        
        var gifImage = $("<img>");
        gifImage.attr({
          "src": results[i].images.fixed_height.url,
          "data-animate": results[i].images.fixed_height.url,
          "data-still": results[i].images.fixed_height_still.url,
          "data-state": "animate",
          "class": "gif"
        });

        gifDiv.append();
        gifDiv.append(gifImage);
        $("#divForGif").prepend(gifDiv);

      } 


    }); // to close response funtion
   
  
} // to close button function

$("#love").on("click", giphyFunction15)

//// 16




function giphyFunction16() {

  event.preventDefault();  
  document.getElementById('emojies').style.display = 'none';
  document.getElementById("reset").style.display = "block";    
  $("#divForGif").empty();
    var giphy = $("#peaceful").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=10"; // limit = 10 to limit the amount of gifs 
    // console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL);
      console.log(response);


      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        
        var gifImage = $("<img>");
        gifImage.attr({
          "src": results[i].images.fixed_height.url,
          "data-animate": results[i].images.fixed_height.url,
          "data-still": results[i].images.fixed_height_still.url,
          "data-state": "animate",
          "class": "gif"
        });

        gifDiv.append();
        gifDiv.append(gifImage);
        $("#divForGif").prepend(gifDiv);

      } 


    }); // to close response funtion
   
  
} // to close button function

$("#peaceful").on("click", giphyFunction16)


//// 17




function giphyFunction17() {

  event.preventDefault(); 
  document.getElementById('emojies').style.display = 'none';
  document.getElementById("reset").style.display = "block";     
  $("#divForGif").empty();
    var giphy = $("#celebrating").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=10"; // limit = 10 to limit the amount of gifs 
    // console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL);
      console.log(response);


      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        
        var gifImage = $("<img>");
        gifImage.attr({
          "src": results[i].images.fixed_height.url,
          "data-animate": results[i].images.fixed_height.url,
          "data-still": results[i].images.fixed_height_still.url,
          "data-state": "animate",
          "class": "gif"
        });

        gifDiv.append();
        gifDiv.append(gifImage);
        $("#divForGif").prepend(gifDiv);

      } 


    }); // to close response funtion
   
  
} // to close button function

$("#celebrating").on("click", giphyFunction17)


///// 18




function giphyFunction18() {
  $("#divForGif").empty();

  event.preventDefault();
  document.getElementById('emojies').style.display = 'none'; 
  document.getElementById("reset").style.display = "block";     
    var giphy = $("#volcano").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=10"; // limit = 10 to limit the amount of gifs 
    // console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL);
      console.log(response);


      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        
        var gifImage = $("<img>");
        gifImage.attr({
          "src": results[i].images.fixed_height.url,
          "data-animate": results[i].images.fixed_height.url,
          "data-still": results[i].images.fixed_height_still.url,
          "data-state": "animate",
          "class": "gif"
        });

        gifDiv.append();
        gifDiv.append(gifImage);
        $("#divForGif").prepend(gifDiv);

      } 


    }); // to close response funtion
   
  
} // to close button function

$("#volcano").on("click", giphyFunction18)


$(document).on("click", ".gif", function() {
  var state = $(this).attr("data-state");
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
}); 

$(document).on("click", "#reset", function() {
  document.getElementById("reset").style.display = "none";
    document.getElementById('emojies').style.display = 'block'; 
    $("#divForGif").empty();
})
