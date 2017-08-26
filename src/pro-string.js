var text = require('./../data/text');
var countSentences = require('./../lib/util').countSentences;

var generateString = function(sentences = 50,paragraph = 1){
    
    let tmp = 'This Random Generator generate random string.';
	for(let i = 0; i < paragraph; i++){
		for(let j = 0; j < sentences; j++){
			if(countSentences(tmp) <= sentences-1){
				tmp += text[Math.floor(Math.random() * text.length + 1)];
			}
			else break;
		}
		tmp += "\n\n";
	}
	return tmp;
}
module.exports = {
    generateString
}