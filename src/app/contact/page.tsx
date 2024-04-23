import Form from '@/components/Form'
import { Spotlight } from '@/components/ui/Spotlight'
import { BackgroundBeams } from '@/components/ui/background-beams'
import React from 'react'

function page() {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <Spotlight fill='white'/>
        <BackgroundBeams />
        <Form />
    </div>
  )
}

export default page