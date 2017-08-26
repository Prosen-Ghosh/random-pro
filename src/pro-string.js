var text = require('./../data/text');
var countWord = require('./../lib/util').countWord;

var generateString = function(latters = 50,paragraph = 1){
    
    let tmp = '';
	for(let i = 0; i < paragraph; i++){
		for(let j = 0; j < latters; j++){
			tmp += text[Math.floor(Math.random() * text.length + 1)] + " ";
			if(tmp.length === countWord(tmp)){
				break;
			}
		}
		tmp += "\n\n";
	}
	return tmp;
}
module.exports = {
    generateString
}