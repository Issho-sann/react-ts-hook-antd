import React from 'react';
import './App.css';

import Hello from './component/Hello'

interface PropsType {
  name: String
}

const World = (props: PropsType) => <p>{ props.name }</p>

const App: React.FC<PropsType> = ({name}) => {
  return (
    <>
      <h1>{ name }</h1>
      <Hello compiler={1}>
        <World name="world"/>
      </Hello>
    </>
  )
}

export default App;
