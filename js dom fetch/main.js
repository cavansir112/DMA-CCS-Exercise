let a = "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region";





document.addEventListener('DOMContentLoaded', function () {
    const currentMode = localStorage.getItem('theme');
    if (JSON.parse(currentMode)) {
        body.classList.add('dark-mode');
    }
});


let body = document.body;
toggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', true);
    } else {
        localStorage.setItem('theme', false);
    }
});



let url = fetch(a)
  .then((res) => {
    return res.json();
  })
  .then((data) => {

    let dat = data;
   
     for(let i = 0; i < dat.length; i++){
        console.log(dat[i]);
         worldBox.innerHTML += `
        <div class="card">
            <img src="${dat[i].flags.png}" alt="">
            <h6>${dat[i].name.common}</h6>
            <p>Population: ${dat[i].population}</p>
            <p>Region: ${dat[i].region}</p>
            <p>Capital: ${dat[i].capital}</p>
        </div>
        `;

    }

    let b = document.querySelectorAll(".card img");
    b.forEach((e,i ) => {
      e.addEventListener('click', function() {
        window.location.href = `page.html?id=${i}`;
      });
    });

    searchInput.addEventListener('input', function(){
        let searchQ = searchInput.value.toLowerCase();
        let content = document.querySelectorAll(".card h6");
        for(let i = 0; i < content.length; i++){
            let parContent = content[i];
            let text = parContent.textContent.toLowerCase();
            // console.log(text);

            if(text.includes(searchQ)){
                parContent.parentElement.classList.remove('search-Active');
            }else{
                parContent.parentElement.classList.add('search-Active');
            }

        }
    });


  });



