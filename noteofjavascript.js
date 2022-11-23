/*const a=5;
const b=4;

console.log(a+b);
console.log(a*b);
console.log(a/b);


const player ={
    name:"yesy",
    points:10,
    fat:true
};

console.log(player);
console.log(player.points);
player.points=player.points+15;
console.log(player.points);

//function

function sayHello(nameOfPerson, age){
    console.log("Hellomy name is " + nameOfPerson +" and I am " + age +" years old.");
}

console.log("hello");
sayHello("nico", 10);
sayHello("yesy", 23);
sayHello("handong", 30);

//Array.push()

function plus(a,b){
    console.log(a+b);
}
plus(8,60);

function divide(a,b){
    console.log(a/b);
}
divide(2, 3);
*/
/*const player={
    name:"nico",
    sayHello:function(otherPersonsName){
        console.log("hello!"+ otherPersonsName+" nice to meet you");
    },
};

player.sayHello("lynn");

player.sayHello("HANDONG");*/


/*const calculator={
    add:function(a,b){
        return a+b;
    },
    minus:function(a,b){
        return a-b;
    },
    multiply:function(a,b){
        return a*b;
    },
    divide:function(a,b){
        return a/b;
    },
    powerof:function(a,b){
        return a**b;
    },
    
};

const plusResult=calculator.plus(2,3);
const minusResult=calculator.minus(plusResult,3);
const multiplyResult=calculator.multiply(2,minusResult);
const divideResult=calculator.divide(2,3);
const powerOfResult=calculator.powerof(2,3);

console.log(plusResult);

calculator.add(3,5);
calculator.minus(3,5);
calculator.multiply(3,5);
calculator.divide(3,5);
calculator.powerof(3,5);

const age=96;

function calculateKrAge(ageOfForeigner){
    return ageOfForeigner+2;
}
const krAge=calculateKrAge(age);

console.log(krAge);*/

/*const age=parseInt(prompt("How old are you?"));
console.log();
if(isNaN(age) || age<0){
    console.log("Pleas write a positive number");
} else if (age<18){
    console.log("You are too young.");
} else if(age>=18 && age <=50){
    //&&는 and ,||는 or, ===는 is !==는 is not
    console.log("You can drink");
}else if(age>50 && age<=80){
    console.log("You should excercise")
}else{
    console.log("You should stop drinking")

const hellos=document.getElementsByClassName{"hello"};
console.log(hellos;)

const title=document.getElementsByTagName("h1");
console.log(title);

getElementsByTagName:anchor,div, section..

querySelector -->get element by css selector 
querySelectorAll -->get element by css selector all

title.style.color="blue";
}*/

/*const title=document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    //console.log("title was clicked!");
    title.style.color="blue";
}

function handleMouseEnter(){
    title.innerText="mouse is here!";
}

function handleMouseLeave(){
    title.innerText="mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS NO WIFI");
}
function handleWindowOnline(){
    alert("All good");
}
title.addEventListener("click", handleTitleClick);
//title.onclick=handleTitleClick;
//title.addEventListener("mouseenter", handleMouseEnter);
title.onmouseenter=handleMouseEnter;
title.addEventListener("mouseleave", handleMouseLeave);
//handleTitleClick();

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);*/
//prompt는 old 한 concept. 요즘엔 잘 안 씀. alert창을 꾸밀 수 없음. 그래서 요즘 사람들 modal를 새로 만듦.
/*const age=prompt("How old are you?");
console.log(age);*/

/*const h1=document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const currentColor=h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor="tomato";
    }else{
        newColor="blue";
    }
    h1.style.color=newColor;
}

h1.addEventListener("click",handleTitleClick);*/

/*const h1=document.querySelector("div.hello:first-child h1");

function handleTitleClick(){*/
    /*const clickedClass="clicked"
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }else{
        h1.classList.add(clickedClass);
    }*/
   /* h1.classList.toggle("clicked");
}

h1.addEventListener("click",handleTitleClick);*/

/*const body = document.body;

function handleResize() {
  const width = window.innerWidth;

  const bigScreen = "bigScreen";
  const mediumScreen = "mediumScreen";
  const smallScreen = "smallScreen";

  if (width > 1000) {
    body.classList.add(bigScreen);
    body.classList.remove(mediumScreen);
  } else if (width <= 1140 && width >= 700) {
    body.classList.add(mediumScreen);
    body.classList.remove(smallScreen);
  } else {
    body.classList.remove(mediumScreen);
    body.classList.add(smallScreen);
  }
}

window.addEventListener("resize", handleResize);*/

