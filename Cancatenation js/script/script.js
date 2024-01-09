function btn1(){
    let x = +prompt("Enter First value to concatenate");
    let y = +prompt("Enter Second value to concatenate");
    let z =(x+"+"+y);
    document.getElementById('output').innerHTML= (z);
    document.getElementById('result').innerHTML= (x+y);
}
// -----------------------------------------------------------------------
function btn2(){
    let x = prompt("Enter First Name");
    let y = prompt("Enter Second Name");
    let z =(x+"+"+y);
    document.getElementById('output').innerHTML= (z);
    document.getElementById('result').innerHTML= (x+y);
}
// ---------------------------------------------------------------------------
function btn3(){
    let x = +prompt("Enter First Number");
    let y = +prompt("Enter Second Number");
    document.getElementById('output').innerHTML= (x+"==="+y);
    if(x===y){
        // document.write("Your Answer is True");
    document.getElementById('result').innerHTML= "Both values are equal.";
    }
    else{
        // document.write("Your Answer is wrong");
    document.getElementById('result').innerHTML= "Both values are not equal.";
    }
}
// ---------------------------------------------------------------------------
function btn4(){
    let x = +prompt("Enter your age");
    let y = +prompt("Enter Your weight");
    document.getElementById('output').innerHTML= (x+" "+y);
    if(x<=15 && y<=20 ){
        // document.write("Your Answer is True");
    document.getElementById('result').innerHTML= "You are a Child.";
    }
    else if(x>=15 && y>=20 ){
        // document.write("Your Answer is wrong");
    document.getElementById('result').innerHTML= "You are a Person.";
    }
    else{
        document.getElementById('result').innerHTML= "You are not a human.";
     }
}
// -----------------------------------------------------------------------------
function btn5(){
    let x = +prompt("Enter your age");
    let y = +prompt("Enter Your weight");
    document.getElementById('output').innerHTML= (x+" "+y);
    if(x<=15 && y<=20 ){
        // document.write("Your Answer is True");
    document.getElementById('result').innerHTML= "You are a Child.";
    }
    else if(x>=15 && y>=20 ){
        // document.write("Your Answer is wrong");
    document.getElementById('result').innerHTML= "You are a Person.";
    }
    else{
        document.getElementById('result').innerHTML= "You are not a human.";
     }
}

// -----------------------------------------------------------------------------
function btn6(){
    let x = +prompt("Enter your age");
    let y = +prompt("Enter Your weight");
    document.getElementById('output').innerHTML= (x+" "+y);
    if(x<=15 && y<=20 ){
        // document.write("Your Answer is True");
    document.getElementById('result').innerHTML= "You are a Child.";
    }
    else if(x>=15 && y>=20 ){
        // document.write("Your Answer is wrong");
    document.getElementById('result').innerHTML= "You are a Person.";
    }
    else{
        document.getElementById('result').innerHTML= "You are not a human.";
     }
}

// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
function btn7(){
    let x = prompt("Enter Your Name");
    let y = +prompt("Enter Your Password");
    document.getElementById('output').innerHTML= (x+" "+y);
    if(x==='adim' && y===123 ){
        // document.write("Your Answer is True");
    document.getElementById('result').innerHTML= "You are Eligible.";
    }
    else{
        // document.write("Your Answer is wrong");
    document.getElementById('result').innerHTML= "You are not Eligible.";
    }
}
function Clear(){
    document.getElementById('output').innerHTML= "";
}
function ClearResult(){
    // console.log("fhweh")
    document.getElementById('result').innerHTML= "";
}

