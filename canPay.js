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

console.log(canPay([1,5,5],10));
console.log(canPay([],10));
console.log(canPay("sfghsdfh",10));