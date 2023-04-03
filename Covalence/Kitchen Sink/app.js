function sayHello(hello) {
console.log(hello);
}
var hello= alert('Hello World!!!')
//alerts to for practice and to notify user of age restriction access or denial

greeter ("Charles", 21);
greeter ("Abby", 27);
greeter ("James", 18);
greeter ("John", 17);

function greeter(UserName, UserAge) {
    if(UserAge >= 21) {
        alert(UserName + " you are old enough to use this site.")
    }
    else {
        alert("Sorry, " + UserName + " you are not old enough to use this site.")
    }
}

var FavVeg = ["Radishes", "Broccoli", "Cabbage", "Bell Pepper", "Spinach"]
for(var i = 0; i < FavVeg.length; i++) {
    console.log(FavVeg[i]);
}

var OtherUsers = [greeter('Dominica', 35), greeter ("Ethin", 25), greeter ("Alicia", 18), greeter ("Amy", 12), greeter ("Jax", 73)]



const NumOfStates = "50";
//above writen upon request of instructions.
var addition = (5 + 4);
console.log(addition);
//example of addition
var MyName = "Andrew"
//my name writen in a constant, it can not by changed

var pet = {
    Name: "paul",
    Breed: "turtle"
}
console.log(pet.Name,pet.Breed)
//made so that only the name and breed of my pet shall be called up.
var Hello = "Hello World"
function getLength(Object) {
    if (Object.length % 2 == 0) {
        console.log('the world is an even place')
    }
    else {
        console.log('the world is an odd place!')
    }
}
//check may not be working
getLength (Hello)