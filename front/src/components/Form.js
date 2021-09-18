import React, { useContext, useRef, useState } from 'react';
import Store from '../util/Store';

const HOST_API = "http://localhost:8080/api";

const Form = ({ TodoListId }) => {

  const formReference = useRef(null);
  const { dispatch, state: { todo } } = useContext(Store);
  const item = todo.item;
  const [state, setState] = useState(item);

  const onAdd = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: null,
      completed: false,
      groupListId: TodoListId
    };


    fetch(HOST_API + "/todo", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((todo) => {
        dispatch({ type: "add-item", item: todo });
        setState({ name: "" });
        formReference.current.reset();
      });
  }

  const onEdit = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: item.id,
      isCompleted: item.isCompleted,
      groupListId: TodoListId
    };


    fetch(HOST_API + "/todo", {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((todo) => {
        dispatch({ type: "update-item", item: todo });
        setState({ name: "" });
        formReference.current.reset();
      });
  }

  return <form className="form-control" ref={formReference}>
    <div className=" container my-2 input-group mb-3" >
      <span className="input-group-text">Que deseas hacer?</span>
      <input className="form-control" type="text" name="name"  defaultValue={item.name}
        onChange={(event) => {
          setState({ ...state, name: event.target.value })
        }}  ></input>
          {item.id && <button className="btn btn-outline-secondary" onClick={onEdit}  >Actualizar</button>}
    {!item.id && <button className="btn btn-outline-success" onClick={onAdd}  >Crear</button>}</div>
    

  </form>
}


export default Form;
