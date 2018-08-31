function alphabeticShift(inputString) {
    var str='';
    for(var i=0; i < inputString.length; i++) {
        var num=inputString[i].charCodeAt(0) + 1;
        if(num > 122) {
            str = str + String.fromCharCode(97);
        } else {
            str = str + String.fromCharCode(num);
        }
    }
}

console.log(alphabeticShift('crazy'));