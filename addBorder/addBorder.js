function addBorder(picture) {
    var frame = [];
    var headTail = '*'.repeat(picture.length+2);
    frame.push( headTail );
    frame = frame.concat( picture.map(v => '*' + v + '*'));
    frame.push( headTail );
    return frame;
}

console.log(addBorder(["abc", "ded"]));
