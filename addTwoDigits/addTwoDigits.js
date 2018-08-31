function addTwoDigits(n) {
    return (n + '').split('').reduce( (a, b) => parseInt(a) + parseInt(b));
}

console.log(addTwoDigits(29));