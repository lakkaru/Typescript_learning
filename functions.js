function getSum(num1, num2) {
    return num1 + num2;
}
// console.log(getSum(3,6));
var mySum = function (num1, num2) {
    if (typeof (num1 == 'string')) {
        num1 = parseInt(num1);
    }
    if (typeof (num2 == 'string')) {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
// console.log(mySum('4',1));
function getName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
// console.log(getName('Lakshman', 'Karunasena'));
function ignoreName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + ' ' + lastName;
}
console.log(ignoreName('Lakshman'));
function myVoid() {
    return;
}
