import React from 'react'
import "./LightBottom.css"



const LightBottom = () => {
  return (
    <div className='swapanimation h-full w-full relative flex justify-center z-50 '>
      <div className='swapbutton flex  z-50  absolute'>
          <span className='s1'></span>
          <span className='s2 mr-20'></span>
      </div>
    </div>

  )
}

export default LightBottom