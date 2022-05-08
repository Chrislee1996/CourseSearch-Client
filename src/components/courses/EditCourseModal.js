import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import CourseForm from '../shared/CourseForm'

const EditCourseModal = (props) => {
    const { user, show, handleClose, updateCourse, triggerRefresh } = props
    const [course, setCourse] = useState(props.course)

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

            if(name === "tags" && e.target.checked){
                value = e.target.checked
            } else if (name === "tags" && !e.target.checked){
                value = false
            }
    
            const updatedValue = { [name]: value }
    
            return {...prevCourse, ...updatedValue}
            })
        }

    const handleSubmit = (e) => {
        e.preventDefault()
    
        updateCourse(user,course,tag)
            .then(() => handleClose())
            .then(()=> triggerRefresh())
            .catch(console.error)
    }
    
    const handleTagSelect = (e, tag) => {
        const courseTags = course.tags

        let updatedTagDetails
        const checked = e.target.checked
        if (checked) {
            updatedTagDetails = courseTags.push(tag)
        } else {
            let index = courseTags.indexOf(tag)
            courseTags.splice(index,1)
            updatedTagDetails=courseTags
            
        }
        return {...updatedTagDetails}
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className='bg-dark text-info'>
                <CourseForm 
                    course={setCourse}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleTagSelect={handleTagSelect}
                    heading="Edit Course!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditCourseModal