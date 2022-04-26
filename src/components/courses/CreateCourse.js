import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { createCourse } from '../../api/courses'
import CourseForm from '../shared/CourseForm'
import { useNavigate } from 'react-router-dom'

const CreateCourse = (props) => {
    const navigate = useNavigate()
    const[course, setCourse] = useState({courseName:'', courseInstitute:'', image:'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop', 
    courseLink:"", courseSubject:'',teacher:'', location:'', startDate:'', 
    endDate:'',daysOfCourse:'',startTime:'', endTime:'',credits:true, })
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
            heading='Add a new Course'
        />
        </div>
        )

}

export default CreateCourse