import React from "react";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks, getAllAuthors, getAllJhaneras, addBook, updateBook, deleteBook }  from "./bookSlice.jsx";
import Button from '@mui/material/Button';

function AdminBooks (){

    const [data, setData] = useState([]);
    const [modalActive, setModalActive] = useState(false);
    const [editMode, setEditMode] = useState(false); 
    const [editingBook, setEditingBook] = useState(null); 
    const [newBook, setNewBook] = useState({
        title: "",
        price: "",
        img: "",
        authorId: "",
        jhaneraId: ""
    });

    let dis=useDispatch();
    const {books,authors,jhaneras} = useSelector(state => state.bookSection);
    useEffect(() => {
        dis(getAllBooks())
        dis(getAllAuthors())
        dis(getAllJhaneras())
    },[dis]);


    // adminBook code
    const handleDeleteBook = (bookId) => {
        dis(deleteBook(bookId));  
    };

    const handleEditBook = (book) => {
        setNewBook({
            title: book.title,
            price: book.price,
            img: book.img,
            authorId: book.authorId,
            jhaneraId: book.jhaneraId
        });
        setEditingBook(book);
        setEditMode(true);
        setModalActive(true);
    };

    const handleAddOrUpdateBook = () => {
        if (editMode) {
            dis(updateBook({ ...editingBook, ...newBook }));
        } else {
            dis(addBook(newBook));
        }
        setModalActive(false);
        setNewBook({ title: "", price: "", img: "", authorId: "", jhaneraId: "" });
        setEditMode(false); 
        setEditingBook(null);
    };

  const close = () => {
    setModalActive(false);
    setNewBook({ title: "", price: "", img: "", authorId: "", jhaneraId: "" });
    setEditMode(false);
    setEditingBook(null);
  };

  const open = () => {
    setModalActive(true);
  };

    return(
        <div class="container mt-5">
            <div className={`modal ${modalActive ? "modal-active" : ""}`}>
                <div className="d-flex justify-content-end">
                    <i onClick={close} className="fa-solid fa-x"></i>
                </div>
                <input type="text" placeholder="book name" value={newBook.title || ""} onChange={(e) => setNewBook({...newBook, title: e.target.value})}/>
                <input type="text" placeholder="price" value={newBook.price} onChange={(e) => setNewBook({...newBook, price: e.target.value})}/>
                <input type="text" placeholder="image" value={newBook.img} onChange={(e) => setNewBook({...newBook, img: e.target.value})}/>
                <select value={newBook.authorId} onChange={(e) => {setNewBook({...newBook, authorId: e.target.value});  console.log("Author updated:", e.target.value);  }}>
                    {authors?.map((item, index) => {
                        return(
                            <option key={item.id} value={item.id}>{item.name}</option>
                        )
                    })}
                </select>
                <select value={newBook.jhaneraId} onChange={(e) => {setNewBook({...newBook, jhaneraId: e.target.value}); console.log("Selected jhanera:", e.target.value);}}>
                    {jhaneras?.map((item, index) => {
                        return(
                            <option key={item.id} value={item.id}>{item.name}</option>
                        )
                    })}
                </select>
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={handleAddOrUpdateBook}
                >
                    {editMode ? "Update" : "Add"}
                </button>
            </div>
        <div class="row">
          <table class="table table-hover border">
            <thead>
              <tr>
                <th>Number</th>
                <th>Book name</th>
                <th>Book price</th>
                <th>Book image</th>
                <th>Book author</th>
                <th>Book genre</th>
                <th colspan="2" class="text-center">
                <Button onClick={open} variant="contained">+ Book</Button>
                </th>
              </tr>
            </thead>
            <tbody>
                {books?.map((item, index) => {
                    return(
                        <tr key={index}>
                            <th>{index+1}</th>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>
                            {/* <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#imageModal">show image </button> */}
                                <img src={item.img} alt="" width="100" height="100"/>
                            </td>
                            <td>{authors.find(author => author.id === item.authorId)?.name}</td>
                            <td>{jhaneras.find(jhanera => jhanera.id === item.jhaneraId)?.name}</td>
                            <td>
                                <button class="btn btn-danger"  onClick={() => handleDeleteBook(item.id)}>Delete</button>
                            </td>
                            <td><button class="btn btn-primary" onClick={() => handleEditBook(item)}>Edit</button></td>
                        </tr>
                    )
                })}
              
              
            </tbody>
          </table>
        </div>
      </div>
    )
}



export default AdminBooks;