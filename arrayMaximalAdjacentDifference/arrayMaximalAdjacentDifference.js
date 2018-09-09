function arrayMaximalAdjacentDifference(inputArray) {
    return inputArray.map( (v, i, a) => Math.abs( v - a[i-1] ) )
                    .filter(Number.isInteger)
                    .sort()
                    .reverse()[0];
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));

