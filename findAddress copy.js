function findAddress(obj) {
    // console.log(obj);
    let output = "";
    const properties = ['street', 'house', 'society'];
    let store = [];
    // console.log(properties);
    // if (!obj.hasOwnProperty('b')) {
    //     // console.log('Property "b" is missing');
    // }
    for (let i = 0; i < 3; i++) {
        if(!obj.hasOwnProperty(properties[i])) {
            obj[properties[i]] = '__';
            store.push(i);
        }
        
    }
    console.log(store);
    for (const key in obj) {
        if (!obj.hasOwnProperty(key)) {
            console.log("output");

            obj[key] = "__";
            output += obj[key];
            // output += "__";
        }
        // if (obj[key] === undefined) {
        //     obj.key = "__";
        //     output += obj.key;
        // }
        else {
            // console.log(output);
            const element = obj[key];
            if (key !== "street") {
                output += "," + element;
            }
            else {
                output += element;
            }
        }
    }
    return output;

    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];

        }
    }
}


let obj = { street: 10, house: "15A", society: "Earth Perfect" };
// console.log(findAddress(obj));

obj = { street: 10, society: "Earth Perfect" };
// console.log(obj.hasOwnProperty("house")); // false

console.log(findAddress(obj));

// obj = { street: 10 };

// console.log(findAddress(obj));