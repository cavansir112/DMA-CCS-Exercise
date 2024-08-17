$(function(){


    $("#addBtn").click(()=>{
        let value = $("#intText").val()
        if (value !== "") {
            $(".listUl").prepend(`
                <li><p>${value}</p> <div><i onclick="(this)" class="fa-solid fa-x solis"></i> <i onclick="(this)" class="fa-solid fa-check chec"></i></div></li>
            `)
            $('#intText').val('');
        }
        

    });

    $('.listUl').on('click', '.solis', function() {
        $(this).parents('li').remove();
    });

    $('.listUl').on('click', '.chec', function() {
        $(this).parent('div').prev("p").css("text-decoration", "line-through");
    });

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

        $("#porBoxt").html("")
        arr2.forEach(item => {
            if (listType === 'Show All' || item.type === listType) {
                $("#porBoxt").append(`
                    <div class="boxs">
                    <img src="${item.img}" alt="">
                    <h5>${item.text1}</h5>
                    <p>${item.text2}</p>
                </div>`)
            }
        });
    
    }
    
    
    ListKatagori('Show All');
    
    let listLi = $(".port-list ul li");
    
    listLi.each(function() {
        $(this).click(function() {
            listLi.removeClass('active-li');
            $(this).addClass('active-li');
            ListKatagori($(this).text());
            console.log($(this).text());
        });
    });


    // let arr3 = [
    //     {
    //         id: 1,
    //         name: "Suleyman",
    //         surName: "Memmedli",
    //         age: "17"
    //     },
    //     {
    //         id: 2,
    //         name: "Heybet",
    //         surName: "Amalli",
    //         age: "20"
    //     },
    //     {
    //         id: 3,
    //         name: "Aksin",
    //         surName: "Samirli",
    //         age: "17"
    //     },
    //     {
    //         id: 4,
    //         name: "Malik",
    //         surName: "Nadirov",
    //         age: "17"
    //     }
    // ]



        $(".searchInt").on('input', function(){
            let value = $(this).val().toLowerCase();
            $(".student table tbody tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });

        $(".addBtn").click(function() {
            $(".line-div").show(300);
            $(".createBtn").text("Create")
        });


        $(".line-i i").click(function() {
            $(".line-div").hide(300);
        });


        $(".createBtn").click(function() {
            $(".line-div").hide(300);
            let name = $(".cName").val();
            let surname = $(".cSurname").val();
            let age = $(".cAge").val();

            $(".student table tbody").append(`
                <tr>
                    <td>${$(".student table tbody tr").length + 1}</td>
                    <td>${name}</td>
                    <td>${surname}</td>
                    <td>${age}</td>
                    <td><i class="fa-regular fa-pen-to-square editBtn"></i></td>
                    <td><i class="fa-solid fa-trash removeBtn"></i></td>
                </tr>
            `);


            updateButtons();
        });


        function updateButtons() {
            $(".removeBtn").click(function() {
                $(this).parents("tr").remove();
            });


            $(".editBtn").click(function() {
                let row = $(this).parents("tr");
                let name = row.find("td:eq(1)").text();
                let surname = row.find("td:eq(2)").text();
                let age = row.find("td:eq(3)").text();

        
                $(".cName").val(name);
                $(".cSurname").val(surname);
                $(".cAge").val(age);

                $(".line-div").show(300);

                $(".createBtn").text("Edit")

                $(".createBtn").off('click').click(function() {
                    row.find("td:eq(1)").text($(".cName").val());
                    row.find("td:eq(2)").text($(".cSurname").val());
                    row.find("td:eq(3)").text($(".cAge").val());
                    
                    $(".line-div").hide(300);

                    $(".createBtn").off('click').click(function() {
                        $(".line-div").hide(300);
                        let name = $(".cName").val();
                        let surname = $(".cSurname").val();
                        let age = $(".cAge").val();

                        $(".student table tbody").append(`
                            <tr>
                                <td>${$(".student table tbody tr").length + 1}</td>
                                <td>${name}</td>
                                <td>${surname}</td>
                                <td>${age}</td>
                                <td><i class="fa-regular fa-pen-to-square editBtn"></i></td>
                                <td><i class="fa-solid fa-trash removeBtn"></i></td>
                            </tr>
                        `);

                        updateButtons();
                    });
                });
            });
        }


        updateButtons();




        let arr3 = [
            {
                id: 0,
                name: "Komputer1",
                castumer: 1123,
                img: "img/img1.jpg"
            },
            {
                id: 1,
                name: "Komputer2",
                castumer: 1343,
                img: "img/img2.png"
            },
            {
                id: 2,
                name: "Komputer3",
                castumer: 923,
                img: "img/img3.jpg"
            },
            {
                id: 3,
                name: "Komputer4",
                castumer: 1222,
                img: "img/img4.jpg"
            },
        ]

        let basgetArr = [];


        function shopHtml(){
            for(let i = 0; i < arr3.length; i++){

                $(".shop").append(`
                    <div class="card">
                        <img src="${arr3[i].img}" alt="">
                        <div class="shop-text">
                            <h2>${arr3[i].name}</h2>
                            <span>$${arr3[i].castumer}</span>
                            <i ID="${i}"  id="addBtn${arr3[i].id}" class="fa-solid fa-cart-shopping bast"></i>
                        </div>
                    </div>
                `)

            }
            
        }

        let count = 0;
        let totalPrice=0;
        $(document).on("click", ".bast", (e)=>{
            let id = $(e.target).attr("ID");
            let findBasket = basgetArr.find(p=>p.id==id)
            let pruduct = arr3.find(p=>p.id==id)
            console.log(findBasket);
            if(!findBasket){
                basgetArr.push({
                    id:pruduct.id,
                    name:pruduct.name,
                    castumer:pruduct.castumer,
                    img:pruduct.img,
                    count: 1
                })
                count++
            }else{
                findBasket.count++
            }

            console.log(basgetArr);
            $("#shopCount").text(count);
        })


        shopHtml()


        $("#removBtn").click(function(){
            $(".line").hide(300);
        })

        $("#basketBtn").click(function(){
            $(".line").show(300);
            loadBsket();
        })

        const loadBsket=()=>{
            $(".content").html("");
            totalPrice=0;
            count=0;
            $(basgetArr).each((index,element)=>{
                $(".content").append(`
                    <div class="cardM">
                        <img src="${element.img}" alt="">
                        <div class="cardM-text">
                            <h5>${element.name}</h5>
                            <span>price: $${element.castumer} <br>total price $${element.castumer*element.count}</span>
                            <div class="say"><div style="display: flex;"><span prodactId="${element.id} class="litle">-</span><span class="sayDiv">${element.count}</span><span prodactId="${element.id} class="letOf">+</span></div> <i prodactId="${element.id}"  class="fa-solid fa-trash btnRemove"></i></div>
                        </div>
                    </div>
                `)
                totalPrice+=element.castumer*element.count;
                count+=element.count
            })
            $(".total").text(totalPrice + "$")
            $("#shopCount").text(count);

        }

        $(document).on("click",".btnRemove",(e)=>{
            let id = $(e.target).attr("prodactId")
            let findPraduct = basgetArr.find(p=>p.id==id)
            basgetArr.splice(basgetArr.indexOf(findPraduct),1)
            loadBsket()
        })

        $(document).on("click", ".letOf", (e)=>{
            console.log("wec");
            let id = $(e.target).attr("prodactId")
            let findPraduct = basgetArr.find(p=>p.id==id)
            findPraduct.count++
            loadBsket()
        })

        $(document).on("click", ".litle", (e)=>{
            console.log("wec");
            let id = $(e.target).attr("prodactId")
            let findPraduct = basgetArr.find(p=>p.id==id)
            if(findPraduct.count==1){
                return
            }else{
                findPraduct.count--
            }
            loadBsket()
        })

        

      





});