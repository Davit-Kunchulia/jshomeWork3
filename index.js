
// 1
let array=[2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8]

let mimateba = 0 

function dadebit() {

       for( i = 0; i < array.length; i++){
        if(array[i] > 0){
            return mimateba = mimateba + array[i]
        }
    
       }
       
}
let results = dadebit()
console.log(results);


// 2
function sum(num1, num2, num3, num4, num5, num6, num7, num8, num9) {

    return num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9
}
let result = sum(10, 50, 6, 7, 8, 11, 6, 3, 9)
console.log(result);


// 3
let user = {
    firstname: 'tom',
    lastname: 'tobias',
    age: 32,
    isloggedin: true
}

function log(params) {
    if (user.isloggedin == true) {
        console.log(user.firstname, user.lastname);
    }
    else {
        console.log("false");
    }
}
log()


// 6
let array1 = [1, 2, 3, 4, 5];

function reverse(arr) {

    for (i = 0; i > arr.length; i--) {

    }
    return arr[i]
}
console.log(reverse(array1));


// 8
function metoba(number1, number2) {
    number1 = 20
    number2 = 25

    if (number1 > number2) {
        console.log(" num1 is the largest");
    }
    else if (number1 < number2) {
        console.log("num2 is the largest");
    }
    else {
        console.log("error");
    }

}
metoba()