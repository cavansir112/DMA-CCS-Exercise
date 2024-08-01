
let arr = [
    {
        name:  "Naile"
    },
    {
        name:  "Nezaket"
    },
    {
        name:  "Gulnare"
    }
]



let listText = document.querySelectorAll(".listUl li");
let deletIcon = document.querySelectorAll(".listUl li i");
console.log(listText)

function ListName() {
    listU.innerHTML = ""
    for(let i = 0; i< arr.length; i++){
        listU.innerHTML += `
        <li><p>${arr[i].name}</p> <i onclick="removs(${i},this)" class="fa-solid fa-x"></i></li>
    `;
    }
}

ListName()



function removs(a,b){
    arr.splice(a,1);
    b.parentElement.remove();
}


addBtn.onclick = function(){
    let obj = {};
    obj.name = intText.value;
    arr.push(obj)
    intText.value = "";
    ListName()
}



let imgBox = document.querySelectorAll(".slide-boxsing img");

let count = 0;

if (imgBox.length > 0) {
    imgShow.setAttribute('src', imgBox[count].getAttribute('src'));
}


for(let i = 0; i < imgBox.length; i++) {
    imgBox[i].onclick = function() {
        count = i;
        imgShow.setAttribute('src', imgBox[i].getAttribute('src'));
    }
}

rightBtn.onclick = function() {
    count = (count + 1) % imgBox.length;
    imgShow.setAttribute('src', imgBox[count].getAttribute('src'));
}

leftBtn.onclick = function() {
    count = (count - 1 + imgBox.length) % imgBox.length;
    imgShow.setAttribute('src', imgBox[count].getAttribute('src'));
}





let arr2 = [
    {
        img: "img/download-3.jpg",
        text1:  "natura-1",
        text2: "Lorem impus dorem",
        type: "Nature"
    },
    {
        img: "img/download-4.jpg",
        text1:  "natura-2",
        text2: "Lorem impus dorem",
        type: "Nature"
    },
    {
        img: "img/download-5.jpg",
        text1:  "natura-3",
        text2: "Lorem impus dorem",
        type: "Nature"
    },
    {
        img: "img/download.jpg",
        text1:  "Car-1",
        text2: "Lorem impus dorem",
        type: "Car"
    },
    {
        img: "img/download-1.jpg",
        text1:  "Car-2",
        text2: "Lorem impus dorem",
        type: "Car"
    },
    {
        img: "img/download-2.jpg",
        text1:  "Car-3",
        text2: "Lorem impus dorem",
        type: "Car"
    },
    {
        img: "img/download-6.jpg",
        text1:  "Man",
        text2: "Lorem impus dorem",
        type: "People"
    },
    {
        img: "img/images-1.jpg",
        text1:  "Woman",
        text2: "Lorem impus dorem",
        type: "People"
    },
    {
        img: "img/images.jpg",
        text1:  "Girl",
        text2: "Lorem impus dorem",
        type: "People"
    }
   
    
]







function ListKatagori(listType) {
    porBoxt.innerHTML = "";
    arr2.forEach(item => {
        if (listType === 'Show All' || item.type === listType) {
            porBoxt.innerHTML += `
                <div class="boxs">
                    <img src="${item.img}" alt="">
                    <h5>${item.text1}</h5>
                    <p>${item.text2}</p>
                </div>
            `;
        }
    });
}


ListKatagori('Show All');

let listLi = document.querySelectorAll(".port-list ul li");

listLi.forEach((li, index) => {
    li.onclick = function() {
        listLi.forEach(li => li.classList.remove('active-li'));
        li.classList.add('active-li');
        ListKatagori(li.innerText);
    };
});







let bar = document.querySelector(".bar");

divs.addEventListener('click', function(e){

    bar.style.width = e.offsetX + "px"


})

spanDow.addEventListener('click', function(){

    let br = getComputedStyle(bar).width;
    let d = getComputedStyle(divs).width.slice(0,-2);
    let b = +br.slice(0,-2);
    if(b < d){
        bar.style.width = (b + 10) + "px";
    }
    
    


})

spanUp.addEventListener('click', function(){

    let br = getComputedStyle(bar).width;
    let d = getComputedStyle(divs).width.slice(0,-2);
    let b = +br.slice(0,-2);
    if(b > 0){
        bar.style.width = (b - 10) + "px";
    }
    

})








