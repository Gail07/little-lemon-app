import React from 'react'
import './AppDownload.css'
import { images } from '../../images'

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <h2>Download Our App</h2>
      <p>Get the latest updates and exclusive offers!</p>
      <div className="app-download-platforms">
        <img src={images.playStore} alt=""/>
        <img src={images.appStore} alt=""/>
      </div>
      <button>Download Now</button>
    </div>
  )
}

export default AppDownload