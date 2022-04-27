import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { createCourse } from '../../api/courses'
import CourseForm from '../shared/CourseForm'
import { useNavigate } from 'react-router-dom'

const CreateCourse = (props) => {
    const navigate = useNavigate()
    const[course, setCourse] = useState({courseName:'', courseInstitute:'', image:'https://www.creativefabrica.com/wp-content/uploads/2020/02/16/Education-Logo-Graphics-1-2.jpg', 
    courseLink:"", courseSubject:'',teacher:'', location:'', startDate:'', 
    endDate:'',daysOfCourse:'',startTime:'', endTime:'',credits:true, tag: Number })
    const {user} = props

    const handleChange = (e) => {
        e.persist()
        setCourse(prevCourse => {
            const name = e.target.name
            let value = e.target.value
    
            if(name === "credits" && e.target.checked){
                value = true
            } else if (name === "credits" && !e.target.checked){
                value = false
            }
    
            const updatedValue = { [name]: value }
    
            return {...prevCourse, ...updatedValue}
        })
    }

    // const handleTagSelect = (e) => {
    //     const courseTags = course.tags
    //     console.log(courseTags,'coursetags')
    //     const checked = e.target.checked
    //     const updatedTarget = courseTags.push(e.target.value)
    //     return {...updatedTarget}
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        createCourse(user,course)
            .then(res=> 
                {navigate(`/courses/${res.data.course.id}`)})
            .catch(console.error)
    }

    return (
        <div className="text-info bg-dark">
            <CourseForm
            course={course}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            // handleTagSelect={handleTagSelect}
            heading='Add a new Course'
        />
        </div>
        )

}

export default CreateCourse