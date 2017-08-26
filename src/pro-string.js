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
var generateToken = function(bit = 32,prefix){
	let res = prefix !== undefined ? prefix + "-" : "",
		tmp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&_=+-/*";
	bit/=4;
	for(let i = 0; i < bit; i++){
		res+= tmp[Math.floor(Math.random() * tmp.length)];
	}
	return res;

}
module.exports = {
	generateString,
	generateToken
}