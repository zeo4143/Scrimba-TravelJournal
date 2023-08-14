import React from "react"
import Navbar from "./components/Navbar";
import Cards from "./components/Card";
import data from "./data"
import "./App.css"
export default function App() {

  const cardsData = data.map(item => {
    return (
      
      <Cards 
        {...item}
      />

    )
  })


  return(

    <div>
      <Navbar />
      <div className="grid">
        {cardsData}
      </div>
    </div>
    
    
  )
}