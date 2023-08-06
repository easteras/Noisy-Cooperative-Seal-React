import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Noisy Cooperative Seal</title>
        <meta property="og:title" content="Noisy Cooperative Seal" />
      </Helmet>
      <a
        href="https://soloreadit.com/short/81472?stream_uuid=feaf32f4-615f-457f-b41c-a96d0750e9c5&amp;trek=1"
        className="home-link"
      >
        <img alt="image" src="/5435344-300w.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
