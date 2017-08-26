var pro = {
    randNumber : (start,end) => {
        if(start === undefined && end === undefined){
            return Math.random();
        }
        else if(start != undefined){
            return Math.floor(Math.random() * (100-start + 1)) + start;
        }
        return Math.floor(Math.random()*(end-start+1)) + start;
    }
}
module.exports = pro;