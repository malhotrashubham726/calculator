let inputTag = document.getElementsByClassName("input")[0];

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {

        if(event.target.innerHTML == "AC") {
            inputTag.value = "";
        }

        else if(event.target.innerHTML == "+" || event.target.innerHTML == "-" || event.target.innerHTML == "*" || event.target.innerHTML == "/" || event.target.innerHTML == "%" || event.target.innerHTML == "=" || event.target.innerHTML == ".") {
            let len = inputTag.value.length;
            let lastDigit = inputTag.value.slice(-1);
            if(inputTag.value !== "") {
                if(event.target.innerHTML == "=") {
                    try {
                        evaluatedOutput = eval(inputTag.value);
                        inputTag.value = evaluatedOutput;
                    }
                    catch(error) {
                        inputTag.value = "Invalid Operation"
                        setTimeout(() => {
                            inputTag.value = ""
                        },1500)
                    }
                } 
                
                
                else if(lastDigit == "+" || lastDigit == "-" || lastDigit == "/" || lastDigit == "%" || lastDigit == "*" || lastDigit == ".") {
                    if(event.target.innerHTML == "." && lastDigit != ".") {
                        inputTag.value = inputTag.value + "0" + event.target.innerHTML;
                    }
                    else {
                        inputTag.value = inputTag.value.slice(0,len-1)
                        inputTag.value = inputTag.value + event.target.innerHTML;
                    }
                }

                else {
                    inputTag.value = inputTag.value + event.target.innerHTML;
                }
            }

            else if(inputTag.value == "" && event.target.innerHTML == ".") {
                inputTag.value = inputTag.value + "0" + event.target.innerHTML;
            }
        }

        else{
            inputTag.value = inputTag.value + event.target.innerHTML;
        }

    })
})


const clickMe = () => {
    let len = inputTag.value.length;
    inputTag.value = inputTag.value.slice(0,len-1);
}

