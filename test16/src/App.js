import React from 'react';
import { Music } from './components/music';
import { Plan } from './components/plan';
import { Todos } from './components/todos';

const App = () => {
  return (
    <div>
      <Todos/>
      <Music/>
      <hr/>
      <Plan/>
    </div>
  );
};

export default App;