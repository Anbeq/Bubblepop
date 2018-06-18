
let mode1 = true;
let mode2 = false;
let mouseOnInputField = false;
const inputField = document.querySelector(".input-field");
const container = document.querySelector(".bubbleDiv");
const mode2Box = document.querySelector("#modeSwitch");

inputField.addEventListener("mouseover", function(){
    mouseOnInputField = true;
    document.body.style.cursor = 'default';
})

inputField.addEventListener("mouseout", function(){
    mouseOnInputField = false;
    document.body.style.cursor = 'crosshair';
})

document.addEventListener("mousedown", function(event) {
    if (mode2Box.checked == false){
        mode2 = false;
        mode1 = true;
    } else if (mode2Box.checked == true){
        mode2 = true;
        mode1 = false;
    }

    if (!mouseOnInputField && mode1){
        let inputSize = document.getElementById("inputSize");

        container.innerHTML = "<div class='bubble disappear-after' style='background-color: " + inputColor.value + 
        "; height: " + inputSize.value + "px; width: " + inputSize.value + "px; top:" + ((event.y)-(inputSize.value/2)) +
        "px; left: " + ((event.x)-(inputSize.value/2)) + "px'>";
        }

    else if (!mouseOnInputField && mode2){
        let inputSize = document.getElementById("inputSize");
        
        let addHTML = 
        `
        <div class="bubble stay-after" style="background-color: ${inputColor.value}; height: ${inputSize.value}px; width: ${inputSize.value}px;
        top:${(event.y)-(inputSize.value/2)}px; left: ${(event.x)-(inputSize.value/2)}px">
        `
        container.insertAdjacentHTML("beforeend", addHTML);
        }
    }
)



