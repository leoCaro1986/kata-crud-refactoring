import React, { createContext } from 'react';
// import { Form } from './components/Form';
// import { List } from './components/List';
import { StoreProvider } from './util/Store';
import FormCategory  from './components/FormCategory';
import ListCategory  from './components/ListCategory';



// export const initialState = {
//   todo: { list: [], item: {} },
//   todoList: { list: [], item: {} },
// };
// export const Store = createContext(initialState)


function App() {
  return <StoreProvider>
    <h3>Lista tus tareas por categorias, editalas y eliminalas cuando las completes...</h3>
    <div className="container">
      <br />
      <div className="row border rounded">
        <h1>Crea una Categoria</h1>
        <FormCategory />
      </div>
      <br />
    </div>
    <ListCategory/>
  </StoreProvider>
}

export default App;
