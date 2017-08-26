var text = require('./../data/text');
var countWord = require('./../lib/util').countWord;

var generateString = function(latters = 50,paragraph = 1){
    
    let tmp = '';
	for(let i = 0; i < paragraph; i++){
		for(let j = 0; j < latters; j++){
			if(countWord(tmp) <= latters){
				break;
			}
			else tmp += text[Math.floor(Math.random() * text.length + 1)] + " ";
		}
		tmp += "\n\n";
	}
	return tmp;
}
module.exports = {
    generateString
}