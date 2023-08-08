function cubeNumber(number) {
    if(typeof number !== "number"){
        return "Please Provide Number as Input";
    }
    else {
        return Math.pow(number,3);
    }
}

console.log(cubeNumber(3));
console.log(cubeNumber(4));
console.log(cubeNumber("jfghf"));