import React from "react";import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks, getAllAuthors, getAllJhaneras, addJhanera, updateJhanera, deleteJhanera }  from "./bookSlice.jsx";
import Button from '@mui/material/Button';

function AdminJhaneras(){
    const [modalActive3, setModalActive3] = useState(false);
    const [editMode, setEditMode] = useState(false); 
    const [editingJhanera, setEditingJhanera] = useState(null); 
    const [newJhanera, setNewJhanera] = useState({
        name: ''
    });

    let dis=useDispatch();
    const {jhaneras} = useSelector(state => state.bookSection);
    useEffect(() => {
        dis(getAllBooks())
        dis(getAllAuthors())
        dis(getAllJhaneras())
    },[dis]);

    const handleDeleteJhanera = (jhaneraId) => {
        dis(deleteJhanera(jhaneraId));  
    };

    const handleEditJhanera = (jhanera) => {
        setNewJhanera({
            name: jhanera.name,
            
        });
        setEditingJhanera(jhanera);
        setEditMode(true);
        setModalActive3(true);
    };

    const handleAddOrUpdateJhanera = () => {
        if (editMode) {
            dis(updateJhanera({ ...editingJhanera, ...newJhanera }));
        } else {
            dis(addJhanera(newJhanera));
        }
        setModalActive3(false);
        setNewJhanera({ name: ""});
        setEditMode(false); 
        setEditingJhanera(null);
    };

    const closeJ = () => {
        setModalActive3(false);
        setNewJhanera({ name: ""});
        setEditMode(false);
        setEditingJhanera(null);
      };

      const openJ = () => {
        setModalActive3(true);
      };
    return (
        <div class="container mt-5">
            
            <div className={`modal ${modalActive3 ? "modal-active" : ""}`}>
                <div className="d-flex justify-content-end">
                    <i onClick={closeJ} className="fa-solid fa-x"></i>
                </div>
                <input type="text" placeholder="jhanera name"  value={newJhanera.name || ""} onChange={(e) => setNewJhanera({...newJhanera, name: e.target.value})}/>
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={handleAddOrUpdateJhanera}
                >
                    {editMode ? "Update" : "Add"}
                </button>
            </div>
            
        <div class="row">
          <table class="table table-hover border">
            <thead>
              <tr>
                <th>Number</th>
                <th>Jhanera name</th>
                <th colspan="2" class="text-center">
                <Button onClick={openJ} variant="contained">+ Janir</Button>
                </th>
              </tr>
            </thead>
            <tbody>
                {jhaneras?.map((item, index) => {
                    return(
                        <tr key={index}>
                            <th>{index+1}</th>
                            <td>{item.name}</td> 
                            <td>
                                <button class="btn btn-danger"  onClick={() => handleDeleteJhanera(item.id)}>Delete</button>
                            </td>
                            <td><button class="btn btn-primary" onClick={() => handleEditJhanera(item)}>Edit</button></td>
                        </tr>
                    )
                })}
              
              
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default AdminJhaneras;