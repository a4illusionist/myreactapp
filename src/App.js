import React from 'react';
import Dinner from './Dinner';

function App() {
  return (
    <div className="App">
      <h1>Serving </h1>
      <Dinner dishName="Chicken Dampukht"/>
      <Dinner dishName="Kheer"/>
      <Dinner dishName="Drinks"/>
    </div>
  )
};

export default App;
