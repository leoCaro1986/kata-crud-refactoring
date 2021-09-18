import React, { useContext, useEffect } from 'react';
import Store from '../util/Store';
import List from '../components/List';
import Form from '../components/Form';

const HOST_API = "http://localhost:8080/api";

const ListCategory = () => {
    const { dispatch, state: { todoList } } = useContext(Store);
    const currentTodoList = todoList.list;

    useEffect(() => {
        fetch(HOST_API + "/todoslist")
            .then(response => response.json())
            .then((list) => {
                dispatch({ type: "todolist", list })
            })
    }, [dispatch]);

    const onDelete = (id) => {
        fetch(HOST_API + "/" + id + "/deleteList", {
            method: "DELETE"
        }).then((list) => {
            dispatch({ type: "delete-todolist", id })
        })
    };

    return <div className=" container text-center ">
        {currentTodoList.map((elemento) => {
            return <div className="border my-5 " key={elemento.id} >
                <div >
                    <span >Categoria</span>
                    <input 
                    className="form-control "  
                    disabled={true} 
                    value={elemento.nameList} />
                    <button
                    className="btn btn-outline-danger" 
                    onClick={() => onDelete(elemento.id)} >Eliminar
                    </button>
                </div>
                <Form TodoListId={elemento.id} />
                <List TodoListId={elemento.id} />
            </div>
        })}
    </div>

}

export default ListCategory;