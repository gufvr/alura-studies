import React from 'react';
import style from './App.module.scss';
import Form from '../components/Form';
import List from '../components/List';
import Stopwatch from '../components/Stopwatch';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Stopwatch />
    </div>
  );
}

export default App;
