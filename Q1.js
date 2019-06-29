
function search_in_grid(marr,sarr){
    let result = 'Not present in the grid.';

    for(let i = 0; i<marr.length; i++){
        for(let j = 0; j<marr[i].length; j++){
            if(marr[i][j]==sarr[0][0]){
                for(let l = 0; l<sarr.length; l++){
                    for(let m = 0; m<sarr[l].length; m++){
                        if(marr[i+l][j+m]==sarr[l][m]){
                            result = 'Present in the grid.';
                        }else{
                            return 'Not present in the grid.';
                        }
                    }   
                }
            }
        }
    }
    return result;
}

let marr = [['1','2','3'], ['4','5','6'], ['7','8','9']];
let sarr = [['5','6'],['8','9']];

console.log(search_in_grid(marr,sarr));

