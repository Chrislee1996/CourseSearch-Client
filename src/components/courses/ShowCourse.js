import React, { useState, useEffect } from 'react'
import {showCurrentCourse, updateCourse, removeCourse} from '../../api/courses'
import {useParams, useNavigate} from 'react-router-dom'
import { Spinner,Container,Card, Button} from 'react-bootstrap'
import EditCourseModal from './EditCourseModal'
import ShowReview from '../reviews/ShowReview'
import GiveReview from '../reviews/GiveReview'
import ShowComment from '../comments/ShowComment'
import GiveComment from '../comments/GiveComment'



const ShowCourse = (props) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const [course, setCourse] = useState(null)
    const [reviewModalOpen, setReviewModalOpen] = useState(false)
    const [commentModalOpen, setCommentModalOpen] = useState(false)
    const {id} = useParams()
    const navigate = useNavigate()
    const {user,msgAlert} = props

    useEffect(() => {
        showCurrentCourse(id)
            .then(res => {
                setCourse(res.data.course)
            })
            .catch(console.error)
    },[updated])


    const deleteCourse = () => {
        removeCourse(user, course.id)
        .then(() => {
            msgAlert({
                heading: 'Course Removed!',
                message: 'Course Successfully deleted',
                variant: 'success',
            })
        })
            .then(()=> {navigate('/')})
            .catch(() => {
                msgAlert({
                    heading: 'Something Went Wrong',
                    message: 'Unable to delete',
                    variant: 'danger',
                })
            })
    }

    if(!course) {
        return (
            <Container>
                <Spinner animation="border" role='status'>
                <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>

        )
    }

    const timeDisplay = (e) => {
        let hours = parseInt(e.split(":")[0])
        let minutes = (e.split(":")[1])
        let amPM = hours >= 12 ? "PM" : "AM"
        hours = hours % 12 || 12
        return `${hours}:${minutes} ${amPM}`
    }

    let reviews
    let comments    

    if(course){
        if(course.reviews.length>0){
            reviews = course.reviews.map(review=> (
                <ShowReview key={review._id} updated={updated} review={review} course={course} user={user}
                triggerRefresh={()=> setUpdated(prev=> !prev)}
                />
            ))
        }
    }  
    console.log(comments,'our comment')

    console.log(reviews, 'our reviews')
    
    return (
        <>
        <Container className='fluid'>

            <Card className='text-info bg-dark'>
                <Card.Header className="display-4">{course.courseName}</Card.Header>
    
                <Card.Header> <a href = {course.courseLink} target="_blank"><img src={`${course.image}`} width='250' height='300'/></a></Card.Header>
                <Card.Body>
                    {
                        user && (course.owner._id === user._id)
                        ?
                        <>
                            <Button onClick={() => deleteCourse()} className="m-2" variant="danger">
                                Delete Course
                            </Button>
                            <Button onClick={() => setModalOpen(true)} className="m-2" variant="warning">
                                Edit Course
                            </Button>
                        </>
                        :
                        null
                    }
                    <Card.Text>
                        <a href = {course.courseLink} target="_blank">Go to Course</a>
                        <Card.Header>{course.tags.map(tag=> (
                        <small><li>{tag.details} </li></small>
                        ))} 
                        </Card.Header>
                        <Card.Header>Subject: {course.courseSubject}</Card.Header><br/>
                        <Card.Header>Professor(s)/Teacher(s): {course.teacher}</Card.Header><br/>
                        <Card.Header>Location: {course.location}</Card.Header><br/>
                        <Card.Header>Days of Course: {course.daysOfCourse}</Card.Header><br/>
                        <Card.Header>Start Date of Course: {course.startDate}</Card.Header><br/>
                        <Card.Header>End Date of Course: {course.endDate}</Card.Header><br/>
                        <Card.Header>Start Time of Course: {timeDisplay(course.startTime)}</Card.Header><br/>
                        <Card.Header>End Time of Course: {timeDisplay(course.endTime)}</Card.Header><br/>
                        <Card.Header>Credits if appliable : {course.offerCredits}</Card.Header><br/>

                        
                        <button className="reviewB" onClick={()=> setReviewModalOpen(true)}> Leave a Review</button>
                        <h3 className class='text-primary'>Reviews:</h3> 
                        <p>{reviews}</p>

                        <GiveReview
                            user={user}
                            show= {reviewModalOpen}
                            course={course}
                            triggerRefresh={() => setUpdated(prev => !prev)}
                            handleClose={()=> setReviewModalOpen(false)}
                        />
                        {/* <GiveComment
                            user={user}
                            show= {commentModalOpen}
                            course={course}
                            triggerRefresh={() => setUpdated(prev => !prev)}
                            handleClose={()=> setCommentModalOpen(false)}
                        /> */}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
        <EditCourseModal 
                course={course}
                show={modalOpen}
                user={user}
                triggerRefresh={() => setUpdated(prev => !prev)}
                updateCourse={updateCourse}
                handleClose={() => setModalOpen(false)}
            />
        </>
        
    )
}


export default ShowCourse