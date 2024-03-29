import React from 'react'
import Brighter from '../components/common/Brighter'
import Quote from '../components/common/Quote'
import Para from '../components/common/Para'
import GetInTouch from '../components/common/GetInTouch'
import GetInTouchForm from '../components/core/Auth/GetInTouchForm'

function AboutUs() {
  return (
    <div className='bg-richblack-700'>
       
       {/* section 1  */}
       <Brighter />
       {/* section 2  */}
        <Quote />
        {/* section 3 */}
      <Para />
      {/* section 4  */}
        <GetInTouch />
        {/* section 5  */}
        <GetInTouchForm />
    </div>
  )
}

export default AboutUs
