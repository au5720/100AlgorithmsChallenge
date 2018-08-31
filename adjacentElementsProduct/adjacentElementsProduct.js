function adjacentElementsProduct(inputArray) {
    var pairs=inputArray.map( (a,b) => [a,inputArray[b+1]]).filter( v => v[1] !== undefined);
    return pairs.map( (v,i) => [v[0] * v[1],i]).sort( (a,b) => a[0] < b[0])[0][0];
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));