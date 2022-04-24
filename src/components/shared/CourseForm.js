import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const CourseForm = (props) => {
    const {course, handleChange, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>

            </Container>
    )
}

export default CourseForm