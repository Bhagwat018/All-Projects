import React from 'react'
import { useState } from 'react'

const Project5 = () => {
  let [data, setdata] = useState('')
  const clickh = () => {
    let newtext = data.toUpperCase()
    setdata(newtext)
  }
  const clickhh = () => {
    let rama = data.toLowerCase()
    setdata(rama)
  }

  const selecttext = () => {
    let newt = data.split(/[ ]+/)
    setdata(newt.join(' '))
  }
  const cleantext = () => {
    setdata('')
  }

  const textyoushow = () => {
    setdata('Hello !  this side , I am a web devloper ...........')
  }
  const randompara = () => {
    setdata(
      'Motivation is significant for the overall growth of your mind as well as Motivation is significant for the overall growth of your mind as well as personality.It helps you focus on your goals based on values and skills.Motivation helps professionals to be positive and happy while working hard to achieve goals. ',
    )
  }

  return (
    <div>
      <p>Enter text to do something in your life...😂❤️✍️</p>
      <textarea
        className="mx-5"
        name=""
        id=""
        cols="50"
        onChange={(e) => {
          setdata(e.target.value)
        }}
        value={data}
        rows="10"
      ></textarea>{' '}
      <br />
      <button className="btn btn-secondary my-3 my-1 mx-2" onClick={clickh}>
        Uppercase
      </button>
      <button className="btn btn-secondary my-3 my-1 mx-2" onClick={clickhh}>
        Lowercase
      </button>
      <button className="btn btn-secondary my-3 my-1 mx-2" onClick={selecttext}>
        Remove Speces
      </button>
      <button className="btn btn-secondary my-3 my-1 mx-3 " onClick={cleantext}>
        Clean Data
      </button>
      <button
        className="btn btn-secondary my-3 my-1 mx-3"
        onClick={textyoushow}
      >
        About Devloper
      </button>
      <button className="btn btn-secondary my-3 my-1 mx-3" onClick={randompara}>
        Random Para.
      </button>
    </div>
  )
}

export default Project5
