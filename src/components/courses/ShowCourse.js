import React, { useState, useEffect } from 'react'
import {showCurrentCourse, updateCourse, removeCourse} from '../../api/courses'
import {useParams, useNavigate} from 'react-router-dom'
import { Spinner,Container,Card, Button} from 'react-bootstrap'
import EditCourseModal from './EditCourseModal'
import ShowReview from '../reviews/ShowReview'
import GiveReview from '../reviews/GiveReview'
import Axios from 'axios'



const ShowCourse = (props) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const [course, setCourse] = useState(null)
    const [reviewModalOpen, setReviewModalOpen] = useState(false)
    const {id} = useParams()
    const navigate = useNavigate()
    const {user,msgAlert} = props
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)
    const [likeActive, setLikeActive] = useState(false)
    const [dislikeActive, setDislikeActive] = useState(false)

    const liked = () => {
        // console.log('liked pressed')
        if (likeActive) {
            setLikeActive(false)
            setLike(like-1)
        } else {
            setLikeActive(true)
            setLike(like+1)
            if(dislikeActive){
                setDislikeActive(false)
                setLike(like+1)
                setDislike(dislike-1)
            }
        }
    }



    const disliked = () => {
        // console.log('disliked pressed')
        if (dislikeActive) {
            setDislikeActive(false)
            setDislike(dislike-1)
        } else {
            setDislikeActive(true)
            setDislike(like+1)
            if(likeActive){
                setLikeActive(false)
                setDislike(dislike+1)
                setLike(like-1)
            }
        }
    }

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
    
                <Card.Header> <a href = {course.courseLink} target="_blank"><img src={`${course.image ? course.image : "https://www.creativefabrica.com/wp-content/uploads/2020/02/16/Education-Logo-Graphics-1-2.jpg"}`} width='250' height='300'/></a></Card.Header>
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
                        <h4><a href = {course.courseLink} target="_blank">Go to Course</a></h4>
                        <Card.Header>
                        {course.tags.map(tag=> (
                        <small><li>{tag.details} </li></small>
                        ))}
                        <div className = 'likeButtons'>
                            <Button size = 'sm' variant='outline-success'onClick={liked} className = {[likeActive ?  'active-like': null, 'showButton'].join('')}>Recommend Course: {like} </Button>
                            <Button size ='sm' variant='outline-danger' onClick={disliked} className = {[dislikeActive ?  'active-dislike': null, 'showButton'].join('')}>Would not Recommend Course: {dislike} </Button><br/>
                            <div></div>
                        </div>
                        </Card.Header>
                        <Card.Header style={{position:"absolute",top:100, right:0}} >Subject: {course.courseSubject}</Card.Header><br/>
                        <Card.Header style={{position:"absolute",top:150, right:0}}>Professor(s)/Teacher(s): {course.teacher}</Card.Header><br/>
                        <Card.Header style={{position:"absolute",top:200 , right:0}}>Location: {course.location}</Card.Header><br/>
                        <Card.Header style={{position:"absolute",top:250 , right:0}}>Days of Course: {course.daysOfCourse}</Card.Header><br/>
                        <Card.Header style={{position:"absolute",top:300 , right:0}}>Start Date of Course: {course.startDate}</Card.Header><br/>
                        <Card.Header style={{position:"absolute",top:350 , right:0}}>End Date of Course: {course.endDate}</Card.Header><br/>
                        <Card.Header style={{position:"absolute",top:400 , right:0}}>Start Time of Course: {timeDisplay(course.startTime)}</Card.Header><br/>
                        <Card.Header style={{position:"absolute",top:450 , right:0}}>End Time of Course: {timeDisplay(course.endTime)}</Card.Header><br/>
                        <Card.Header style={{position:"absolute",top:500 , right:0}}>Credits if appliable : {course.offerCredits}</Card.Header><br/>

                        
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