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

            return "Please Don't Provide An Emplty Array as Input";
        }
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

// console.log(cubeNumber(3));
// console.log(cubeNumber(4));
// console.log(cubeNumber("jfghf"));

// console.log(matchFinder("John Doe", "ohn"));
// console.log(matchFinder("JavaScript", 1));

// console.log(sortMaker([1,2]));
// console.log(sortMaker([2,5]));
// console.log(sortMaker([4,4]));
// console.log(sortMaker([4,-2]));
// console.log(sortMaker([4]));
// console.log(sortMaker("sti"));
// console.log(sortMaker(200));

// let obj1 = { street: 10, house: "15A", society: "Earth Perfect" };
// let obj2 = { street: 10, society: "Earth Perfect" };
// let obj3 = { street: 10 };

// console.log(findAddress(obj1));
// console.log(findAddress(obj2));
// console.log(findAddress(obj3));

// console.log(canPay([1,5,5],10));
// console.log(canPay([],10));
// console.log(canPay("sfghsdfh",10));