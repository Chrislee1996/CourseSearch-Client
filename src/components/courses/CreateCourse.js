import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { createCourse } from '../../api/courses'
import CourseForm from '../shared/CourseForm'
import { useNavigate } from 'react-router-dom'

const CreateCourse = (props) => {
    const navigate = useNavigate()
    const[course, setCourse] = useState({courseName:'', courseInstitute:'', image:'', 
    courseLink:"", courseSubject:'',teacher:'', location:'', startDate:'', 
    endDate:'',daysOfCourse:'',startTime:'', endTime:'',credits:true, tags: [] })
    const {user, msgAlert} = props

    const [tag] = useState({
        courses:[]
    })
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

    const handleTagSelect = (e) => {
        const courseTags = course.tags

        let updatedTagDetails
        const checked = e.target.checked
        if (checked) {
            updatedTagDetails = courseTags.push(e.target.value)
        } else {
            let courseIndex = courseTags.indexOf(e.target.value)
            courseTags.splice(courseIndex,1)
            updatedTagDetails=courseTags
        }
        return {...updatedTagDetails}
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createCourse(user,course)
            .then(res=> 
                {navigate(`/courses/${res.data.course.id}`)})
            .then(()=> {
                    msgAlert({
                        heading:'Course Created!',
                        message: 'Course Successfully Created',
                        variant:'success'
                    })
                })
                .catch(()=> {
                    msgAlert({
                        heading:'Unable to Create Course',
                        message: 'Something went wrong',
                        variant:'danger'
                    })
                })
    }

    return (
        <div className="text-info bg-dark">
            <CourseForm
            course={course}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleTagSelect={handleTagSelect}
            heading='Add a new Course'
        />
        </div>
        )

}

export default CreateCourse