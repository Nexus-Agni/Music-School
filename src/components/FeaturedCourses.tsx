'use client'
import React from 'react'
import courseData from '../data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'
import { Button } from './ui/moving-border'

interface Course {
    id : number,
    title : string,
    slug : string,
    description : string,
    price : number,
    instructor : string,
    isFeatured : boolean,
    image : string
}

function FeaturedCourses() {

    const featuredCourses = courseData.courses.filter((course : Course) => course.isFeatured)

  return (
    <div className='py-12 bg-gray-900'>
        <div>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase '>FEATURED COURSES</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the best</p>
            </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center my-7'>
            {
                featuredCourses.map((course : Course)  => (
                    <div key={course.id} className='justify-center flex'>
                        <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                            <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{course.title}</p>
                                <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{course.description}</p>
                                
                                <Button className='bg-black dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 py-5'>
                                <Link href={`/courses/${course.slug}`} > 
                                Learn More
                                </Link>
                                </Button>

                            </div>
                        </BackgroundGradient>
                    </div>
                ))
            } 
        </div>
        <div className='mt-20 text-center'>
            <Link href={"/courses"} className='px-6 py-4 rounded-2xl border-neutral-500 border bg-blue-950 text-neutral-200 hover:bg-black transition duration-200'>
                View All Courses
            </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses