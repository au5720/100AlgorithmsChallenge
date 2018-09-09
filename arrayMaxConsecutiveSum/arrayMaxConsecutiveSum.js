function arrayMaxConsecutiveSum(inputArray, k) {
    var answers=[];
    var currentSum=0;
    for(var x=0; x < inputArray.length; x++) {
        if(( x + k ) <= inputArray.length) {
            for(var y=x; y < (x + k); y++) {
                currentSum+=inputArray[y];
            }
            answers.push(currentSum);
            currentSum=0;
        }
    }
    answers.sort().reverse()
    return answers[0];
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));