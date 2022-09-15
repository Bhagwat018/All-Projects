import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const Project3 = () => {
  let [rama, setrama] = useState([])
  let [ramaa, setramaa] = useState([])
  let date = new Date()
  let changeh = () => {
    setramaa(date.toLocaleTimeString())
  }

  // const cama=[...rama]
  useEffect(() => {
    const rajaji = async () => {
      try {
        const balu = await fetch('https://api.adviceslip.com/advice')
        const rambabu = await balu.json()
        setrama(rambabu.slip)
        // console.log(rambabu.slip)
      } catch (error) {
        console.log(error)
      }
    }

    rajaji()
  }, [ramaa])

  return (
    <div>
      <h1>Project3</h1>
      <h2>{rama.advice}</h2>
      <button onClick={changeh}>click</button>
    </div>
  )
}

export default Project3
