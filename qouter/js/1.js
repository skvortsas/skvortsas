var pic = document.getElementById("pic"),
			    ctx = pic.getContext('2d'),
				mes;
			    pic.width = 600;
			    pic.height = 800;
			var	img = new Image();
			var textkek;
			var maxResultStringLength = 25;

	function getPic(){
	//img.src = "https://placeimg.com/"+pic.width+"/"+pic.height+"/any?"+ Math.floor(Math.random() * (100000));
	img.src="https://picsum.photos/"+pic.width+"/"+pic.height+"/?random&kek="+Math.floor(Math.random() * (100000000));
	img.onload = function(){
	ctx.drawImage(img, 0, 0, pic.width, pic.height); 
	getQuote();
	}
} 

function kek(response) {
	textkek = response.quoteText;
	pisos(textkek);
}

function getQuote(){

  $.get( "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=ru&jsonp=kek", function() {
	console.log("got quote");
  },
  "jsonp");
  
}

getPic();

$('#but').click(function(){  
	getPic();
});


function pisos(textquote){
	var arr = textquote.split(" ");
	var resultString = "";
	var currentRow = 1;
	for (var i=0;i<arr.length; i++){
		resultString += arr[i];
		resultString += " ";
		if (resultString.length > maxResultStringLength) {
				ctx.font = "30px Impact";
				ctx.fillStyle = "white";
				ctx.fillText(resultString, (pic.width - resultString.length * 14) / 2, 50 * currentRow);
				currentRow++;
				resultString = "";
		}
	}
	if (resultString !== "") {
		ctx.font = "30px Impact";
		ctx.fillStyle = "white";
		ctx.fillText(resultString, (pic.width - resultString.length * 14) / 2, 50 * currentRow);
	}
}
