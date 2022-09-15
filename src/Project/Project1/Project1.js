import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Project1 = () => {
  let [data, setdata] = useState([])
  let maja = [...data]

  useEffect(() => {
    let url =
      ' https://newsapi.org/v2/top-headlines?country=us&apiKey=7a80edc634a44f72975f5dffd5ddfc4d'
    fetch(url)
      .then((respo) => {
        return respo.json()
      })
      .then((jons) => {
        // console.log(jons.articles[0].title)
        setdata(jons.articles)
      })
  }, [])
  return (
    <div>
      <h1>This is best news </h1>
      {maja.map((non) => (
        <>
          <div className="card mb-3" key={non.title} style={{ width: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={!non.urlToImage?"https://images.unsplash.com/photo-1609873963505-a5061290ec5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGhlJTIwc291cmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60":non.urlToImage}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{non.title}</h5>
                  <p className="card-text">{non.descriotion}</p>
                  <p className="card-text">
                    <small className="text-muted">{non.publishedAt}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export default Project1
