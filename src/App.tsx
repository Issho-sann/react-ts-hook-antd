import React from 'react';
import './App.css';

import Hello from './component/Hello'
import World from './component/World'

interface PropsType {
  name: String
}

const Compiler = (props: PropsType) => <p>{ props.name }</p>

const App: React.FC<PropsType> = ({name}) => {
  return (
    <>
      <h1>{ name }</h1>
      <Hello compiler={1}>
        <>
          <World name="world"/>
          <Compiler name="compiler"/>
        </>
      </Hello>
    </>
  )
}

export default App;
