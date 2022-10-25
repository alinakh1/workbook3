
function getSocSecTax(grossPay, socSecTax, taxRate) {
    console.log("The SS tax is " + taxRate);
}
let grossPay = 20000;
let socSecTax = 6.2 / 100;
let taxRate = socSecTax * grossPay;

getSocSecTax(grossPay, socSecTax, taxRate)


function getMedicareTax(payGross, medicareTax, taxMed) {
    console.log("The Medicare tax is " + taxMed);
}
let payGross = 20000;
let medicareTax = 1.45 / 100;
let taxMed = medicareTax * payGross;

getMedicareTax(payGross, medicareTax, taxMed)



function getFederalTax(grossPay3, withholdingCode) 
{
    let fedTax;

  
    if (withholdingCode == 0)       { taxRate1 = 23/100;}
    else if (withholdingCode == 1)  { taxRate1 = 21/100;}
    else if (withholdingCode == 2)  { taxRate1 = 19.5/100;}
    else if (withholdingCode == 3)  { taxRate1 = 18.5/100;}
    else if (withholdingCode == 4)  { taxRate1 = 18/100;}

    fedTax = taxRate1 * grossPay3;  

    return fedTax;
}

let grossPay3 = 20000;
let withholdingCode = 0;


let fedTax = getFederalTax(grossPay3, withholdingCode);


console.log("Federal Tax Withholding will be " + fedTax );



