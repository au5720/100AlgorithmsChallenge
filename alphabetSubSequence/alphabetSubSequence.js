function alphabetSubsequence(s) {
    var arr=s.split('').map(v => v.charCodeAt(0));
    for(var i=0; i < (arr.length - 1); i++) {
        var num1=arr[i];
        var num2=arr[i+1];
        console.log(num1 - num2);
        if( (num1 - num2) >= 0 ) {
            return false;
        }
    } 
    return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))


