/////// 1
document.getElementById("reset").style.display = "none";
document.getElementById("chuck").style.display = "none";
document.getElementById("chuckQuote").style.display = "none";



function quoteFunction1() {

  var queryURL = "https://quotes.rest/qod.json?category=art";
  console.log(queryURL)
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.log(response.contents.quotes[0].quote);


    var quote = response.contents.quotes[0].quote;
    var author = response.contents.quotes[0].author;

    var results = quote + " - " + author
   
      
      $("#divForQuote").prepend(results);

     


  }); // to close response funtion
 
}// to close quote Function

function giphyFunction() {

    event.preventDefault(); 
    document.getElementById("reset").style.display = "block";
    document.getElementById('emojies').style.display = 'none';
    document.getElementById("chuck").style.display = "block";    
      $("#divForGif").empty();
      var giphy = $("#silly").val().trim();
      
      console.log(giphy);

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=4"; // limit = 10 to limit the amount of gifs 
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

        } // to close the loop 
        quoteFunction1();
      }); // to close response funtion  
  } // to close giphy function

   
  $("#silly").on("click", giphyFunction) 



/////////2

function quoteFunction2() {

  var queryURL = "https://quotes.rest/qod.json?category=inspire";
  console.log(queryURL)
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.log(response.contents.quotes[0].quote);


    var quote = response.contents.quotes[0].quote;
    var author = response.contents.quotes[0].author;

    var results = quote + " - " + author
   
      
      $("#divForQuote").prepend(results);

     


  }); // to close response funtion
 

}// to close quote Function



  function giphyFunction2() {

    event.preventDefault();
    document.getElementById('emojies').style.display = 'none';
    document.getElementById("reset").style.display = "block";      
    document.getElementById("chuck").style.display = "block";
    $("#divForGif").empty();
      var giphy = $("#happy").val().trim();
      
      console.log(giphy);

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=4"; // limit = 10 to limit the amount of gifs 
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


        quoteFunction2();

      }); // to close response funtion
    
  } // to close button function


  
  
    $("#happy").on("click", giphyFunction2) 

//////4

function quoteFunction3() {

  var queryURL = "https://quotes.rest/qod.json?category=funny";
  console.log(queryURL)
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.log(response.contents.quotes[0].quote);


    var quote = response.contents.quotes[0].quote;
    var author = response.contents.quotes[0].author;

    var results = quote + " - " + author
   
      
      $("#divForQuote").prepend(results);

     


  }); // to close response funtion
 

}// to close quote Function


  function giphyFunction3() {

    event.preventDefault();
    document.getElementById("chuck").style.display = "block";
    document.getElementById('emojies').style.display = 'none';
    document.getElementById("reset").style.display = "block";      
    $("#divForGif").empty();
      var giphy = $("#laughing").val().trim();
      
      console.log(giphy);

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=4"; // limit = 10 to limit the amount of gifs 
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

        quoteFunction3();
      }); // to close response funtion
     
    
  } // to close button function


  $("#laughing").on("click", giphyFunction3) 


  ////4 

  function quoteFunction4() {

    var queryURL = "https://quotes.rest/qod.json?category=management";
    console.log(queryURL)
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL);
      console.log(response.contents.quotes[0].quote);
  
  
      var quote = response.contents.quotes[0].quote;
      var author = response.contents.quotes[0].author;
  
      var results = quote + " - " + author
     
        
        $("#divForQuote").prepend(results);
  
       
  
  
    }); // to close response funtion
   
  
  }// to close quote Function
  
 function giphyFunction4() {

  event.preventDefault();     
  $("#divForGif").empty();
  document.getElementById("chuck").style.display = "block";
  document.getElementById('emojies').style.display = 'none';
  document.getElementById("reset").style.display = "block"; 
    var giphy = $("#cool").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=4"; // limit = 10 to limit the amount of gifs 
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

      quoteFunction4();
    }); // to close response funtion
   
  
} // to close button function

$("#cool").on("click", giphyFunction4) 
  
//// 5 

function quoteFunction5() {

  var queryURL = "https://quotes.rest/qod.json?category=life";
  console.log(queryURL)
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.log(response.contents.quotes[0].quote);


    var quote = response.contents.quotes[0].quote;
    var author = response.contents.quotes[0].author;

    var results = quote + " - " + author
   
      
      $("#divForQuote").prepend(results);

     


  }); // to close response funtion
 

}// to close quote Function


 function giphyFunction5() {

    event.preventDefault(); 
    document.getElementById("chuck").style.display = "block";
    document.getElementById("reset").style.display = "block";
    document.getElementById('emojies').style.display = 'none';     
    $("#divForGif").empty();
      var giphy = $("#stressed").val().trim();
      
      console.log(giphy);

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=4"; // limit = 10 to limit the amount of gifs 
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
        quoteFunction5();

      }); // to close response funtion
     
    
  } // to close button function

  $("#stressed").on("click", giphyFunction5) 

  ////6

  function quoteFunction6() {

    var queryURL = "https://quotes.rest/qod.json?category=inspire";
    console.log(queryURL)
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL);
      console.log(response.contents.quotes[0].quote);
  
  
      var quote = response.contents.quotes[0].quote;
      var author = response.contents.quotes[0].author;
  
      var results = quote + " - " + author
     
        
        $("#divForQuote").prepend(results);
  
       
  
  
    }); // to close response funtion
   
  
  }// to close quote Function
  


function giphyFunction6() {

  event.preventDefault(); 
  document.getElementById("chuck").style.display = "block";
  document.getElementById('emojies').style.display = 'none';
  document.getElementById("reset").style.display = "block";     
  $("#divForGif").empty();
    var giphy = $("#sad").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=4"; // limit = 10 to limit the amount of gifs 
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

      quoteFunction6();
    }); // to close response funtion
   
  
} // to close button function

$("#sad").on("click", giphyFunction6)

///// 7

function quoteFunction7() {

  var queryURL = "https://quotes.rest/qod.json?category=life";
  console.log(queryURL)
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.log(response.contents.quotes[0].quote);


    var quote = response.contents.quotes[0].quote;
    var author = response.contents.quotes[0].author;

    var results = quote + " - " + author
   
      
      $("#divForQuote").prepend(results);

     


  }); // to close response funtion
 

}// to close quote Function


function giphyFunction7() {

  event.preventDefault();
  document.getElementById("chuck").style.display = "block";
  document.getElementById('emojies').style.display = 'none';
  document.getElementById("reset").style.display = "block";      
  $("#divForGif").empty();
    var giphy = $("#mad").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=4"; // limit = 10 to limit the amount of gifs 
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
      quoteFunction7();

    }); // to close response funtion
   
  
} // to close button function

$("#mad").on("click", giphyFunction7) 


////8

function quoteFunction8() {

  var queryURL = "https://quotes.rest/qod.json?category=inspire";
  console.log(queryURL)
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.log(response.contents.quotes[0].quote);


    var quote = response.contents.quotes[0].quote;
    var author = response.contents.quotes[0].author;

    var results = quote + " - " + author
   
      
      $("#divForQuote").prepend(results);

     


  }); // to close response funtion
 

}// to close quote Function


function giphyFunction8() {

  event.preventDefault(); 
  document.getElementById("chuck").style.display = "block";
  document.getElementById('emojies').style.display = 'none';
  document.getElementById("reset").style.display = "block";     
  $("#divForGif").empty();
    var giphy = $("#crying").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=3"; // limit = 10 to limit the amount of gifs 
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
      quoteFunction8();

    }); // to close response funtion
   
  
} // to close button function

$("#crying").on("click", giphyFunction8)

////9

function quoteFunction9() {

  var queryURL = "https://quotes.rest/qod.json?category=art";
  console.log(queryURL)
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.log(response.contents.quotes[0].quote);


    var quote = response.contents.quotes[0].quote;
    var author = response.contents.quotes[0].author;

    var results = quote + " - " + author
   
      
      $("#divForQuote").prepend(results);

     


  }); // to close response funtion
 

}// to close quote Function



function giphyFunction9() {

  event.preventDefault(); 
  document.getElementById("chuck").style.display = "block";
  document.getElementById('emojies').style.display = 'none'; 
  document.getElementById("reset").style.display = "block";    
  $("#divForGif").empty();
    var giphy = $("#sleepy").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=3"; // limit = 10 to limit the amount of gifs 
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
      quoteFunction9();

    }); // to close response funtion
   
  
} // to close button function

$("#sleepy").on("click", giphyFunction9) 

//// 10

function quoteFunction10() {

  var queryURL = "https://quotes.rest/qod.json?category=management";
  console.log(queryURL)
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.log(response.contents.quotes[0].quote);


    var quote = response.contents.quotes[0].quote;
    var author = response.contents.quotes[0].author;

    var results = quote + " - " + author
   
      
      $("#divForQuote").prepend(results);

     


  }); // to close response funtion
 

}// to close quote Function



function giphyFunction10() {

  event.preventDefault();
  document.getElementById("chuck").style.display = "block";
  document.getElementById('emojies').style.display = 'none'; 
   document.getElementById("reset").style.display = "block";

  $("#divForGif").empty();
    var giphy = $("#sick").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=3"; // limit = 10 to limit the amount of gifs 
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

      quoteFunction10();

    }); // to close response funtion
   
  
} // to close button function

$("#sick").on("click", giphyFunction10)

/// 11

function quoteFunction11() {

  var queryURL = "https://quotes.rest/qod.json?category=life";
  console.log(queryURL)
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.log(response.contents.quotes[0].quote);


    var quote = response.contents.quotes[0].quote;
    var author = response.contents.quotes[0].author;

    var results = quote + " - " + author
   
      
      $("#divForQuote").prepend(results);

     


  }); // to close response funtion
 

}// to close quote Function




function giphyFunction11() {

  event.preventDefault(); 
  document.getElementById("chuck").style.display = "block";
  document.getElementById('emojies').style.display = 'none';
  document.getElementById("reset").style.display = "block";     
  $("#divForGif").empty();
    var giphy = $("#up_yours").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=3"; // limit = 10 to limit the amount of gifs 
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


      quoteFunction11();
    }); // to close response funtion
   
  
} // to close button function

$("#up_yours").on("click", giphyFunction11)


/// 12

function quoteFunction12() {

  var queryURL = "https://quotes.rest/qod.json?category=management";
  console.log(queryURL)
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.log(response.contents.quotes[0].quote);


    var quote = response.contents.quotes[0].quote;
    var author = response.contents.quotes[0].author;

    var results = quote + " - " + author
   
      
      $("#divForQuote").prepend(results);

     


  }); // to close response funtion
 

}// to close quote Function





function giphyFunction12() {

  event.preventDefault();
  document.getElementById("chuck").style.display = "block";
  document.getElementById('emojies').style.display = 'none'; 
  document.getElementById("reset").style.display = "block";     
  $("#divForGif").empty();
    var giphy = $("#outburst_of_anger").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=3"; // limit = 10 to limit the amount of gifs 
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

      quoteFunction12();

    }); // to close response funtion
   
  
} // to close button function

$("#outburst_of_anger").on("click", giphyFunction12)


//// 13 

function quoteFunction13() {

  var queryURL = "https://quotes.rest/qod.json?category=inspire";
  console.log(queryURL)
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.log(response.contents.quotes[0].quote);


    var quote = response.contents.quotes[0].quote;
    var author = response.contents.quotes[0].author;

    var results = quote + " - " + author
   
      
      $("#divForQuote").prepend(results);

     


  }); // to close response funtion
 

}// to close quote Function




function giphyFunction13() {

  event.preventDefault();     
  document.getElementById("chuck").style.display = "block";
  document.getElementById('emojies').style.display = 'none';
  document.getElementById("reset").style.display = "block"; 
    var giphy = $("#mindBlown").val().trim();
    $("#divForGif").empty();
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=3"; // limit = 10 to limit the amount of gifs 
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
      quoteFunction13();

    }); // to close response funtion
   
  
} // to close button function

$("#mindBlown").on("click", giphyFunction13)


//// 14

function quoteFunction14() {

  var queryURL = "https://quotes.rest/qod.json?category=funny";
  console.log(queryURL)
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.log(response.contents.quotes[0].quote);


    var quote = response.contents.quotes[0].quote;
    var author = response.contents.quotes[0].author;

    var results = quote + " - " + author
   
      
      $("#divForQuote").prepend(results);

     


  }); // to close response funtion
 

}// to close quote Function


function giphyFunction14() {

  event.preventDefault();
  document.getElementById("chuck").style.display = "block";
  document.getElementById('emojies').style.display = 'none';
  document.getElementById("reset").style.display = "block";      
  $("#divForGif").empty();
    var giphy = $("#that_poop").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=4"; // limit = 10 to limit the amount of gifs 
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

      quoteFunction14();

    }); // to close response funtion
   
  
} // to close button function

$("#that_poop").on("click", giphyFunction14)


/// 15 

function quoteFunction15() {

  var queryURL = "https://quotes.rest/qod.json?category=art";
  console.log(queryURL)
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.log(response.contents.quotes[0].quote);


    var quote = response.contents.quotes[0].quote;
    var author = response.contents.quotes[0].author;

    var results = quote + " - " + author
   
      
      $("#divForQuote").prepend(results);

     


  }); // to close response funtion
 

}// to close quote Function



function giphyFunction15() {

  event.preventDefault(); 
  document.getElementById("chuck").style.display = "block";
  document.getElementById('emojies').style.display = 'none';
  document.getElementById("reset").style.display = "block";     
  $("#divForGif").empty();
    var giphy = $("#love").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=3"; // limit = 10 to limit the amount of gifs 
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


      quoteFunction15();
    }); // to close response funtion
   
  
} // to close button function

$("#love").on("click", giphyFunction15)

//// 16

function quoteFunction16() {

  var queryURL = "https://quotes.rest/qod.json?category=inspire";
  console.log(queryURL)
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.log(response.contents.quotes[0].quote);


    var quote = response.contents.quotes[0].quote;
    var author = response.contents.quotes[0].author;

    var results = quote + " - " + author
   
      
      $("#divForQuote").prepend(results);

     


  }); // to close response funtion
 

}// to close quote Function



function giphyFunction16() {

  event.preventDefault();  
  document.getElementById("chuck").style.display = "block";
  document.getElementById('emojies').style.display = 'none';
  document.getElementById("reset").style.display = "block";    
  $("#divForGif").empty();
    var giphy = $("#contented").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=3"; // limit = 10 to limit the amount of gifs 
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

      quoteFunction16();

    }); // to close response funtion
   
  
} // to close button function

$("#contented").on("click", giphyFunction16)


//// 17

function quoteFunction17() {

  var queryURL = "https://quotes.rest/qod.json?category=funny";
  console.log(queryURL)
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.log(response.contents.quotes[0].quote);


    var quote = response.contents.quotes[0].quote;
    var author = response.contents.quotes[0].author;

    var results = quote + " - " + author
   
      
      $("#divForQuote").prepend(results);

     


  }); // to close response funtion
 

}// to close quote Function



function giphyFunction17() {

  event.preventDefault(); 
  document.getElementById("chuck").style.display = "block";
  document.getElementById('emojies').style.display = 'none';
  document.getElementById("reset").style.display = "block";     
  $("#divForGif").empty();
    var giphy = $("#celebrating").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=3"; // limit = 10 to limit the amount of gifs 
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
      quoteFunction17();

    }); // to close response funtion
   
  
} // to close button function

$("#celebrating").on("click", giphyFunction17)


///// 18

function quoteFunction18() {

  var queryURL = "https://quotes.rest/qod.json?category=art";
  console.log(queryURL)
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.log(response.contents.quotes[0].quote);


    var quote = response.contents.quotes[0].quote;
    var author = response.contents.quotes[0].author;

    var results = quote + " - " + author
   
      
      $("#divForQuote").prepend(results);

     


  }); // to close response funtion
 

}// to close quote Function



function giphyFunction18() {
  $("#divForGif").empty();

  event.preventDefault();
  document.getElementById("chuck").style.display = "block";
  document.getElementById('emojies').style.display = 'none'; 
  document.getElementById("reset").style.display = "block";     
    var giphy = $("#bad_cat").val().trim();
    
    console.log(giphy);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=4"; // limit = 10 to limit the amount of gifs 
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
      quoteFunction18();

    }); // to close response funtion
   
  
} // to close button function

$("#bad_cat").on("click", giphyFunction18)


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
    document.getElementById("chuck").style.display = "none";
    document.getElementById("chuckQuote").style.display = "none";
    document.getElementById("divForQuote").style.display = "empty";
    $("#divForGif").empty();
    $("#chuckQuote").empty();
    $("#divForQuote").empty();
});





function chuckRules() {
  // $("#chuckStuff").empty();
  var queryURL = "https://api.icndb.com/jokes/random/1/?escape=javascript";
      
  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function(response) {
      // let results = response.data;
      console.log(response.value[0].joke);
      document.getElementById("chuckQuote").style.display = "block";
      $("#chuckQuote").text(response.value[0].joke);
  });
}

  $(document).on("click", "#chuck", function() {
    chuckRules();
  });

