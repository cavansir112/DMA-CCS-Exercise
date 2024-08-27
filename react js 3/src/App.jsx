import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Table from './Table';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [data, setData] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", age: "" });
  const [modalActive, setModalActive] = useState(false);
  const [updateId, setupdateId] = useState("");
  let url = "http://localhost:3000/users";
function  getData(){
  axios.get(url).then((res) => {
    setData(res.data);
  });
}
  useEffect(() => {
    getData()
  }, []);

  const addUser = () => {
    let user = { ...newUser, id: uuidv4() };
    if (user.name !== "" && user.age !== "") {
      axios.post(url, user).then(() => {
        setData([...data, user]);
      });
      setModalActive(false);
      setNewUser({ name: "", age: "" });
    } else {
      alert("Lütfen tüm alanları doldurun.");
    }
  };

  const close = () => {
    setModalActive(false);
  };

  const open = () => {
    setModalActive(true);
  };

  const del = (id) => {
    axios.delete(`${url}/${id}`).then(() => {
      let updatedData = data.filter((user) => user.id !== id);
      setData(updatedData);
    });
  };

  const edit = (id) => {
    let findUser = data.find((user) => user.id === id);
    setNewUser(findUser);
    setupdateId(id);
    setModalActive(true);
  };

  const updateUser = () => {
    axios.put(`${url}/${updateId}`, newUser).then(() => {
      let updatedUsers = data.map((user) =>
        user.id === updateId ? newUser : user
      );
      setData(updatedUsers);
      setupdateId("");
      setNewUser({ name: "", age: "" });
    });
    setModalActive(false);
  };

  const changeUsers = (e) => {
    if(e.target.value){
      let searchTerm = e.target.value.toLowerCase();
    let filtered = data.filter((user) =>
      user.name.toLowerCase().startsWith(searchTerm)
    );
    console.log(filtered);
    setData(filtered);
    }else{
      return getData()
    }
    
  };

  return (
    <>
      <div className={`modal ${modalActive ? "modal-active" : ""}`}>
        <div className="d-flex justify-content-end">
          <i onClick={close} className="fa-solid fa-x"></i>
        </div>
        <input type="text" placeholder="name" value={newUser.name} onChange={(e) => setNewUser({ name: e.target.value, age: newUser.age })}/>
        <input type="text" placeholder="age" value={newUser.age} onChange={(e) => setNewUser({ name: newUser.name, age: e.target.value })}/>
        {updateId ? (
          <button type="button" className="btn btn-outline-success" onClick={updateUser}>edit</button>) 
          : 
          (<button type="button" className="btn btn-outline-primary" onClick={addUser}> add </button>
        )}
      </div>
      <div className="table-divs">
        <input class="form-control mb-5 p-3" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={changeUsers} placeholder="axtar..."
        />
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
              <th>sil</th>
              <th>edit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => {
              return (
                <Table key={user.id} id={user.id} name={user.name} age={user.age} del={del} edit={edit} />
              );
            })}
          </tbody>
        </table>
        <button onClick={open} className="btn btn-primary mt-4">
          Adds Button
        </button>
      </div>
    </>
  );
}

export default App;
