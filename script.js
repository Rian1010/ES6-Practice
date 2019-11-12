// Classes

class Car {
    constructor(brand, year) {
        this.carname = brand;
        this.carYear = year;
        console.log(this);
    }
}

var carType = new Car("Ford", "1998");

document.getElementById("text").innerHTML = carType.carname;
document.getElementById("text2").innerHTML = carType.carYear;



// Parameter Values
var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex((theSelNum));

document.getElementById("params").innerHTML = "First number over 18 is " + first;

function theSelNum (value, index, array) {
    return value > Math.floor(Math.random()*numbers.length);
}
console.log(Math.floor(Math.random()*numbers.length));



// forEach()

var txt = "";
var number = [1,2,3];

/* number.forEach(txtEdit); */
var theNumbers = number.map(txtEdit);

document.getElementById("forEachJS").innerHTML = txt;

function txtEdit(arrValue) {
    // txt += arrValue //123
    txt += "<p>"+arrValue+"</p>";
}



// Filter
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(filterFunction);

document.getElementById("filter").innerHTML = over18;

function filterFunction(value, index, array) {
    return value > 18;
}



// Reduce
var numbers = [1, 2, 3];
var sum = numbers.reduce(reduceFunction);
// OR var sum = numbers.reduceRight(reduceFunction);

document.getElementById("reduce").innerHTML = sum;

function reduceFunction(total, value, index, array) {
    return total + value;
}



// Every
var numbers = [45, 4, 9, 16, 25];
var allOver18 = number.every(everyFunction);

document.getElementById("every").innerHTML = "All values are over 18: " + allOver18;

function everyFunction(value) {
    return value > 18;
}



// Some
var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(someFunction);

document.getElementById("some").innerHTML = "Some values are over 18: " + someOver18;

function someFunction(value) {
    return value > 18;
}



// Parse
var txt = '{"name":"John", "age":30, "city":"New York"}';
var obj = JSON.parse(txt);

document.getElementById("parse").innerHTML = obj.name + ", " + obj.age + ", " + obj.city;


// Stringify
var obj = {"name":"John", "age":"30", "city":"New York"};
var theJSON = JSON.stringify(obj);

document.getElementById("stringify").innerHTML = theJSON;



// Date.now
document.getElementById("date").innerHTML = Date.now();

var d = new Date();

document.getElementById("date2").innerHTML = d.getTime();



// Set & Get
var person = {
    firstName: "John",
    lastName: "Doe",
    language: "NO",
    get lang() {
        return this.language;
    },
    set lang(value) {
        this.language = value;
    }
};

// Set an object property using a setter:
person.lang = "English";

// Display data from the object using a getter:
document.getElementById("setget").innerHTML = person.lang;



// defineProperty()

// Make an object
var person = {
    firstName: "John",
    lastName: "Doe",
    language: "No",
};

// Change a Property
Object.defineProperty(person, "language", {
    value: "EN",
    writable : true,
    enumerable : true,
    configurable : true
});

// Enumerate Properties
txt = "";
for (var x in person) {
    txt += person[x] + "<br>";
}

document.getElementById("defineProperty").innerHTML = txt;



