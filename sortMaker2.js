function sortMaker(arr) {
    let myArray = [];
    // console.log(arr);
    if (Array.isArray(arr) !== true || typeof arr === "string") {
        return "Please Provide An Array";
    }
    else if (arr.length > 2) {
        return "length Excided";
    }
    else {
        for (const iterator of arr) {
            if(iterator < 0) {
                return "Invalid Input";
            }
            else {
                myArray.push(iterator);
            }
        }
    }
    if(myArray[0] < myArray[1]) {
        [myArray[0], myArray[1]] = [myArray[1], myArray[0]];
        return myArray;
    }
    else if (myArray[0] === myArray[1]) {
        return "equal";
    }
    else {
        return myArray;
    }
}

console.log(sortMaker([1,2]));
console.log(sortMaker([2,5]));
console.log(sortMaker([4,-2]));
console.log(sortMaker([4,4]));
// console.log(sortMaker("sti"));
// console.log(sortMaker(200));

