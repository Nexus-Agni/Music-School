"use client";
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const musicSchoolContent = [
    {
      name: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      quote:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
      title : ""
    },
    {
      name: 'Live Feedback & Engagement',
      quote:
        'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.',
        title : ""
    },
    {
      name: 'Cutting-Edge Curriculum',
      quote:
        'Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.',
        title : ""
    },
    {
      name: 'Limitless Learning Opportunities',
      quote:
        'With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.',
        title : ""
    },
  ];

function TestimonialCards() {
  return (
    <div className='h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] pt-10'> 
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-8">Hear Our Harmony: Voices of Success</h2>
            <InfiniteMovingCards items={musicSchoolContent} speed='slow' direction='left'/>
        </div>
    </div>
  )
}

export default TestimonialCards