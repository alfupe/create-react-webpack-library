import React from 'react';
import './App.css';
import { TSButton, Button } from '@timingsense/ts-uikit';

function App() {
  return (
    <div className="App">
      <Button message={'holi'} />
      <TSButton message={'holi TS'} />
    </div>
  );
}

export default App;
