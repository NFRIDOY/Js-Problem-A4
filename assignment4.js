function cubeNumber(number) {
    if(typeof number !== "number"){
        return "Please Provide Number as Input";
    }
    else {
        return Math.pow(number,3);
    }
}

function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "Please Provide strings as Input";
    }
    else {
        return string1.includes(string2);
    }
}

function sortMaker(arr) {
    let myArray = [];
    // console.log(arr);
    if (Array.isArray(arr) !== true || typeof arr === "string") {
        return "Please Provide An Array";
    }
    else if (arr.length > 2 || arr.length <= 1) {
        return "Provide A Valid Length Array";
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

