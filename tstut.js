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
