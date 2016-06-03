$(document).ready(function() {
  $("#profile").submit(function(event) {
    event.preventDefault();
    var budget = $("#budget").val();
    var budget = $("#budget").val();

    if (terrain === 'tropical') {
      $('#muir').show();
      $('#bora').hide();
    }
    else if (terrain === 'forrest') {
      $('#bora').show();
      $('#muir').hide();
    }
    else {
      console.log("wrong");
    }


  });
});
