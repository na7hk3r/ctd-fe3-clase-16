import React, { useEffect, useState } from 'react'
import Card from "../components/Card"

const Home = () => {
  const [beers, setBeers] = useState([])

  const getBeers = async () => {
    try {
      const res = await fetch("https://api.sampleapis.com/beers/ale/")
      const data = await res.json()
      setBeers(data)
    } catch (error) {
      console.error("Error fetching beers:", error)
    }
  }

  useEffect(() => {
    getBeers()
  }, [])

  return (
    <div className='beer-list'>
      {beers.length 
        ? beers.map((beer, index) => (<Card key={index} data={beer} />))
        : <p>Loading...</p>
      }
    </div>
  )
}

export default Home