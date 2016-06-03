$(document).ready(function() {
  $("#profile").submit(function(event) {
    event.preventDefault();
    var budget = $("#budget").val();
    var terrain = $("#terrain").val();
    var activity = $("#activity").val();
    // debugger;

    if (activity === 'community') {
      if (budget === 'student'){
      if (terrain === 'tropical') {
        $('#bora').hide();
        $('#bora2').hide();
        $('#bora3').hide();
        $('#boras').show();
        $('#boras2').hide();
        $('#boras3').hide();
        $('#muir').hide();
        $('#muir2').hide();
        $('#muir3').hide();
        $('#muirs').hide();
        $('#muirs2').hide();
        $('#muirs3').hide();
      }

      else if (terrain === 'forrest') {
        $('#bora').hide();
        $('#bora2').hide();
        $('#bora3').hide();
        $('#boras').hide();
        $('#boras2').hide();
        $('#boras3').hide();
        $('#muir').hide();
        $('#muir2').hide();
        $('#muir3').hide();
        $('#muirs').show();
        $('#muirs2').hide();
        $('#muirs3').hide();
      }}

      else if (budget === 'baller'){
      if (terrain === 'tropical') {
        $('#bora').show();
        $('#bora2').hide();
        $('#bora3').hide();
        $('#boras').hide();
        $('#boras2').hide();
        $('#boras3').hide();
        $('#muir').hide();
        $('#muir2').hide();
        $('#muir3').hide();
        $('#muirs').hide();
        $('#muirs2').hide();
        $('#muirs3').hide();
      }
      else if (terrain === 'forrest') {
        $('#bora').hide();
        $('#bora2').hide();
        $('#bora3').hide();
        $('#boras').hide();
        $('#boras2').hide();
        $('#boras3').hide();
        $('#muir').show();
        $('#muir2').hide();
        $('#muir3').hide();
        $('#muirs').hide();
        $('#muirs2').hide();
        $('#muirs3').hide();
      }}};

    if (activity === 'romantic') {
      if (budget === 'student'){
      if (terrain === 'tropical') {
        $('#bora').hide();
        $('#bora2').hide();
        $('#bora3').hide();
        $('#boras').hide();
        $('#boras2').show();
        $('#boras3').hide();
        $('#muir').hide();
        $('#muir2').hide();
        $('#muir3').hide();
        $('#muirs').hide();
        $('#muirs2').hide();
        $('#muirs3').hide();
      }
      else if (terrain === 'forrest') {
        $('#bora').hide();
        $('#bora2').hide();
        $('#bora3').hide();
        $('#boras').hide();
        $('#boras2').hide();
        $('#boras3').hide();
        $('#muir').hide();
        $('#muir2').hide();
        $('#muir3').hide();
        $('#muirs').hide();
        $('#muirs2').show();
        $('#muirs3').hide();
      }}
      else if (budget === 'baller'){
      if (terrain === 'tropical') {
        $('#bora').hide();
        $('#bora2').show();
        $('#bora3').hide();
        $('#boras').hide();
        $('#boras2').hide();
        $('#boras3').hide();
        $('#muir').hide();
        $('#muir2').hide();
        $('#muir3').hide();
        $('#muirs').hide();
        $('#muirs2').hide();
        $('#muirs3').hide();
      }
      else if (terrain === 'forrest') {
        $('#bora').hide();
        $('#bora2').hide();
        $('#bora3').hide();
        $('#boras').hide();
        $('#boras2').hide();
        $('#boras3').hide();
        $('#muir').hide();
        $('#muir2').show();
        $('#muir3').hide();
        $('#muirs').hide();
        $('#muirs2').hide();
        $('#muirs3').hide();
      }}
    }

      if (activity === 'markets') {
      if (budget === 'student'){
      if (terrain === 'tropical') {
        $('#bora').hide();
        $('#bora2').hide();
        $('#bora3').hide();
        $('#boras').show();
        $('#boras2').hide();
        $('#boras3').hide();
        $('#muir').hide();
        $('#muir2').hide();
        $('#muir3').hide();
        $('#muirs').hide();
        $('#muirs2').hide();
        $('#muirs3').hide();
      }
      else if (terrain === 'forrest') {
        $('#bora').hide();
        $('#bora2').hide();
        $('#bora3').hide();
        $('#boras').hide();
        $('#boras2').hide();
        $('#boras3').hide();
        $('#muir').hide();
        $('#muir2').hide();
        $('#muir3').hide();
        $('#muirs').show();
        $('#muirs2').hide();
        $('#muirs3').hide();
      }}
      else if (budget === 'baller'){
      if (terrain === 'tropical') {
        $('#bora').hide();
        $('#bora2').hide();
        $('#bora3').show();
        $('#boras').hide();
        $('#boras2').hide();
        $('#boras3').hide();
        $('#muir').hide();
        $('#muir2').hide();
        $('#muir3').hide();
        $('#muirs').hide();
        $('#muirs2').hide();
        $('#muirs3').hide();
      }
      else if (terrain === 'forrest') {
        $('#bora').hide();
        $('#bora2').hide();
        $('#bora3').hide();
        $('#boras').hide();
        $('#boras2').hide();
        $('#boras3').hide();
        $('#muir').hide();
        $('#muir2').hide();
        $('#muir3').show();
        $('#muirs').hide();
        $('#muirs2').hide();
        $('#muirs3').hide();
      }}
    }

    //
    //
    // else {console.log("wrong");
    // }

  });
});
