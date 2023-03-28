import React from 'react'
import './App.css'
import Header from './Components/Header'
import Movie from './Components/Movie'
const App = () => {
  return (
    <div>
      <Header />
    <div className='main'>
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </div>
    </div>
  )
}

export default App