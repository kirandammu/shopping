import React from 'react'
import Hero from './Hero'
import Exclusive from './Exclusive'
import Popular from './Popular'
import NewCollection from './NewCollection'
import Newss from './Newss'

const Shops = () => {
  return (
    <div className='shops'>
      <Hero/>
      <Popular/>
      <Exclusive/>
      <NewCollection/>
      <Newss/>
    </div>
  )
}

export default Shops
