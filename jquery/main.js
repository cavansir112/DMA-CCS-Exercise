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



});