const chai = require('chai'),
      assert = chai.assert;
const index = require('./../index');
const names = require('./../data/names');
const util = require('./../lib/util')
      countWord = util.countWord,
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

    it("Generate String Should equal to the word arguments",function(){
        let res,
            letters = 50,
            paragraph = 1;
        res = index.generateString(letters,paragraph);
        assert.equal(res.length,countWord(res));
    });

    it("Generate Email Should be a Valid Email",function(){
        let email = index.generateEmail();
        assert.equal(checkEmail(email),true);
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