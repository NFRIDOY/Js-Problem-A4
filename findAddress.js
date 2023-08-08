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


// let obj = { street: 10, house: "15A", society: "Earth Perfect" };
// // console.log(findAddress(obj));

// obj = { street: 10, society: "Earth Perfect" };
// // console.log(obj.hasOwnProperty("house")); // false

// console.log(findAddress(obj));

// obj = { street: 10 };

// console.log(findAddress(obj));

let obj1 = { street: 10, house: "15A", society: "Earth Perfect" };
let obj2 = { street: 10, society: "Earth Perfect" };
let obj3 = { street: 10 };

console.log(findAddress(obj1));
console.log(findAddress(obj2));
console.log(findAddress(obj3));