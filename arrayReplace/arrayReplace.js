function arrayReplace(inputArray, elemToReplace, substitutionElem ) {
   return inputArray.map( v => v === elemToReplace ? substitutionElem : v );
}

console.log(arrayReplace([1, 2, 1], 1, 3));