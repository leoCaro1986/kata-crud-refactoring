import React, { useContext, useEffect } from 'react';
import Store from '../util/Store';

const HOST_API = "http://localhost:8080/api";

const List = ({TodoListId}) => {
  const {dispatch, state:{todo}} = useContext(Store);
    const currentList = todo.list.filter(todo => {
      return todo.groupListId === TodoListId;
    });

  useEffect(() => {
    fetch(HOST_API + "/todos")
      .then(response => response.json())
      .then((list) => {
        dispatch({ type: "update-list", list })
      })
  }, [dispatch]);


  const onDelete = (id) => {
    fetch(HOST_API + "/" + id + "/todo", {
      method: "DELETE"
    }).then((list) => {
      dispatch({ type: "delete-item", id })
    })
  };

  const onEdit = (todo) => {
    dispatch({ type: "edit-item", item: todo })
  };

  const onChange = (event, todo) => {
    const request = {
      name: todo.name,
      id: todo.id,
      completed: event.target.checked,
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
      });
  };

  const decorationDone = {
    textDecoration: 'line-through'
  };
  return <div>
    <table >
      <thead >
        <tr>
          <td>ID</td>
          <td>Tarea</td>
          <td>Estado</td>
        </tr>
      </thead>
      <tbody>
        {currentList.map((todo) => {
          return <tr key={todo.id} style={todo.completed ? decorationDone : {}}>
            <td>{todo.id}</td>
            <td>{todo.name}</td>
            <td><input type="checkbox" defaultChecked={todo.completed} onChange={(event) => onChange(event, todo)}></input></td>
            <td><button className="btn btn-outline-danger" onClick={() => onDelete(todo.id)} >Eliminar</button></td>
            <td><button className="btn btn-outline-info" onClick={() => onEdit(todo)} >Editar</button></td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
}

export default List;
