import React from 'react'

function Page1({className = '', prop, image, imgClass, heading, headingClass, h2, h2class, pContent, contentpg1, btnName, btnNext}) {
  return (
    <div className={`${className}`}>
      <div>
        <img src={image} alt="" className={`${imgClass}`}/>
      </div>
      <div className={`${headingClass}`}>NFD {heading}</div>
      <div className={`${h2class}`}>"{h2}"</div>
      <div className={`${contentpg1}`}>{pContent}</div>
      
      <div className='btnpg1'>
        <button>{btnName}</button>
        <div>{btnNext}</div>
      </div>

    </div>
  )
}

export default Page1
