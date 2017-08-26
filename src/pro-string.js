var text = require('./../data/text');

var generateString = function(words = 1,paragraph = 1){
    
    let tmp = '';
	for(let i = 0; i < paragraph; i++){
		for(let j = 0; j < words; j++){
			tmp += text[Math.floor(Math.random() * text.length + 1)] + " ";
		}
		tmp += "\n\n";
	}
	return tmp;
}
module.exports = {
    generateString
}