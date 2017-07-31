// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var quotes = [];
var checked = [0,0,0,0,0,0,0,0,0,0];
populateQuoteArray();

setInterval(function(){ printQuote(); }, 3000);

function allChecked() {
	console.log("Checking all...");
	for( var i = 0; i < checked.length; i++ ) {
		if( checked[i] == 0 ) return false;
	}
	return true;
}

function markChecked(index) {
	checked[index] = 1;
	if( allChecked() ) {
		console.log("Resetting indexes");
		checked = [0,0,0,0,0,0,0,0,0,0];
	}
}

function isChecked(index) {
	if( checked[index] ) {
		return true;
	}
	return false;
}

function changeBackgroundColor () {
	var colors = ["0C6A74", "22E8C4", "32FFA0", "22E854", "2DFF25"];
	var index = Math.trunc((Math.random()*100) % 5);
	document.getElementsByTagName("body")["0"].style.backgroundColor = "#" + colors[index];
}

/*Functions*/
function getRandomQuote() {
	var index = Math.trunc((Math.random()*100) % 10);
	console.log("Trying index: " + index );

	if( isChecked(index) ) {
		console.log( index + " was already checked");

		//pick new index
		var newIndexFound = false;
		while( newIndexFound == false ) {
			index = Math.trunc((Math.random()*100) % 10);
			console.log("(while loop) Attempting index: " + index );
			if( isChecked(index ) ) {
				newIndexFound = false;	
			} 
			else {
				console.log( index + " is available");
				newIndexFound = true;
				markChecked(index);
			} 
		}

	}
	else {
		console.log("index " + index + " was available and is marked");
		markChecked(index);	
	}

	console.log(checked);
	return quotes[index];
}

function quoteObject( quote, source, ciation, year, tags ) {
	this.quote = quote;
	this.source = source;
	this.ciation = ciation;
	this.year = year;
	this.tags = tags;
}

function printQuote() {
	var quoteObj = getRandomQuote();
	var html = "\<p class=\"quote\"\>" + quoteObj.quote + " \</p\>\<p class=\"source\"\>" + quoteObj.source + "\<span class=\"citation\"\>" + quoteObj.ciation + "\</span\>\<span class=\"year\"\> " + quoteObj.year + " \</span\>\</p\>";
	document.getElementById('quote-box').innerHTML = html;
	changeBackgroundColor();
}

function populateQuoteArray() {
	quotes.push( new quoteObject("Imagination is more important than knowledge.", "Albert Einstein", "Brainy Quote", "1875-1955", ["philosophy"]));
	quotes.push( new quoteObject("The important thing is not to stop questioning. Curiosity has its own reason for existing.", "Albert Einstein", "Brainy Quote", "1875-1955", ["philosophy", "science"]));
	quotes.push( new quoteObject("Anyone who has never made a mistake has never tried anything new.", "Albert Einstein", "Brainy Quote", "1875-1955", ["philosophy", "science", "guidance"]));
	quotes.push( new quoteObject("Try not to become a man of success, but rather try to become a man of value.", "Albert Einstein", "Brainy Quote", "1875-1955", ["philosophy", "science", "guidance"]));
	quotes.push( new quoteObject("Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein", "Brainy Quote", "1875-1955", ["philosophy", "science", "humor"]));
	quotes.push( new quoteObject("Science without religion is lame, religion without science is blind.", "Albert Einstein", "Brainy Quote", "1875-1955", ["philosophy", "religion"]));
	quotes.push( new quoteObject("No problem can be solved from the same level of consciousness that created it.", "Albert Einstein", "Brainy Quote", "1875-1955", ["science", "guidance"]));
	quotes.push( new quoteObject("Everything should be made as simple as possible, but not simpler.", "Albert Einstein", "Brainy Quote", "1875-1955", ["philosophy", "science"]));
	quotes.push( new quoteObject("The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.", "Albert Einstein", "Brainy Quote", "1875-1955", ["philosophy", "science"]));
	quotes.push( new quoteObject("I have no special talents. I am only passionately curious.", "Albert Einstein", "Brainy Quote", "1875-1955", ["philosophy", "biographical"]));
}