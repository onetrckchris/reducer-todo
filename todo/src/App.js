import React, { useReducer } from 'react';

import { reducer, initialState } from './reducers/reducer';
import Todos from './components/Todos';

import './App.css';

function App() {
  const [{todos}, dispatch] = useReducer(reducer, initialState)

  const addItem = (item) => {
    dispatch({ type: 'ADD_TODO_ITEM', payload: item });
  }

  const toggleItem = (itemId) => {
    dispatch({ type: 'TOGGLE_TODO_ITEM', payload: itemId });
  }

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  }

  return (
    <div className="App">
      {/* I'm going to be making this more complicated than it needs to be.
      This is for practice, for when I get to larger scale applications. */}
      <Todos todos={todos} addItem={addItem} toggleItem={toggleItem} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
