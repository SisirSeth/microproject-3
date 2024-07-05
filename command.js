
        var buttons = document.querySelectorAll(".grid button");
        var display = document.querySelector(".display");
        buttons.forEach(function(button){
            
            button.addEventListener("click",function(e){
                if (e.target.innerText == "=") {
                    try {
                        display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText = "Invalid";
                    }
                }
                else if(e.target.innerText == "RESET"){
                    display.innerText = "";
                }
                else if(e.target.innerText == "DEL"){
                    display.innerText = display.innerText.slice(0,-1);
                }
                else{
                    display.innerText += e.target.innerText;
                }
                
            })
        });