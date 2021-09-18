import React, { useContext, useEffect } from 'react';
import Store from '../util/Store';
import Todo from './components/Todo';
import TodoForm from '../components/Form';

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

    return <div className=" container text-center">
        {currentTodoList.map((elemento) => {
            return <div key={elemento.id} >
                <div >
                    <span >Nombre de la TodoList</span>
                    <input disabled={true} value={elemento.nameList} />
                    <button onClick={() => onDelete(elemento.id)} >Eliminar</button>
                </div>
                <TodoForm TodoListId={elemento.id} />
                <Todo TodoListId={elemento.id} />
            </div>
        })}
    </div>

}

export default ListCategory;