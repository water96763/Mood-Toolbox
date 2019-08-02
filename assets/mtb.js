function searchlastfm() {
  //    let feeling = $(this).attr("data-name");
  let queryURL = "https://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&limit=4&api_key=d6b014786cf900b1834301c65617492d&format=json";

  $.ajax({
    url: queryURL,
    method: "GET"

  }).then(function (response) {
    let results = response.data;
    // let infoForIframe = results.url;
    console.log(response);
    // console.log(results.url);
  });
} searchlastfm();


$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});


