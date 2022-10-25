/* const numberField1 = document.getElementById("numberField1");
const numA = 1.8;
const numB = 32;

let num1AsString = numberField1.value;


let num1AsNumber = Number(num1AsString);

let answer = (num1AsNumber * numA) + numB ;*/

function convertFtoC(celsiusTemp, fahr)
{
    console.log(fahr + " F " + celsiusTemp + " in C ");
    if (fahr == 212){
        celsiusTemp = (fahr - b) * a;
    }
    else if (fahr == 90){
        celsiusTemp = (fahr - b) * a;
    }
    else if (fahr == 72){
        celsiusTemp = (fahr - b) * a;
    }
    else if (fahr == 32){
        celsiusTemp = (fahr - b) * a;
    }
    else if (fahr == 0){
        celsiusTemp = (fahr - b) * a;
    }
    else if (fahr == -40){
        celsiusTemp = (fahr - b) * a;
    }
}

const a =5/9;
const b = 32;
let fahr =-40;
let celsiusTemp = (fahr - b) * a;

convertFtoC(celsiusTemp, fahr);


function convertCtoF(fahrTemp, cels)
{
    console.log(cels + " C " + fahrTemp + " in F ");
    if (cels == 100){
        fahrTemp = (cels * c) + d;
    }
    else if (cels == 45){
        fahrTemp = (fahr *c ) + d ;
    }
    else if (cels == 19){
        fahrTemp = (fahr *c ) + d ;
    }
    else if (cels == 0){
        fahrTemp = (fahr *c ) + d ;
    }
    else if (cels == -7){
        fahrTemp = (fahr *c ) + d ;
    }
    else if (cels == -40){
        fahrTemp = (fahr *c ) + d ;
    }
}

const c =1.8;
const d = 32;
let cels =-40;
let fahrTemp = (fahr *c ) + d ;

convertCtoF(fahrTemp, cels);
