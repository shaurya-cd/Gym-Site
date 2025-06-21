import React from 'react'
import video from '../assets/gymvideo.mp4'

function Video() {
  return (
    <div className='video' id='home'>
      <video src={video} autoPlay loop muted></video>
    </div>
  )
}

export default Video