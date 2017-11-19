function myFunction(){
	document.getElementById("demo").innerHTML="Paragraph changed"
}

function myToggleCartoon(){
	if (document.getElementById("buttoncartoon").innerHTML == "show cartoon") {
	    document.getElementById("cartoon").src="img/a.jpg"
	    document.getElementById("buttoncartoon").innerHTML="hide cartoon"
	} else {
		document.getElementById("cartoon").src="img/b.jpg"
	    document.getElementById("buttoncartoon").innerHTML="show cartoon"
	}
}

var openFile = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };