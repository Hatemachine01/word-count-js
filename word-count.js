var Words = function() {}

Words.prototype.count = function( wordString ) {
	
	/* Counts  times each words appears */
	var wordCount = Object.create(null) ;
	
	/* Sanitizes string by removing punctuation characters. Also lower cases entire string. Trim method removes white space*/
	wordStringSanitized = wordString.trim().toLowerCase().replace(/[.\/#!$%\^&\*;:{}=\-_~()@]/g,"")
	
	/* Splits sanitized string by looking for empty space, as well as commas "*/
	wordStringSanitized.split(/\s+|,/).forEach(function(word){
	
	/* iterates over every word and increases counter everytime it goes over a word that already exists, if the word doesn'te
	xists, it gives its counter a value of 1 */
		if(word in wordCount && !isNaN(wordCount[word]))
			wordCount[word]++;
		else
			wordCount[word] = 1;
	});
	
	return wordCount

};

module.exports = Words;


