function group(arr){
    var result = {};
    for(let i = 0; i<arr.length; i++){
        let temp = arr[i].split('').sort().join('');
        if(!result[temp]) result[temp]=[];
        result[temp].push(arr[i])
    }
    return Object.values(result);
}
var arr = ["abc", "abfr", "gkn", "cab", "frba", "qgf", "gqf", "bac"] ;
console.log(group(arr));

