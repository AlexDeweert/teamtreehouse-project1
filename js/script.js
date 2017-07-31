// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var quotes = [];
populateQuoteArray();

/*Functions*/
function getRandomQuote() {
	//console.log( Math.trunc((Math.random()*100) % 10) + 1  );
	console.log( quotes[Math.trunc((Math.random()*100) % 10) + 1]);
}

function quoteObject( quote, creator ) {
	this.quote = quote;
	this.creator = creator;
}

function printQuote() {
	console.log("clicked");
	getRandomQuote();
}

function populateQuoteArray() {
	quotes.push( new quoteObject("Imagination is more important than knowledge.", "Albert Einstein"));
	quotes.push( new quoteObject("The important thing is not to stop questioning. Curiosity has its own reason for existing.", "Albert Einstein"));
	quotes.push( new quoteObject("Anyone who has never made a mistake has never tried anything new.", "Albert Einstein"));
	quotes.push( new quoteObject("Try not to become a man of success, but rather try to become a man of value.", "Albert Einstein"));
	quotes.push( new quoteObject("Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein"));
	quotes.push( new quoteObject("Science without religion is lame, religion without science is blind.", "Albert Einstein"));
	quotes.push( new quoteObject("No problem can be solved from the same level of consciousness that created it.", "Albert Einstein"));
	quotes.push( new quoteObject("Everything should be made as simple as possible, but not simpler.", "Albert Einstein"));
	quotes.push( new quoteObject("The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.", "Albert Einstein"));
	quotes.push( new quoteObject("I have no special talents. I am only passionately curious.", "Albert Einstein"));
}