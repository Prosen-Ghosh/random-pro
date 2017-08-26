var countWord = (str) => {
    return str.length;
}

var checkEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
module.exports = {
    countWord,
    checkEmail
}