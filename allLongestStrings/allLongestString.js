function allLongestStrings(inputArray) {
    var maxLengthStr=inputArray.sort( (a,b) => a.length < b.length )[0].length;
    return inputArray.filter( v => v.length === maxLengthStr);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));