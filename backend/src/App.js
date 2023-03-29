import React from 'react';
import './App.css';
import RoutInfo from './routes/RoutInfo';
import Preloader from './components/blocks/Preloader';

function App() {
  return (
    <>
      <Preloader />

      <RoutInfo />
    </>
  );
}

export default App;
