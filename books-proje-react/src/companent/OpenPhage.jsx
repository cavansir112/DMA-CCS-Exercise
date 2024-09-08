import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { getAllBooks, getAllAuthors, getAllJhaneras }  from "./bookSlice.jsx";


function OpenPhage() {
    const location = useLocation();
    const { book } = location.state || {};

    const dis = useDispatch();
    const { authors, jhaneras } = useSelector(state => state.bookSection);

    useEffect(() => {
        dis(getAllBooks());
        dis(getAllAuthors());
        dis(getAllJhaneras());
    }, [dis]);

    const authorName = book?.authorId && authors?.find(author => author.id === book.authorId)?.name;
    const jhaneraName = book?.jhaneraId && jhaneras?.find(jhanera => jhanera.id === book.jhaneraId)?.name;

    return (
        <div className="container openPhage p-5">
            {book ? (
                <>
                    <img src={book.img} alt={book.title} />
                    <h3>Book Name: <span>{book.title}</span></h3>
                    <p>Author Name: <span>{authorName}</span></p>
                    <p>Jhanera Name: <span>{jhaneraName}</span></p>
                    <p>Price: <span>{book.price}</span></p>
                </>
            ) : (
                <p>No book data available</p>
            )}
        </div>
    );
}

export default OpenPhage;