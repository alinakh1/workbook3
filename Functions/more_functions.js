



function displayMailingLabel(name, address, city, state, zip){
    console.log(name);
    console.log(address);
    console.log(city + ", " + state + "  " + zip);

}

let n = "Alina";
let a = "3333 Ocean Ave";
let c = "Brooklyn"; 
let s = "NY";
let z = "11235";

let n1 = "Anna";
let a1 = "33 Ocean Ave";
let c1 = "Brooklyn"; 
let s1 = "NY";
let z1 = "11235";

displayMailingLabel(n, a, c, s, z);
displayMailingLabel(n1, a1, c1, s1, z1);



function addNumbers(num1, num2){

    console.log(num1 + "+" + num2 + "=" + num3);
}

let num1 = 10;
let num2 = 20;
let num3 = num1 + num2;

addNumbers(num1, num2);




function displayReceipt(total, paid, change){
    console.log("Total Due: " + total);
    console.log("Amount Paid: " + paid);
    console.log("Change Due: " + change);
}

let total = 93;
let paid = 100;
let change = paid - total;

let total1 = 50;
let paid1 = 100;
let change1 = paid1 - total1;

displayReceipt(total, paid, change);
displayReceipt(total1, paid1, change1);