//Celsius to other measurements
function myFunction1(){
    var c=parseFloat(document.getElementById("p1").value);
    var f=(9*c)/5+32;
    document.getElementById("p2").value=f;
    var k=c+273.15;
    document.getElementById("p3").value=k;
    var r=(c*4)/5;
    document.getElementById("p4").value=r;
}
//Fahrenheit to other measurements
function myFunction2(){
    var f=parseFloat(document.getElementById("p2").value);
    var c=5*(f-32)/9;
    document.getElementById("p1").value=c;
    var k=(f-32)*5/9+273.15;
    document.getElementById("p3").value=k;
    var r=(f-32)/2.25;
    document.getElementById("p4").value=r;
}
//Kelvin to other measurements
function myFunction3(){
    var k=parseFloat(document.getElementById("p3").value);
    var c=k-273.15;
    document.getElementById("p1").value=c;
    var f=(k-273.15)*9/5+32;
    document.getElementById("p2").value=f;
    var r=(k-273.15)*0.8;
    document.getElementById("p4").value=r;
}
//Reaumur to other measurements
function myFunction4(){
    var r=parseFloat(document.getElementById("p4").value);
    var c=(1.25*r);
    document.getElementById("p1").value=c;
    var f=(r*2.25)+32;
    document.getElementById("p2").value=f;
    var k=(r*1.25)+273.15;
    document.getElementById("p3").value=k;
}