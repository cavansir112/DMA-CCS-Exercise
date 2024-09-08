import React from "react";
import BookCart from "./BookCart";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks, getAllAuthors, getAllJhaneras }  from "./bookSlice.jsx";


function BooksSection(){
    const [selectedAuthor, setSelectedAuthor] = useState(null);
    const [selectedJhanera, setSelectedJhanera] = useState(null);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    let dis=useDispatch();
    const {books,authors,jhaneras} = useSelector(state => state.bookSection);
        useEffect(() => {
            dis(getAllBooks())
            dis(getAllAuthors())
            dis(getAllJhaneras())
        },[]);

        const filteredBooks = books.filter(book => 
            (!selectedAuthor || book.authorId == selectedAuthor) && (!selectedJhanera || book.jhaneraId == selectedJhanera)
        );

        const BookClick = (book) => {
            navigate('/open-phage', { state: { book } }); 
        };

    return(
        <div className="p-5">
            <div className="row">
                <div className="col-3">
                    <div className="authors mb-4">
                        <div class="list-group">
                            <a href="#" className={`list-group-item list-group-item-action ${!selectedAuthor ? 'active' : ''}`} onClick={() => {
                                    setSelectedAuthor(null);
                            }}>
                                Authors
                            </a>
                            {authors?.map((item, index) => {
                                return(
                                    <a key={item.id} href="#" className={`list-group-item list-group-item-action ${selectedAuthor == item.id ? 'active' : ''}`} onClick={() => setSelectedAuthor(item.id)}>{item.name}</a>
                                )
                            })}
                        </div>
                    </div>
                    <div className="jhaneras">
                        <div class="list-group">
                            <a href="#" className={`list-group-item list-group-item-action ${!selectedJhanera ? 'active' : ''}`} onClick={() => {
                                    setSelectedJhanera(null);
                                }}>
                                Jhaneras
                            </a>
                            {jhaneras?.map((item, index) => {
                                return(
                                    <a key={item.id} href="#" className={`list-group-item list-group-item-action ${selectedJhanera == item.id ? 'active' : ''}`} onClick={() => setSelectedJhanera(item.id)}>{item.name}</a>
                                )
                            })}
                            
                        </div>
                    </div>
                </div>
                <div className="col-9 pl-5">
                    <div className="row">
                        {filteredBooks?.map((item) => (
                            <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                <div className="card">
                                    <img src={item.img} alt={item.title} />
                                    <h2>{item.title}</h2>
                                    <p>{item.price}</p>
                                    <button onClick={() => BookClick(item)}>Open</button>
                                </div>
                            </div>
                            )
                        )}
                        {/* <BookCart/> */}
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default BooksSection;
