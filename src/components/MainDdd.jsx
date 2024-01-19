import React from 'react'
import videoBg from '../assets/video/lba_landingpage_video.mp4'

const Main = () => {
  return (
    <div className='main'>
        {/* <div className="overlay"></div> */}
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1>Bienvenue</h1>
            <p>Sur le site</p>
        </div>
    </div>
  )
}

export default Main