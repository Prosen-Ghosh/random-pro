const chai = require('chai'),
      assert = chai.assert;
const index = require('./../index');
const names = require('./../data/names');

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