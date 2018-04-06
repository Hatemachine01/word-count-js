var Words = function() {}

Words.prototype.count = function( wordString ) {
	
	/* Counts  times each words appears */
	var wordCount = Object.create(null) ;
	
	/* Sanitizes string by removing punctuation characters. Also lower cases entire string to avoid maching errors. 
	Trim method removes white space at both ends of the string. */
	wordStringSanitized = wordString.trim().toLowerCase().replace(/[.\/#!$%\^&\*;:{}=\-_~()@]/g,"").split(/\s+|,/)
	
	/* iterates over every word and increases counter everytime it goes over a word that already exists, if the word doesn'te
	xists, it gives its counter a value of 1 */
	
	wordStringSanitized.forEach(function(word){
		if(word in wordCount && !isNaN(wordCount[word]))
			wordCount[word]++;
		else
			wordCount[word] = 1;
	});
	
	return wordCount

};

module.exports = Words;


