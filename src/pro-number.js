var pro = {
    randNumber : (start,end) => {
        if(start === undefined && end === undefined){
            return Math.random();
        }
        else if(start != undefined && end === undefined){
            return Math.floor(Math.random() * (1000-start)) + start;
        }
        return Math.floor(Math.random()*(end-start+1)) + start;
    }
}
module.exports = pro;