import React from 'react'
import { PuffLoader } from 'react-spinners'

function Loading() {
  return (
    <div className='fixed top-0 left-0 grid place-content-center h-screen w-full bg-gray-300 opacity-70'>
        <PuffLoader
            size="50px"
            color='black'
            loading={true}
        />
    </div>
  )
}

export default Loading