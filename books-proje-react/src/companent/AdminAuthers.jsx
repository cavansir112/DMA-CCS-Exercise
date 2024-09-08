import React from "react";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks, getAllAuthors, getAllJhaneras, addAuther, updateAuther, deleteAuther }  from "./bookSlice.jsx";
import Button from '@mui/material/Button';

function AdminAuthers() {
    const [modalActive2, setModalActive2] = useState(false);
    const [editMode, setEditMode] = useState(false); 
    const [editingAuther, setEditingAuther] = useState(null); 
    const [newAuther, setNewAuther] = useState({
        name: ''
    });

    let dis=useDispatch();
    const {authors} = useSelector(state => state.bookSection);
    useEffect(() => {
        dis(getAllBooks())
        dis(getAllAuthors())
        dis(getAllJhaneras())
    },[dis]);

    const handleDeleteAuther = (autherId) => {
        dis(deleteAuther(autherId));  
    };

    const handleEditAuther = (auther) => {
        setNewAuther({
            name: auther.name,
            
        });
        setEditingAuther(auther);
        setEditMode(true);
        setModalActive2(true);
    };

    const handleAddOrUpdateAuther = () => {
        if (editMode) {
            dis(updateAuther({ ...editingAuther, ...newAuther }));
        } else {
            dis(addAuther(newAuther));
        }
        setModalActive2(false);
        setNewAuther({ name: ""});
        setEditMode(false); 
        setEditingAuther(null);
    };

    const closeA = () => {
        setModalActive2(false);
        setNewAuther({ name: ""});
        setEditMode(false);
        setEditingAuther(null);
      };

      const openA = () => {
        setModalActive2(true);
      };

    return (
        <div class="container mt-5">
            
            <div className={`modal ${modalActive2 ? "modal-active" : ""}`}>
                <div className="d-flex justify-content-end">
                    <i onClick={closeA} className="fa-solid fa-x"></i>
                </div>
                <input type="text" placeholder="author name"  value={newAuther.name || ""} onChange={(e) => setNewAuther({...newAuther, name: e.target.value})}/>
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={handleAddOrUpdateAuther}
                >
                    {editMode ? "Update" : "Add"}
                </button>
            </div>
            
        <div class="row">
          <table class="table table-hover border">
            <thead>
              <tr>
                <th>Number</th>
                <th>Auther name</th>
                <th colspan="2" class="text-center">
                <Button onClick={openA} variant="contained">+ Yazici</Button>
                </th>
              </tr>
            </thead>
            <tbody>
                {authors?.map((item, index) => {
                    return(
                        <tr key={index}>
                            <th>{index+1}</th>
                            <td>{item.name}</td> 
                            <td>
                                <button class="btn btn-danger"  onClick={() => handleDeleteAuther(item.id)}>Delete</button>
                            </td>
                            <td><button class="btn btn-primary" onClick={() => handleEditAuther(item)}>Edit</button></td>
                        </tr>
                    )
                })}
              
              
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default AdminAuthers;