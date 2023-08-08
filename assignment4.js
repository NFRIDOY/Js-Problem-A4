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

function findAddress(obj) {
    const properties = ['street', 'house', 'society'];
    let output = '';

    for (const prop of properties) {
        if (obj.hasOwnProperty(prop)) {
            output += obj[prop] + ',';
        } else {
            output += '__,';
        }
    }

    // Remove the trailing comma
    output = output.slice(0, -1);

    return output;
}

function canPay(changeArray, totalDue) { 
    let sum = 0;
    if (Array.isArray(changeArray) === false) {
        return "Please Provide An Array as Input";
    }
    else {
        if (Array.isArray(changeArray) && changeArray.length === 0) {
            // the array is defined and has no elements
            return "Please Don't Provide An Emplty Array as Input";
        }
        // if (changeArray[0] === 0) {
        //     return "Please Don't Provide An Emplty Array as Input";
        // }
        else {
            for (const i of changeArray) {
                sum += i;
            }
            if (sum >= totalDue) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}

