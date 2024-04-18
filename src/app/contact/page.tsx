import { BackgroundBeams } from '@/components/ui/background-beams'
import React from 'react'

function page() {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <BackgroundBeams />
        <div className='w-full flex justify-center items-center'>
          <form>
          <div className="w-full md:w-1/3">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Enter your name"
              
              id="name"
            ></input>
          </div>
          </form>
        </div>
    </div>
  )
}

export default page