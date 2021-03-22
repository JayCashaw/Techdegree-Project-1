/******************************************
Treehouse FSJS Techdegree: Jaqwain Cashaw
project 1 - A Random Quote Generator
******************************************/

// A quotes array with a list of objects
const quotes = [
{ 
	quote: "“If you really want to do something, you'll find a way. If you don't, you'll find an excuse.”",
	source: "Jim Rohm",
	citation: "Goodreads Quotable Quotes",
	year: '',
	tags: " #Motivation"
},

{ 
	quote: "“Being realistic is the most common path to mediocrity.”",
	source: "Will Smith",
	citation: "Will Smith shares his secrets of success",
	year: 2010,
	tags: " #Life"
},

{ 
	quote: "“There is no excuse to not live up to your fullest potential.”",
	source: "Eric Thomas",
	citation: "ERIC THOMAS | YOU OWE YOU | Motivational Speaker",
	year: 2015,
	tags: " #Motivation"
},

{ 
	quote: "“Life is about making an impact, not making an income.”",
	source: "Kevin Kruse",
	citation: "MAKE AN IMPACT. NOT AN INCOME - Different Hunger",
	year: 2015,
	tags: " #Life"
},

{ 
	quote: "“You don’t have to be great to get started but you have to get started to be great.”",
	source: "Les Brown",
	citation: "Addicted2success",
	year: 2019,
	tags: " #Sucess"
}
];

//Creates a random number and uses that random number to return a random quote from the quote array above
 function getRandomQuote (){
	const RandomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	return (RandomQuote);
}

/***
A function that first has a Save quote constant that calls the getRandom Quote function then a variable that stores a 
string which then spans the quote,source, citation and year back to the page
***/
function printQuote (){
	const SaveQuote = getRandomQuote();
	let QuoteStringHtml = "<p class = 'quote'>" + SaveQuote.quote + "</p>";
	QuoteStringHtml += "<p class='source'>" + SaveQuote.source;

//Adds the necessary citation 
  if ("citation" in SaveQuote) {
    QuoteStringHtml += "<span class='citation'>" + SaveQuote.citation + "</span>";
  }

//Adds the necessary year 
  if ("year" in SaveQuote) {
    QuoteStringHtml += "<span class='year'>" + SaveQuote.year + "</span>";
  }

    if ("tags" in SaveQuote) {
    QuoteStringHtml += "<span class='tags'>" + SaveQuote.tags + "</span>" + "</p>";
  }

//Selects the quote-box div and updates the HTML content with the random quote
  document.getElementById("quote-box").innerHTML = QuoteStringHtml;
  }

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);