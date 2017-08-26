var countSentences = (str) => {
    return str.split('.').length;
}

var checkEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
module.exports = {
    countSentences,
    checkEmail
}