import React, { createContext } from 'react';
import { Form } from './components/Form';
import { List } from './components/List';
import { StoreProvider } from './util/StoreProvider';
import  FormListTodo  from './components/FormListTodo';

export const HOST_API = "http://localhost:8080/api";
export const initialState = {
  todo: { list: [], item: {} }
};
export const Store = createContext(initialState)




function App() {
  return <StoreProvider>
    <h3>To-Do List</h3>
    <FormListTodo/>
    
    <List />
  </StoreProvider>
}

export default App;
