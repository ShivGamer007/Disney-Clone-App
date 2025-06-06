import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import ProductionHouse from './Components/ProductionHouse'
import GenreMovieList from './Components/GenreMovieList'

function App() {
  

  return (
    <div className="App">
      <Header />
      
      <Slider />

      <ProductionHouse />

      <GenreMovieList />
      
    </div>
  )
}

export default App
