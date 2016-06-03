$(document).ready(function() {
  $("#profile").submit(function(event) {
    event.preventDefault();
    var budget = $("#budget").val();
    var terrain = $("#terrain").val();


    if (budget === 'student'){
    if (terrain === 'tropical') {
      $('#muirs').show();
      $('#muir').hide();
      $('#bora').hide();
      $('#boras').hide();
    }

    else if (terrain === 'forrest') {
      $('#boras').hide();
      $('#bora').hide();
      $('#muir').hide();
      $('#muirs').show();
    }}

    else if (budget === 'baller'){
    if (terrain === 'tropical') {
      $('#bora').show();
      $('#boras').hide();
      $('#muir').hide();
      $('#muirs').hide();
    }
    else if (terrain === 'forrest') {
      $('#boras').hide();
      $('#bora').hide();
      $('#muir').show();
      $('#muirs').hide();
    }}


    else {
      console.log("wrong");
    }


  });
});
