import React, { useReducer } from 'react';
import { Reducer } from './util/Reducer';
import { initialState, Store } from './App';


export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>
    {children}
  </Store.Provider>;

};
