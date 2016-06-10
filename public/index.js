window.onload = function() {

  // var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=qkP4RJzgIj8BsFDNHsSNAx6fGDN9kjwbWtelnJ48"
  // var request = new XMLHttpRequest();
  // request.open( "GET", url );
  // request.send( null );

  // request.onload = function() {
  //   if( request.status === 200 ) {
  //     console.log( "Data retrieved" );
  //     var jsonString = request.responseText;
  //     console.log( jsonString );
  //   }
  //   displayPhoto( jsonString );
  // }



};

var displayPhoto = function( responseText ) {
  var roverData = JSON.parse( responseText );
  var photo = roverData.photos[0].img_src

  var photoPanel = document.getElementById( "photo" );
  var img = document.createElement( "img" );
  img.src = photo;
  photoPanel.appendChild( img );
}

window.onclick = function( event ) {
  var date = document.getElementById( "date" )
  if ( event.target.matches( '.dateSelect #btn' )) {
    var chosenDate = date.value

    var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + chosenDate + "&api_key=qkP4RJzgIj8BsFDNHsSNAx6fGDN9kjwbWtelnJ48"
    var request = new XMLHttpRequest();
    request.open( "GET", url );
    request.send( null );
  
    request.onload = function() {
      if( request.status === 200 ) {
        console.log( "Data retrieved" );
        var jsonString = request.responseText;
        console.log( jsonString );
      }
      var roverData = JSON.parse( responseText );
    }
  }

  if (!event.target.matches('.dropbtn')) {

      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }

}

function showHideDropdown() {
    document.getElementById( "dateDropdown" ).classList.toggle( "show" );
}