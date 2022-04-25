import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const ReviewForm = (props) => {
    
    const {review, handleChange, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Overall Review of Course</Form.Label>
                <Form.Control as='textarea'
                    placeholder="Review of Course"
                    value={review.note}
                    name='note'
                    onChange={handleChange}
                />

            <Form.Group controlId="forBasicSelect">
            <Form.Label>Course Rating</Form.Label>
            <Form.Control as='select'
                placeholder="Review of Course"
                value={review.courseRating}
                name='courseRating'
                onChange={handleChange}
            >
                <option></option>
                <option value="1">1 - Awful Everything!</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 - Average</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10 = Absolutely Awesome!</option>

            </Form.Control>
            </Form.Group>  


            <Form.Group controlId="forBasicSelect">
            <Form.Label>Professor Rating</Form.Label>
            <Form.Control as='select'
                placeholder="Review of Professor"
                value={review.professorRating}
                name='professorRating'
                onChange={handleChange}
            >
                <option></option>
                <option value="1">1 - Awful Everything!</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 - Average</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10 = Absolutely Awesome!</option>

            </Form.Control>
            </Form.Group>  

                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default ReviewForm