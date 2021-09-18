import React, { createContext } from 'react';
import { Form } from './components/Form';
import { List } from './components/List';
import { StoreProvider } from './StoreProvider';
import FormCategory  from './components/FormCategory';
import ListCategory  from './components/ListCategory';



export const initialState = {
  todo: { list: [], item: {} },
  todoList: { list: [], item: {} },
};
export const Store = createContext(initialState)


function App() {
  return <StoreProvider>
    <h3>Lista tus tareas por categorias, editalas y eliminalas cuando las completes...</h3>
    <div className="container">
      <br />
      <div className="row border rounded">
        <h1>Ingresa una lista de TodoList</h1>
        <FormCategory />
      </div>
      <br />
    </div>
    <ListCategory/>
  </StoreProvider>
}

export default App;
