let inputTag = document.getElementsByClassName("input")[0];

let countdisable=0;
let count=0;

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {

        if(event.target.innerHTML == "AC") {
            inputTag.value = "";
            countDisable=0;
            count=0;
        }

        else if(event.target.innerHTML == "+" || event.target.innerHTML == "-" || event.target.innerHTML == "*" || event.target.innerHTML == "/" || event.target.innerHTML == "%" || event.target.innerHTML == "=" || event.target.innerHTML == ".") {
            
            if(count!=0 && countDisable == 0) {
                if(event.target.innerHTML == "=") {
                    evaluatedOutput = eval(inputTag.value);
                    inputTag.value = evaluatedOutput;
                    countDisable=0;
                } 
                
                
                else if(countDisable == 0) {
                    inputTag.value = inputTag.value + event.target.innerHTML;
                    countDisable=1;
                }
            }
        }

        else{
            inputTag.value = inputTag.value + event.target.innerHTML;
            countDisable=0;
            count+=1
        }

    })
})


const clickMe = () => {
    countDisable=0;
    let len = inputTag.value.length;
    inputTag.value = inputTag.value.slice(0,len-1);
}

