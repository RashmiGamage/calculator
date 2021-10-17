var display= document.getElementById("display");
function enterBtn(element){
    
    var entered =element.innerHTML;
       switch(entered){
            case '=':
               display.innerHTML = eval(display.innerHTML);
               break;

            case 'AC':
                display.innerHTML = " ";
                break;

            default:
                if(display.innerHTML == "0"){
                    display.innerHTML = entered;
                }
                else{
                    display.innerHTML +=entered;
                }

       }
}
