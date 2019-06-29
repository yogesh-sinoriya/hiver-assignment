function group(arr){
    var result = {};
    for(let i = 0; i<arr.length; i++){
        let temp = arr[i].split('').sort().join('');
        if(!result[temp]) result[temp]=[];
        result[temp].push(arr[i])
    }
    let keys = Object.keys(result);
    
    let max = 0;
    let key ='';
    for(let i=0; i<keys.length; i++){
        if(max<result[keys[i]].length){
            max = result[keys[i]].length;
            key = keys[i];
        }
    }
    return Object.values(result[key]);
}
var arr = ["abc", "abfr", "gkn", "cab", "frba", "qgf", "gqf", "bac"] ;
console.log(group(arr));
