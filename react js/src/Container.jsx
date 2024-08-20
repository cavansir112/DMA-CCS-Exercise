import React from "react";
import Card from "./Card";


function Container(){
    const arr = [
        {
            name: "Name-1",
            email: "name1@email.com",
            specialty: "Developer / desigen"
        },
        {
            name: "Name-2",
            email: "name2@email.com",
            specialty: "UX / desigen"
        },
        {
            name: "Name-3",
            email: "name3@email.com",
            specialty: "Muhendis"
        },
        {
            name: "Name-4",
            email: "name4@email.com",
            specialty: "Interyer Desigen"
        },
        {
            name: "Name-5",
            email: "name5@email.com",
            specialty: "Operator"
        },
        {
            name: "Name-6",
            email: "name6@email.com",
            specialty: "Eksteryer Desigen"
        },
    ]
    return(
        <div className="container d-flex flex-wrap justify-content-center">
            
            {
                arr.map((item,index)=>{
                   return <Card key={index} name={item.name} email={item.email} specialty={item.specialty} />
                })
            }

        </div>
    )
}

export default Container;