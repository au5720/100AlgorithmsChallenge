function almostIncreasingSequence(sequence) {
    var removeCnt=0;
    for(var i=0; i < (sequence.length - 1); i++) {
        var thisElement=sequence[i];
        var nextElement=sequence[i+1];
        if((thisElement + 1) !== nextElement) {
            removeCnt++;
            i++;
        }
    }  
    if(removeCnt === 1){
        return true;
    } else {
        return false;
    }
}

function testSeq(a,b) {

}

console.log(almostIncreasingSequence([1, 2, 3, 5, 4])); 
console.log(almostIncreasingSequence([1, 3, 2])); 
