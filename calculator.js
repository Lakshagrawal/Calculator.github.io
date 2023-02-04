let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

let screenvalue = "";
let flag = 1;

for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        // console.log(buttonText);

        if(buttonText == 'X'){
            buttonText = '*';
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
        else if(buttonText == 'C'){
            screenvalue = '';
            screen.value = "";
            flag = 1;
        }
        else if(buttonText == '√'){
            screen.value = '√'+screenvalue;
            screenvalue = Math.sqrt(screenvalue);
            flag = 0;
        }   
        else if(buttonText == 'x^​2'){
            screen.value = screenvalue+"^2";
            screenvalue = screenvalue+'*'+screenvalue;
        }   
        else if(buttonText == '='){
            let ans = 0;
            if(flag == 1){
                ans =  eval(screenvalue);
            }
            else{
                ans = screenvalue;
            }

            if(ans != undefined)
                screen.value = ans;
            else{
                screen.value = "";
            }
            screenvalue = '';
        }
        else{
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
    })
}