function arrayChange(inputArray) {
    var movesCounter=0;
    for(var x=1; x < inputArray.length; x++) {
            var previousVal=inputArray[x-1];
            var currentValue=inputArray[x];
        while(currentValue <= previousVal){
            movesCounter++;
            currentValue++;
        }
        inputArray[x]=currentValue;
    }
    return movesCounter;
}

console.log(arrayChange([1, 1, 1]));