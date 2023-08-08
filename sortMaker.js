function sortMaker(arr) {
    if(arr.length === 2) {
        for(let i of arr) {
            
            if(arr[i] < 0) {
                return "Invalid Input";
            }
            else if (arr[i] === arr[i+1]) {
                console.log(arr);
                console.log(arr[i]);
                console.log(arr[i+1]);
                return "equal";
            }
            else if (arr[i] < arr[i+1]) {
                return [arr[i+1],arr[i]];
            }
            else if (arr[i] > arr[i+1]) {
                return [arr[i],arr[i+1]];
            }
        }
    }
    else {
        return "Please Provide An Array of 2 index as Input";
    }
}

console.log(sortMaker([1,2]));