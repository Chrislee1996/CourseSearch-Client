import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const CourseForm = (props) => {
    const {course, handleChange, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>

                <Form onSubmit={handleSubmit}>
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control
                        placeholder="Course name"
                        value={course.courseName}
                        name='courseName'
                        onChange={handleChange}
                />

                    <Form.Label>Course Institute</Form.Label>
                    <Form.Control
                        placeholder="Institute Name"
                        value={course.courseInstitute}
                        name='courseInstitute'
                        onChange={handleChange}
                />

                    <Form.Label>Link to Course</Form.Label>
                        <Form.Control
                            placeholder="Link to Course"
                            value={course.courseLink}
                            name='courseLink'
                            onChange={handleChange}
                    />
                    
                    <Form.Group controlId="date">
                    <Form.Label>Start Date of Course:</Form.Label>
                        <Form.Control
                            type= "date"
                            placeholder="Course start Date"
                            value={course.startDate}
                            name='startDate'
                            onChange={handleChange}
                    />
                    </Form.Group>

                    <Form.Group controlId="date">
                    <Form.Label>End Date of Course:</Form.Label>
                        <Form.Control
                            type= "date"
                            placeholder="Course end Date"
                            value={course.endDate}
                            name='endDate'
                            onChange={handleChange}
                    />  
                    </Form.Group>
                    
                    <Form.Group controlId="time">
                    <Form.Label>Start Time of Course:</Form.Label>
                        <Form.Control
                            type= "time"
                            placeholder="Course start Time"
                            value={course.startTime}
                            name='startTime'
                            onChange={handleChange}
                    />
                    <Form.Label>End Time of Course:</Form.Label>
                        <Form.Control
                            type= "time"
                            placeholder="Course end Time"
                            value={course.endtime}
                            name='endTime'
                            onChange={handleChange}
                    />  
                    </Form.Group>

                    <Form.Label>Teacher(s)/Professor(s)</Form.Label>
                        <Form.Control
                            placeholder="Course Teacher"
                            value={course.teacher}
                            name='teacher'
                            onChange={handleChange}
                    />

                    <Form.Group controlId="forBasicSelect">
                    <Form.Label>Remote or In Person?</Form.Label>
                    <Form.Control as='select'
                        placeholder="location"
                        value={course.location}
                        name='location'
                        onChange={handleChange}
                    >
                        <option></option>
                        <option value="Remote">Remote</option>
                        <option value="In Person">In Person</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="forBasicSelect">
                    <Form.Label>Course Subject</Form.Label>
                    <Form.Control as='select'
                        placeholder="Course"
                        value={course.courseSubject}
                        name='courseSubject'
                        onChange={handleChange}
                    >
                        <option></option>
                        <option value="Art">Art</option>
                        <option value="Biology">Biology</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Business">Business</option>
                        <option value="Data Analysis">Data Analysis</option>
                        <option value="Design">Design</option>
                        <option value="Education">Education</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="History">History</option>
                        <option value="Language">Language</option>
                        <option value="Literature">Literature</option>
                        <option value="Law">Law</option>
                        <option value="Math">Math</option>
                        <option value="Medicine">Medicine</option>
                        <option value="Physics">Physics</option>
                        <option value="Programming">Physics</option>
                        <option value="Social Science">Social Science</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Check
                        label='Does this offer college credits?'
                        defaultChecked={course.credits}
                        name='credits'
                        onChange={handleChange}
                    />      


                    <Button type='submit'>Submit</Button>
                </Form>

            </Container>
    )
}

export default CourseForm