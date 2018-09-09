function arrayConversion(inputArray){
    var iterationCounter=1;
    var workingArray=[];
    while(inputArray.length > 1) {
        if(iterationCounter % 2 !== 0){
            for(var x=1; x < inputArray.length; x=x + 2) {
                workingArray.push(inputArray[x-1] + inputArray[x]);
            }
        }
        if(iterationCounter % 2 === 0){
            for(var x=1; x < inputArray.length; x=x + 2) {
                workingArray.push(inputArray[x-1] * inputArray[x]);
            }
        }
        inputArray=workingArray;
        workingArray=[];
        iterationCounter++;
    }
    return inputArray;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
