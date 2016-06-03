

$("#profile").submit(function(event) {
  event.preventDefault();
      debugger;



// Question 3
          var ls = $("#landscape").val();

          if (ls === 'mountain') {
            alert("i'm working!");
          }
          else if (sign === 'airies' || sign === 'taurus') {
            $('#george').show();
          }
          else if (sign === 'capricorn' || sign === 'sagittarius') {
            $('#taylor').show();
          }
          else if (sign === 'gemini' || sign === 'scorpio') {
            $('#steve').show();
          }
          else if (sign === 'libra' || sign === 'leo') {
            $('#louis').show();
          }
          else if (sign === 'auquarius' || sign === 'pisces') {
            $('#sean').show();
          }

          else {
            console.log("wrong");
          }

        });
