var myName:String="Lakshman Prabash";
var myAge:number=42;
var canVote:boolean=true;
var anything:any="dog";
anything=2;

document.getElementById("tsStuff").innerHTML="My name is "+ myName;
document.write("Can vote is a "+ typeof(canVote)+"<br/>");
document.write("My name is a "+ typeof(myName)+"<br/>");
document.write("Anything is a "+ typeof(anything)+"<br/>");

var strToNum:number=parseInt("5");
var numToStr:number=5;
document.write("numToStr is a "+ typeof(numToStr.toString())+"<br/>");

const PI=3.141;

interface SuperHero{
    realName:String;
    superName:String;
}

var superman:SuperHero={
    realName:"Karunasena",
    superName:"Superman"
}

document.write(superman.realName+ " is " +superman.superName+"<br/>");