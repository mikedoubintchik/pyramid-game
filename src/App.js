import React from 'react'
import './App.css'
import Atom from './components/Atom'
import Joint from './components/Joint'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to our Pyramid Puzzle ~</h2>
        <div className="molecule-taurus">
          <Atom index="1" name="taurus"></Atom>
          <Atom index="2" name="taurus"></Atom>
          <Atom index="3" name="taurus"></Atom>
          <Atom index="4" name="taurus"></Atom>
          <Atom index="5" name="taurus"></Atom>
          <Joint index="1" name="taurus" direction="v"></Joint>
          <Joint index="2" name="taurus" direction="h"></Joint>
          <Joint index="3" name="taurus" direction="v"></Joint>
          <Joint index="4" name="taurus" direction="h"></Joint>
          <Joint index="5" name="taurus" direction="v"></Joint>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Game
        </a>
      </header>
    </div>
  )
}

export default App
