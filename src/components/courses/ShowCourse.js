import React, { useState, useEffect } from 'react'
import {showCurrentCourse} from '../../api/courses'
import {useParams, useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Spinner,Container,Card, Button} from 'react-bootstrap'

const ShowCourse = (props) => {

    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const [course, setCourse] = useState(null)
    const {id} = useParams()
    const navigate = useNavigate()
    const {user,msgAlert} = props

    useEffect(() => {
        showCurrentCourse(id)
            .then(course => {
                setCourse(course.data.course)
            })
            .catch(console.error)
    },[updated])

    if(!course) {
        return (
            <Container>
                <Spinner animation="border" role='status'>
                <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>

        )
    }

    return (
        <>
        <Container className='fluid'> 
            <Card className='text-info bg-dark'>
                <Card.Header className="display-4">{course.courseName}</Card.Header>
                <Card.Header><img src={`${course.image}`} width='250' height='300'/></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <a href = {course.courseLink} target="_blank">Go to Course</a>
                        <Card.Header>Subject: {course.courseSubject}</Card.Header><br/>
                        <Card.Header>Professor(s)/Teacher(s): {course.teacher}</Card.Header><br/>
                        <Card.Header>Location: {course.location}</Card.Header><br/>
                        <Card.Header>Days of Course: {course.daysOfCourse}</Card.Header><br/>
                        <Card.Header>Time of Course: {course.timeOfCourse}</Card.Header><br/>
                        <Card.Header>Credits if appliable : {course.credit}</Card.Header><br/>
                        
                    </Card.Text>
                        {/* <Button onClick={() => setModalOpen(true)} className="m-2" variant="warning">
                            Edit Anime
                        </Button>
                        {/* delete button */}
                        {/* <Button onClick={() => deleteAnime()} className="m-2" variant="danger">
                            Delete Anime
                        </Button> */} 
                </Card.Body>
            </Card>
        </Container>
        {/* <EditAnimesModel 
                anime={anime}
                show={modalOpen}
                user={user}
                triggerRefresh={() => setUpdated(prev => !prev)}
                updateAnime={updateAnime}
                handleClose={() => setModalOpen(false)}
            /> */}
        </>
        
    )
}


export default ShowCourse