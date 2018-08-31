function alternatingSums(a) {
    var team1=a.filter((v,i) => (i % 2) === 0).reduce( (a,b) => a + b);
    var team2=a.filter((v,i) => (i % 2) !== 0).reduce( (a,b) => a + b);
    
    return [team1, team2];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))