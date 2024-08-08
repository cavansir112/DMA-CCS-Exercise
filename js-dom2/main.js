
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








let arr3 = [
    {
        name: "item1"
    },
    {
        name: "item2"
    },
    {
        name: "item3"
    },
    {
        name: "item4"
    },
    {
        name: "item5"
    },
    {
        name: "item6"
    },
    {
        name: "item7"
    },
    {
        name: "item8"
    },
    {
        name: "item9"
    },
    {
        name: "item10"
    },
    {
        name: "item11"
    },
    {
        name: "item12"
    },
    {
        name: "item13"
    },
    {
        name: "item14"
    },
    {
        name: "item15"
    },
    {
        name: "item16"
    },
    {
        name: "item17"
    },
    {
        name: "item18"
    },
    {
        name: "item19"
    },
    {
        name: "item20"
    },
    {
        name: "item21"
    },
    {
        name: "item22"
    },
    {
        name: "item23"
    },
    {
        name: "item24"
    },
    {
        name: "item25"
    },
    {
        name: "item26"
    },
    {
        name: "item27"
    }
]





let rightCount = 1;
let ind = Math.ceil(arr3.length / 5);
let n = 1;
a(n)


function a(count) {
    for(let i = 5*(count-1); i < 5*count; i++){
        ulItem.innerHTML += `
            <li>${arr3[i].name}</li>
        `   
    }
}

for (let i = 1; i <= ind; i++) {
    liItem.innerHTML += `<li onclick="del(this)">${i}</li>`;
    
}

function del(x){
    let indT = Number(x.innerText);
    rightCount = indT
    console.log(indT);
    ulItem.innerHTML = "";
    a(indT)   
}

rightItem.onclick = function(){
    rightCount++;
    if(rightCount <= ind){
        ulItem.innerHTML = "";
        a(rightCount)
    }
}


leftItem.onclick = function(){
    console.log(rightCount);
    if(rightCount > 1){
        rightCount--;
        ulItem.innerHTML = "";
        a(rightCount)
    }
}




var questionBank = [
    // Easy level questions
    {
      question: "5 %-i 2 olan ədədi tap?",
      answers: {
        A: "43",
        B: "40",
        C: "49",
        D: "35",
      },
      correct: function () {
        return this.answers.B;
      },
      subject: "Math",
      level: "Easy",
    },
    {
      question: "(x+3)+(x+1)=12 Tənliyi həll edin?",
      answers: {
        A: "3",
        B: "5",
        C: "4",
        D: "35",
      },
      correct: function () {
        return this.answers.C;
      },
      subject: "Math",
      level: "Easy",
    },
    {
      question: "Sürəti 7 olan neçə düzgün olmayan kəsr var?",
      answers: {
        A: "7",
        B: "32",
        C: "4",
        D: "6",
      },
      correct: function () {
        return this.answers.A;
      },
      subject: "Math",
      level: "Easy",
    },
    {
      question: "4%-i 5,6 olan ədədi tapın:",
      answers: {
        A: "48",
        B: "400",
        C: "49",
        D: "140",
      },
      correct: function () {
        return this.answers.D;
      },
      subject: "Math",
      level: "Easy",
    },
    {
      question: "0,1(3) sonsuz dövrü onluq kəsrini adi kəsrə çevirin.",
      answers: {
        A: "2/15",
        B: "26/15",
        C: "12/15",
        D: "7/15",
      },
      correct: function () {
        return this.answers.A;
      },
      subject: "Math",
      level: "Easy",
    },
 
    // Medium level questions
    {
      question:
        "İki ədədin cəmi 5, fərqi 3-dür. Bu ədədlərin hasilini tapın?",
      answers: {
        A: "4",
        B: "7",
        C: "9",
        D: "5",
      },
      correct: function () {
        return this.answers.A;
      },
      subject: "Math",
      level: "Medium",
    },
    {
      question: "X≠0 olarsa, 2x(x+y)=5y, x(x-y)=y olduqda x-i tapın?",
      answers: {
        A: "3/4",
        B: "5",
        C: "4/9",
        D: "38",
      },
      correct: function () {
        return this.answers.A;
      },
      subject: "Math",
      level: "Medium",
    },
    {
      question:
        "x+y=5, x-y=1 olduğuna görə, x²-y²+3x+3y ifadəsinin qiymətini tapın?",
      answers: {
        A: "10",
        B: "20",
        C: "30",
        D: "40",
      },
      correct: function () {
        return this.answers.B;
      },
      subject: "Math",
      level: "Medium",
    },
    {
      question: "2x+y=5, x-3y=-5 tənliklər sistemindən x+y cəmini tapın?",
      answers: {
        A: "4",
        B: "7",
        C: "3",
        D: "5",
      },
      correct: function () {
        return this.answers.C;
      },
      subject: "Math",
      level: "Medium",
    },
    {
      question: "x+3=2(y-4), y-2=4x tənliklər sistemindən x-i tapın:",
      answers: {
        A: "1/15",
        B: "2/15",
        C: "3/15",
        D: "4/15",
      },
      correct: function () {
        return this.answers.B;
      },
      subject: "Math",
      level: "Medium",
    },
 
    // Hard level questions
    {
      question:
        "a və b ədədləri üçün a+b = 7 və a-b = 3. a və b ədədlərini tapın?",
      answers: {
        A: "5 və 2",
        B: "4 və 3",
        C: "6 və 1",
        D: "7 və 0",
      },
      correct: function () {
        return this.answers.A;
      },
      subject: "Math",
      level: "Hard",
    },
    {
      question:
        "Bir dairənin sahəsi 25π kvadrat vahiddir. Bu dairənin radiusunu tapın.",
      answers: {
        A: "5",
        B: "10",
        C: "15",
        D: "20",
      },
      correct: function () {
        return this.answers.A;
      },
      subject: "Math",
      level: "Hard",
    },
    {
      question: "Tənlik: x² + 6x + 9 = 0. x-i tapın.",
      answers: {
        A: "x = -3",
        B: "x = 3",
        C: "x = -9",
        D: "x = 0",
      },
      correct: function () {
        return this.answers.A;
      },
      subject: "Math",
      level: "Hard",
    },
    {
      question:
        "Bir çoxbucağın daxili bucaqlarının cəmi 1800 dərəcədir. Bu çoxbucağın tərəflərinin sayını tapın.",
      answers: {
        A: "10",
        B: "12",
        C: "8",
        D: "14",
      },
      correct: function () {
        return this.answers.A;
      },
      subject: "Math",
      level: "Hard",
    },
    {
      question:
        "Bir düzbucaqlının uzunluğu 12 cm və eni 5 cm-dir. Bu düzbucaqlının diaqonalının uzunluğunu tapın.",
      answers: {
        A: "13 cm",
        B: "15 cm",
        C: "17 cm",
        D: "20 cm",
      },
      correct: function () {
        return this.answers.A;
      },
      subject: "Math",
      level: "Hard",
    },
    // Easy level questions
    {
      question: "What is the past tense of 'go'?",
      answers: {
        A: "Went",
        B: "Gone",
        C: "Going",
        D: "Goes",
      },
      correct: function () {
        return this.answers.A;
      },
      subject: "English",
      level: "Easy",
    },
    {
      question: "Which word is a noun?",
      answers: {
        A: "Quickly",
        B: "Happy",
        C: "Book",
        D: "Run",
      },
      correct: function () {
        return this.answers.C;
      },
      subject: "English",
      level: "Easy",
    },
    {
      question: "What is the plural form of 'child'?",
      answers: {
        A: "Children",
        B: "Childs",
        C: "Childrens",
        D: "Childes",
      },
      correct: function () {
        return this.answers.A;
      },
      subject: "English",
      level: "Easy",
    },
    {
      question:
        "How do you spell the word that means 'a place where people live'?",
      answers: {
        A: "Hous",
        B: "House",
        C: "Houce",
        D: "Hause",
      },
      correct: function () {
        return this.answers.C;
      },
      subject: "English",
      level: "Easy",
    },
    {
      question: "What is the opposite of 'happy'?",
      answers: {
        A: "Joyful",
        B: "Sad",
        C: "Excited",
        D: "Angry",
      },
      correct: function () {
        return this.answers.B;
      },
      subject: "English",
      level: "Easy",
    },
 
    {
      question: "Choose the correct sentence.",
      answers: {
        A: "She don't like apples.",
        B: "She doesn't like apples.",
        C: "She didn't likes apples.",
        D: "She doesn't likes apple.",
      },
      correct: function () {
        return this.answers.B;
      },
      subject: "English",
      level: "Medium",
    },
    {
      question: "What is the comparative form of 'good'?",
      answers: {
        A: "Better",
        B: "Gooder",
        C: "Best",
        D: "Well",
      },
      correct: function () {
        return this.answers.A;
      },
      subject: "English",
      level: "Medium",
    },
    {
      question:
        "Identify the adverb in the sentence: 'She sings beautifully.'",
      answers: {
        A: "Sings",
        B: "She",
        C: "Beautifully",
        D: "The",
      },
      correct: function () {
        return this.answers.C;
      },
      subject: "English",
      level: "Medium",
    },
    {
      question:
        "What is the correct form of the verb in the sentence: 'He _____ (to be) a teacher.'?",
      answers: {
        A: "Is",
        B: "Are",
        C: "Be",
        D: "Was",
      },
      correct: function () {
        return this.answers.A;
      },
      subject: "English",
      level: "Medium",
    },
    {
      question: "Which sentence is in the passive voice?",
      answers: {
        A: "The dog bit the man.",
        B: "The man was bitten by the dog.",
        C: "The man bites the dog.",
        D: "The dog is biting the man.",
      },
      correct: function () {
        return this.answers.B;
      },
      subject: "English",
      level: "Medium",
    },
 
    // Hard level questions
    {
      question: "Choose the sentence with correct punctuation.",
      answers: {
        A: "Where are you going; I am coming with you.",
        B: "Where are you going? I am coming with you.",
        C: "Where are you going I am coming with you.",
        D: "Where are you going. I am coming with you?",
      },
      correct: function () {
        return this.answers.B;
      },
      subject: "English",
      level: "Hard",
    },
    {
      question:
        "Which of the following sentences contains a misplaced modifier?",
      answers: {
        A: "Running to catch the bus, the rain started to fall.",
        B: "The rain started to fall while I was running to catch the bus.",
        C: "While running to catch the bus, I got wet from the rain.",
        D: "I got wet from the rain while running to catch the bus.",
      },
      correct: function () {
        return this.answers.A;
      },
      subject: "English",
      level: "Hard",
    },
    {
      question:
        "Identify the error in the sentence: 'She has less books than her brother.'",
      answers: {
        A: "Less should be replaced with fewer.",
        B: "Books should be replaced with book.",
        C: "Than should be replaced with then.",
        D: "Her should be replaced with theirs.",
      },
      correct: function () {
        return this.answers.A;
      },
      subject: "English",
      level: "Hard",
    },
    {
      question:
        "What is the correct form of the verb in the sentence: 'If he _____ (to study) harder, he would have passed the exam.'?",
      answers: {
        A: "Had studied",
        B: "Studies",
        C: "Studied",
        D: "Was studying",
      },
      correct: function () {
        return this.answers.A;
      },
      subject: "English",
      level: "Hard",
    },
    {
      question: "Which sentence correctly uses the subjunctive mood?",
      answers: {
        A: "I wish she was here.",
        B: "If I were you, I would accept the offer.",
        C: "It is important that he is on time.",
        D: "She acts as if she was the boss.",
      },
      correct: function () {
        return this.answers.B;
      },
      subject: "English",
      level: "Hard",
    },
  ];
 let filterSubject,filterLevel;
 document.querySelectorAll(".tabOne").forEach(btn=>{
   btn.addEventListener("click",function(){
     document.querySelector(".tabBoxOne").style.display="none"
     document.querySelector(".tabBoxTwo").style.display="block"
     filterSubject=questionBank.filter(s=>s.subject.toLowerCase()===btn.innerText.toLowerCase())    
   })
 })
 document.querySelectorAll(".tabTwo").forEach(btn=>{
   btn.addEventListener("click",function(){
     document.querySelector(".tabBoxTwo").style.display="none"
     document.querySelector(".quizBoxOne").style.display="block"
     filterLevel=filterSubject.filter(s=>s.level.toLowerCase()===btn.innerText.toLowerCase())
     getData(0)
   })
 })
 
 // let currentIndex;
 function page(index){
   // currentIndex=index
 getData(index)
 }
 let correct_count=0,wrong_count=0;
 let cavablar=document.querySelector(".optionsBoxOne")
 function getData(index){
   document.querySelector(".questionBoxOne").innerText=filterLevel[index].question
   cavablar.innerHTML=`
                           <div class="optionBoxOne">${filterLevel[index].answers.A}</div>
                           <div class="optionBoxOne">${filterLevel[index].answers.B}</div>   
                           <div class="optionBoxOne">${filterLevel[index].answers.C}</div>
                           <div class="optionBoxOne">${filterLevel[index].answers.D}</div>`
 
         cavablar.querySelectorAll(".optionBoxOne").forEach(c=>{
           c.addEventListener("click",function(){
             cavablar.querySelectorAll(".optionBoxOne").forEach(x=>{
               if(x.innerText==filterLevel[index].correct()){
                 x.style.backgroundColor="green"
               }
               x.style.pointerEvents="none"
             })
             if(c.innerText!=filterLevel[index].correct()){
               c.style.backgroundColor="red"
               wrong_count++
             }else{
               correct_count++
             }
           })
         })
         document.querySelector(".pageBox").innerHTML=""
         for(let i=0; i<filterLevel.length; i++){
           document.querySelector(".pageBox").innerHTML+=` <div class="pageListBox" data-index=${i} onclick="page(${i})">${i+1}</div>`
         }
         document.querySelector(".pageBox").children[index].classList.add("btn-active")
 }
 
 document.querySelector(".arrowLeft").addEventListener("click",function(){
   let activebtn=document.querySelector(".pageBox .btn-active")
   let index=activebtn.getAttribute("data-index")
   if(index<=0){
     return
   }
 getData((+index-1))
 })
  
 
 document.querySelector(".arrowRight").addEventListener("click",function(){
   let activebtn=document.querySelector(".pageBox .btn-active")
   let index=activebtn.getAttribute("data-index")
   if(index>=filterLevel.length-1){
     resultsContainer.style.display="block"
       document.querySelector(".quizBoxOne").style.display="none"
       console.log(correct_count,"c");
       console.log(wrong_count,"w");
       correct.innerText=correct_count
       wrong.innerText=wrong_count
       blank.innerText=filterLevel.length-(wrong_count+correct_count)
 
       result.innerText=(correct_count/filterLevel.length)*100+"%"
       
       
   }else{
     getData((+index+1))
   }
 })

