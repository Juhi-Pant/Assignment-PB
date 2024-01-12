import React from 'react'
import img3 from '../images/img3.png'


function Page3() {
  return (
    <div>
      <div className='page2'>
        <div className='box'>
        <div className='containerp2'>
        <div className='cont1p2'>
          <div className='h1p2'>The first</div>
          <div className='h1p2'>web3 crypto</div>
          <div className='h1p2'>platform</div>
          <div className='h2p2'>Problem</div>
          <div className='para1p2'>Today, even in alpha communities, there's an enormous volume of information that members have to wade through for 6-8+ hours a day. Cutting through the noise of spam is a real problem even where there's something genuinely worth knowing.</div>
        </div>
        <div className='cont2p2'>
        <div className='h1p2'>We work to make</div>
            <div className="h1p2">your life easier</div>
            <div className="h2p2">Solution</div>
            <div className="para1p2">NFD.gg heralds a new era in alpha communities, one where they have their own platform, which structures and condenses relevant information on all these alpha activities, where our team monitors any updates on these activities 24/7. No more reading 2000+ discord messages a day and tracking twitter day in, day out. Everything you ever need to know can be found on NFD.gg.</div>
        </div>
        </div>
        <div className="imgp2"><img src={img3} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default Page3
