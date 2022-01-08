// if the number length equals to 1 then return ture.
function is_monotonous(num){
    if(num.length===1){
        return true;  
    }

// assign that number direction is the index from second minues the first. 
const numberDirection = num[1]-num[0];
//check if the second item minues first item * [(number item +1)-item]. if result < 1 then it's strictly decreasing, return false, if not, return ture. 
for (var i = 0; i<num.length-1;i++){
    if (numberDirection*(num[i+1]-num[i])<=0){
        return false;
    }
}
return true;
}
console.log(is_monotonous([1, 2, 3]));
console.log(is_monotonous([1, 2, 2]));
console.log(is_monotonous([-3, -2, -1]));

//another solution
function checkNum(arr) {
    let result = false
    for (let i = 0; i < arr.length - 1; i ++) {
    if (( arr[i + 1] - arr[i] == 1) || (arr[i + 1] - arr[i] == -1) ){
    result = true
    } else {
    result = false
    break
    }
    }
    
    return result
    }
    console.log(checkNum([-3, -2, -1])) 
    console.log(checkNum([-3, -2, 0,2,3])) 
    console.log(checkNum([4, 3, 2])) 

    
