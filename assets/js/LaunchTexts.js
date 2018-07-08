$.getJSON('assets/json/texts.json', function(data){
  // Retrieve page name
  var pathName = window.location.pathname;
  pathName = pathName.split('.');
  pathName = pathName[pathName.length-2];
  pathName = pathName.split('/');
  pathName = pathName[pathName.length-1];
  pathName = pathName.toLowerCase();

  var myTab = data[pathName];
  var output = '';

  // Title
  var title = myTab.title;
  output += '<h1>' + title + '</h1>';

  // Texts
  var allTexts = myTab.text;
  output += '<p>';
  $.each(allTexts, function(key, val){
    if (key>0){
      output += '<br>';
    }
    output += val;
  });
  output += '</p>';


  $('.main-text').html(output);
});
