import React, { useContext, useEffect } from 'react';
import { Store, HOST_API } from '../App';
import Form from './Form';

export const List = () => {
  const { dispatch, state: { todo } } = useContext(Store);
  const currentList = todo.list;

  useEffect(() => {
    fetch(HOST_API + "/todos")
      .then(response => response.json())
      .then((list) => {
        dispatch({ type: "update-list", list });
      });
  }, [dispatch]);


  const onDelete = (id) => {
    fetch(HOST_API + "/" + id + "/todo", {
      method: "DELETE"
    }).then((list) => {
      dispatch({ type: "delete-item", id });
    });
  };

  const onEdit = (todo) => {
    dispatch({ type: "edit-item", item: todo });
  };

  const onChange = (event, todo) => {
    const request = {
      name: todo.name,
      id: todo.id,
      completed: event.target.checked
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
    //Tacha o subraya las tareas
    textDecoration: 'line-through'
  };
  return <div>
    
        {currentList.map((todo) => {
          return ( <div>{todo.id} {todo.name} 
          <input type="checkbox" defaultChecked={todo.completed} onChange={(event) => onChange(event, todo)}></input>
          <button type="button" className="btn btn-danger" onClick={() => onDelete(todo.id)}>Eliminar</button>
          <button type="button" className="btn btn-success" onClick={() => onEdit(todo)}>Editar</button>
          <Form />
          </div> )
            
           
            
  
        })}
      
    
  </div>;
};
