import React from 'react'

const Display = () => {
  return (
    <div className='grid grid-cols-2 items-center bg-black'>
    <div className='h-[400px]'>
      <dotlottie-player src="https://lottie.host/24590414-81cb-4e76-9ff9-154aa1cca69d/sUoD2tUtFl.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
    </div>
    <div>
      <h1 className='text-pink-500'>Hi, im Babuskaa!</h1>
      <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab delectus animi repellendus esse consectetur veritatis omnis impedit laborum, dolor, quibusdam itaque quidem commodi dolorum sunt beatae sit enim totam blanditiis!</p>
    </div>
    </div>
  )
}   

export default Display