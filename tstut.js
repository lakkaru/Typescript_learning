var myName = "Lakshman Prabash";
var myAge = 42;
var canVote = true;
var anything = "dog";
anything = 2;
document.getElementById("tsStuff").innerHTML = "My name is " + myName;
document.write("Can vote is a " + typeof (canVote) + "<br/>");
document.write("My name is a " + typeof (myName) + "<br/>");
document.write("Anything is a " + typeof (anything) + "<br/>");
var strToNum = parseInt("5");
var numToStr = 5;
document.write("numToStr is a " + typeof (numToStr.toString()) + "<br/>");
var PI = 3.141;
var superman = {
    realName: "Karunasena",
    superName: "Superman"
};
document.write(superman.realName + " is " + superman.superName + "<br/>");
var emploees = ["Bob", "Brad", "Neel"];
document.write(emploees.toString() + "<br/>");
document.write(emploees[1].toString() + "<br/>");
var superHeros = [];
superHeros.push({
    realName: "Lakshman",
    superName: "lakkaru"
});
document.write(superHeros[0].realName + " is " + superHeros[0].superName + "<br/>");
var sampleLet = 123;
if (true) {
    var sampleLet_1 = 456;
}
document.write("sampleLet " + sampleLet + "<br/>");
var sampleVar = 123;
if (true) {
    var sampleVar = 456;
}
document.write("sampleVar " + sampleVar + "<br/>");
