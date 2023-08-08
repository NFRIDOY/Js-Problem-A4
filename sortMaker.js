function sortMaker(arr) {
    let max = 0;
    let result = [];
    if (arr.length === 2) {
        for (let i=0; arr.length; i++) {

            if (arr[i] < 0) {
                return "Invalid Input";
            }
            // else if (arr[i] === max) {

            //     return "equal";
            // }
            else {
                if (i > max) {
                    // max = i; 
                    // result.push(max);
                    // result.push(i+1);
                    // return result;
                    max = arr[i]; 
                    result.push(max);
                    result.push(arr[i+1]);
                    return result;
                }
                else {
                    // max = i;
                    // result.push(i);
                    // result.push(arr[i+1]);
                    // return result;
                    max = arr[i];
                    result.push(arr[i]);
                    result.push(arr[i+1]);
                    return result;
                    
                }
                
                // else {
                //     return -1;
                // }
            }

            // else if (arr[i] > arr[i+1]) {
            //     return [arr[i],arr[i+1]];
            // }


        }
    }
    else {
        return "Please Provide An Array of 2 index as Input";
    }
}

console.log(sortMaker([1, 2])); // 
console.log(sortMaker([2, 1])); // 
// console.log(sortMaker([2,2])); // 