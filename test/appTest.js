const chai = require('chai'),
      assert = chai.assert;
const index = require('./../index');
const names = require('./../data/names');
const util = require('./../lib/util')
countSentences = util.countSentences,
      checkEmail = util.checkEmail;

describe("Index",function(){
    it("Generate Number type should be a number.",function(){
        assert.typeOf(index.generateNumber(),"number");
    });
    it("Generate Name type should be a string.",function(){
        assert.typeOf(index.generateName(),"string");
    });
    it("Generate Last Name type should be a string.",function(){
        assert.typeOf(index.generateLastName(),"string");
    });
    it("Generate Full Name type should be a string.",function(){
        assert.typeOf(index.generateFullName(),"string");
    });
    it("Generate Full Name type should be a string.",function(){
        assert.typeOf(index.generateEmail(),"string");
    });
    it("Generate String type should be a string.",function(){
        assert.typeOf(index.generateString(),"string");
    });
    it("Generate Number Should Be Above 10",function(){
        let start = 5,
            res;
        res = index.generateNumber(10);
        assert.isAbove(res,10);
    });
    it("Generate Number Should Be Between 5 to 100",function(){
        let res,
            start = 5,
            end = 100;
        res = index.generateNumber(start,end);
        assert.isAtLeast(res, start);
        assert.isAtMost(res,end);
    });

    it("Generate String Should equal to the sentences arguments",function(){
        let res,
            sentences = 50,
            paragraph = 1;
        res = index.generateString(sentences,paragraph);
        assert.equal(sentences,countSentences(res));
    });

    it("Generate Email Should be a Valid Email",function(){
        let email = index.generateEmail();
        assert.equal(checkEmail(email),true);
    });

    it("Generate Token Should be String",function(){
        assert.typeOf(index.generateToken(),"string");
    });

    it("Generate Token Should 32 bit",function(){
        let bit = 32,
            res = index.generateToken(bit);
        assert.equal(res.length,bit/4);
    });

    it("Generate Token Should 128 bit",function(){
        let bit = 128,
            res = index.generateToken(bit);
        assert.equal(res.length,bit/4);
    });
    it("Generate Token Should add prefix to it",function(){
        let bit = 32,
            res = index.generateToken(bit,"PRO");
        assert.equal(res.slice(0,3),"PRO");
    });
    it("Generate Password Should return a string",function(){
        let res = index.generatePassword();
        assert.typeOf(res,"string");
    });

    it("Generate Password returned string should equal to length",function(){
        let l = 16,
            res = index.generatePassword("easy",l);
        assert.equal(res.length,l);
    });

    it("Generate Password returned string should equal to 6",function(){
        let res = index.generatePassword("strong");
        assert.equal(res.length,6);
    });

    it("Generate Birth Date Should return string",function(){
        let res = index.generateBirthDate();
        assert.typeOf(res,"String");
    });
    it("Generate Birth Date Should match the format like 'DD-MM-YYYY'",function(){
        let res,format = "DD-MM-YYYY";
        res = index.generateBirthDate(format);
        // var yearReg = '(199[0-9]|20[0-9])';
        // var monthReg = '(0[1-9]|1[0-2])'; 
        // var dayReg = '(0[1-9]|1[0-9]|2[0-9]|3[0-1])';
        assert.equal(/^([1-9]|1[0-9]|2[0-9]|3[0-1])-([1-9]|1[0-2])-(19[7-9][0-9]|200[0-9]|201[0-9])$/g.test(res),true);
    });
    
    it("Generate Birth Date Should match the format like 'DD/MM/YYYY'",function(){
        let res,format = "DD/MM/YYYY";
        res = index.generateBirthDate(format);
        assert.equal(/^([1-9]|1[0-9]|2[0-9]|3[0-1])[/]([1-9]|1[0-2])[/](19[7-9][0-9]|200[0-9]|201[0-9])$/g.test(res),true);
    });
    it("Generate Even Number Should return a number",function(){
        let res = index.generateEvenNumber();
        assert.typeOf(res,'number');
    });
    it("Generate Even Number Should always return even number",function(){
        let res = index.generateEvenNumber();
        assert.equal(res %2 == 0,true);
    });
    it("Generate Even Number Should always number between the given range",function(){
        let res = index.generateEvenNumber(30,500);
        assert.isAtLeast(res, 30);
        assert.isAtMost(res,500);
    });
    it("Generate Odd Number Should return a number",function(){
        let res = index.generateOddNumber();
        assert.typeOf(res,'number');
    });
    it("Generate Odd Number Should always return Odd number",function(){
        let res = index.generateOddNumber();
        assert.equal(res %2 != 0,true);
    });
    it("Generate Odd Number Should always number between the given range",function(){
        let res = index.generateOddNumber(30,500);
        assert.isAtLeast(res, 30);
        assert.isAtMost(res,500);
    });
    
    // it("Generate Name should return a name from the First name male array."),function(done){
    //     let res = index.generateName(),
    //         arrayVal = false;
    //     names.firstNameMale.forEach(function(val){
    //         if(val === res){
    //             arrayVal = true;
    //         }
    //     });
    //     assert.equal(arrayVal,true,'Yes This value is present.');
    //     done();
    // };
})