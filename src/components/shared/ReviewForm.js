import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const ReviewForm = (props) => {
    
    const {review, handleChange, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Overall Review of Course</Form.Label>
                <Form.Control 
                    placeholder="Review of Course"
                    value={review.note}
                    name='note'
                    onChange={handleChange}
                />

            <Form.Label>Course Rating 1-10</Form.Label>
            <Form.Control 
                    placeholder="Review of Course"
                    value={review.courseRating}
                    name='courseRating'
                    onChange={handleChange}
                />

            <Form.Label>Professor Rating 1-10</Form.Label>
            <Form.Control 
                    placeholder="Professor Rating"
                    value={review.professorRating}
                    name='professorRating'
                    onChange={handleChange}
                />          
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default ReviewForm