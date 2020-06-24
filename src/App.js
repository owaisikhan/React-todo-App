import React from 'react';
import './App.css';
import {Child} from './Child'
import { GlobalStateProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalStateProvider>
    <Child/>
    </GlobalStateProvider>
  )
    
}

export default App;
