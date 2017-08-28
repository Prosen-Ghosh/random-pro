var pro = {
    randNumber : (start,end) => {
        if(start === undefined && end === undefined){
            return Math.random();
        }
        else if(start != undefined && end === undefined){
            return Math.floor(Math.random() * (100000)) + start;
        }
        return Math.floor(Math.random()*(end-start+1)) + start;
    },
    randEvenNumber : (start,end) => {
        if(start === undefined && end === undefined){
            return (Math.floor((Math.random() * 1000000)/2)) * 2;
        }
        else if(start != undefined && end === undefined){
            return ((Math.floor((Math.random() * (1000000)) / 2)) + start) * 2;
        }
        return (Math.floor((Math.random()*(end-start+1)) / 2) + start) * 2;
    },
    randOddNumber : (start,end) => {
        if(start === undefined && end === undefined){
            return ((Math.floor((Math.random() * 1000000)/2)) * 2) + 1;
        }
        else if(start != undefined && end === undefined){
            return (((Math.floor((Math.random() * (1000000)) / 2)) + start) * 2) + 1;
        }
        return ((Math.floor((Math.random()*(end-start+1)) / 2) + start) * 2) + 1;
    }
}
module.exports = pro;