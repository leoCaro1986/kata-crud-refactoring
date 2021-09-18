import React, { useContext, useRef, useState } from 'react';
import Store from '../util/Store';

const HOST_API = "http://localhost:8080/api";

const FormCategory = () => {

    const formRef = useRef(null);
    const { dispatch, state: { todoList } } = useContext(Store);
    const item = todoList.item;
    const [state, setState] = useState(item);

    const onAdd = (event) => {
        event.preventDefault();
        const request = {
            nameList: state.nameList,
            id: null
        };

        fetch(HOST_API + "/createlist", {
            method: "POST",
            body: JSON.stringify(request),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json())
            .then((todoList) => {
                dispatch({ type: "todolist-add", item: todoList });
                setState({ nameList: "" });
                formRef.current.reset();
            });
    }

    return <form ref={formRef} className="form">
        <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Nombre de la categoria"
            onChange={(event) => {
                setState({ ...state, nameList: event.target.value })
            }}  ></input>
        <br />
            <button className="btn btn-outline-success" onClick={onAdd} >Crear</button>
        <br />
    </form>
}

export default FormCategory;