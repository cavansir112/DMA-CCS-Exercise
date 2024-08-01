

// task 1
function Ok(a){
    let inp1 = +document.getElementById("inp1").value;
    let inp2 = +document.getElementById("inp2").value;
    if(a.innerText == "+"){
        alert(inp1 + inp2);
    }
    else if(a.innerText == "-"){
        alert(inp1 - inp2);
    }
    else if(a.innerText == "*"){
        alert(inp1 * inp2);
    }
    if(a.innerText == "/"){
        alert(inp1 / inp2);
    }
}




// task 2


btn.onclick = function () {
    let one = inputR.value;
    inputR.value = ""
    let yer = "";

    for(let i = one.length-1; i >= 0; i--){
        yer += one[i];

    }
    alert(yer);
}




//  task 3

btnF.onclick = function () {
    box.style = `width: ${effekt1.value}px;
                height: ${effekt2.value }px;
                border-width: ${effekt3.value}px;
                color: ${sel3.value};
                background-color: ${sel4.value};
                border-color: ${sel2.value};
                border-style: ${sel1.value};
                 `;
    
}





//  task 4

intB1.addEventListener(`input`, function() {
    let intV = intB1.value
    let sli = +intV.slice(0,-2)
    let styleDiv = getComputedStyle(box2)
    let width = styleDiv.width
    let wsil = +width.slice(0,-2)

    console.log(sli,wsil);

    if (intV.endsWith('px')) {
        box2.style.width = sli + wsil + "px";
    }
})


intB2.addEventListener(`input`, function() {
    let intV = intB2.value
    let sli = +intV.slice(0,-2)
    let styleDiv = getComputedStyle(box2)
    let width = styleDiv.height
    let wsil = +width.slice(0,-2)

    console.log(sli,wsil);

    if (intV.endsWith('px')) {
        box2.style.height = sli + wsil + "px";
    }
})


intB3.addEventListener(`input`, function() {
    let intV = intB3.value
    let sli = +intV.slice(0,-2)
    let styleDiv = getComputedStyle(box2)
    let width = styleDiv.borderWidth
    let wsil = +width.slice(0,-2)

    console.log(sli,wsil);

    if (intV.endsWith('px')) {
        box2.style.borderWidth = sli + wsil + "px";
    }
})







let imgBox = document.querySelectorAll(".box-card img");
let text1 = document.querySelectorAll(".box-card h3");
let text2 = document.querySelectorAll(".box-card h4");
let LineDiv = document.querySelectorAll(".box-card .line");
let imgAtv;
for(let i = 0; i < imgBox.length; i++){
    LineDiv[i].onclick = function(){
        console.log(divImgA);
        divImgA.style = 'display: block;';
        ImgFix.setAttribute('src', imgBox[i].getAttribute('src'))
        spanText1.innerText = text1[i].innerText
        spanText2.innerText = text2[i].innerText
    }

}

clouseIcon.onclick = function (){
    divImgA.style = 'display: none;';
}









let textH2 = document.querySelectorAll(".list-div h2");
let textIcon = document.querySelectorAll(".list-div h2 i");
let textP = document.querySelectorAll(".list-div .text-d");

console.log(textH2,textIcon,textP);

for(let i = 0; i < textH2.length; i++){
    textH2[i].onclick = function(){
        for(let j = 0; j < textP.length; j++){
            if (i != j) {
                textP[j].classList.remove("text-d-active");
                textIcon[j].classList.remove("icon-active");
                textH2[j].classList.remove("h2-active");
            }
        }
        textP[i].classList.toggle("text-d-active");
        textIcon[i].classList.toggle("icon-active");
        textH2[i].classList.toggle("h2-active");
    }
}










let inp = document.getElementById("textInp");   
    function simvol(x) {
        let operator = ["-", "+", "/", "*", "."];
        let value = x.value;
        let currentValue = inp.value;
        if (currentValue.length === 0 && value !== "-" && operator.includes(value)) {
            return;
        }
        if (currentValue.length === 1 && operator.includes(currentValue[0]) && operator.includes(value)) {
            return;
        }
        let parts = currentValue.split(/[+\-*/]/).filter(x=> x !="");
        if (parts.length > 1 && operator.includes(value)) {
            return;
        }
        if (operator.includes(currentValue.slice(-1)) && operator.includes(value)) {
            inp.value = currentValue.slice(0, -1) + value;
        } else {
            inp.value += value;
        }
    }
    function hesabla() {
        let result;
        if (inp.value.includes("+")) {
            let a = inp.value.split("+");
            result = (+a[0]) + (+a[1]);
        } else if (inp.value.includes("/")) {
            let a = inp.value.split("/");
            result = (+a[0]) / (+a[1]);
        } else if (inp.value.includes("*")) {
            let a = inp.value.split("*");
            result =  (+a[0]) * (+a[1]);
        } else if (inp.value.includes("-")) {
            let index = inp.value.lastIndexOf("-");
            if (index !== -1) {
            let leftPart = inp.value.substring(0, index);
            let rightPart = inp.value.substring(index + 1);
            result = +leftPart - +rightPart;
            }
        }
        inp.value = result;
    }

    function clearInput() {
        inp.value = "";
    }
