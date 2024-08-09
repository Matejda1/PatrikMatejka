const display = document.getElementById("realnejDisplej");

function appendToDisplay(input){
    let povolenyZnaky = ["+", "-", "*", "/", "."];
    console.log(input);

    if (povolenyZnaky.includes(input)) {
        if (!povolenyZnaky.includes(display.innerText[display.innerText.length - 1])) {
            display.innerText += input;
        }
    }
    else {
        display.innerText += input;
    }
}

function clearDisplay(){

    console.log("clear")
    display.innerText = "";
}

function calculate(){
    let result = eval(display.innerText);
    
    if (result == 9/0) {
        display.innerText = "err"
    } else {
        display.innerText = result;
    }
}
