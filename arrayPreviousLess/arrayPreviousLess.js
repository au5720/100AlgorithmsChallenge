function arrayPreviousLess(items) {
    var answers=[];
    for( var x=0; x < items.length; x++) {
        var currentValue=items[x];
        answers.push(-1);
        for(var y=x; y >= 0; y--) {
            if(items[y] < currentValue){
                answers[x]=items[y];
                break;
            }
        }
    }
    return answers;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));