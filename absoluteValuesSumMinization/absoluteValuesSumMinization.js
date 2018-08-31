function absoluteValuesSumMinimization(a){
   a.sort();
   var total=0;
   var results=[];
   console.log(a);
   for(var i=0; i < a.length; i++) {
    for(var ii=0; ii < a.length; ii++) {
        var aa=a[ii];
        var v=a[i];
        var vv=Math.abs(aa-v);
        console.log(aa + ' ' + v + ' ' + vv);
        total=total + Math.abs(a[ii] - a[i]);
    }
    console.log(total);
    console.log('--------------------------');
    results.push(total);
    total=0
   }

   results.sort();
   console.log(results);
   return results[0];
}

function assertEqual(actual, expected, testName) {
    if(actual === expected) {
        console.log('passed - ' + testName);
    } else {
        console.log('failed - ' + testName + ' Expected: ' + expected + ' but got ' + actual);
    }
}
//console.log(absoluteValuesSumMinimization([2, 4, 7]));
assertEqual(absoluteValuesSumMinimization([2, 4, 7]), 4, 'test 1');

//console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
//assertEqual(absoluteValuesSumMinimization([2, 4, 7, 6]), 4, 'test 2');

// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
//assertEqual(absoluteValuesSumMinimization([2, 4, 7, 6, 6]), 7, 'test 3');

// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
//assertEqual(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]), 7, 'test 4');