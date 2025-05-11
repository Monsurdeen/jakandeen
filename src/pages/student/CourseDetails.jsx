import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

const CourseDetails = () => {
  const { id } = useParams()
  const [courseData, setCourseData] = useState(null)
  const { allCourses } = useContext(AppContext)

  useEffect(() => {
    const fetchCourseData = () => {
      const findCourse = allCourses.find(course => course._id === id)
      setCourseData(findCourse)
    }

    fetchCourseData()
  }, [allCourses, id])

  return courseData ? (
    <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-8 md:pt-20 text-left'>
      <div className='absolute top-0 left-0 w-full h-section-height -z-1 bg-gradient-to-b from-cyan-100/70'></div>

      {/* Left column */}
      <div>
        <h1>{courseData.courseTitle}</h1>
        <p dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }}></p>
      </div>

      {/* Right column */}
      <div></div>
    </div>
  ) : (
    <p>Loading...</p>
  )
}

export default CourseDetails
