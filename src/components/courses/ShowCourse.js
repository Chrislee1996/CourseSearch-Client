import React, { useState, useEffect } from 'react'
import {showCurrentCourse, updateCourse, removeCourse} from '../../api/courses'
import {useParams, useNavigate} from 'react-router-dom'
import { Spinner,Container,Card, Button} from 'react-bootstrap'
import EditCourseModal from './EditCourseModal'
import ShowReview from '../reviews/ShowReview'
import GiveReview from '../reviews/GiveReview'
import {createAttendingCourses , getAllAttendingCourses } from '../../api/attendingCourses'
import {createLikedCourse} from '../../api/like'
import {HandThumbsUpFill, HandThumbsDownFill, Cone, Pencil, Chat} from "react-bootstrap-icons"




const ShowCourse = (props) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const [course, setCourse] = useState(null)
    const [reviewModalOpen, setReviewModalOpen] = useState(false)
    const [like, setLike] = useState(null)
    const setLiked = useState(false)
    const {id} = useParams()
    const navigate = useNavigate()
    const {user,msgAlert} = props

    useEffect(() => {
        showCurrentCourse(id)
            .then(res => {
                setCourse(res.data.course)
                attendingCourseArray()
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

    const addLike = (like) => {
        createLikedCourse(user, course._id , like)
        console.log(like, 'here is the like')
        let likeCourse = 0
        let notLike = 0

        if (like === 'like') {
            likeCourse +=1
        } else if (like === 'dislike' ) {
            notLike +=1
        }
        console.log(likeCourse, 'liked course')
        console.log(notLike, 'disliked course')
        updateCourse(user, course, like)
            .then(()=> setUpdated(true))
    }

    const recommend = <HandThumbsUpFill onClick = {()=> addLike('like')} variant="outline-success" > Recommend Course </HandThumbsUpFill>
    const notRecommend = <HandThumbsDownFill onClick = {()=> addLike('dislike')} variant="outline-danger" >Not Recommended </HandThumbsDownFill>


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

    const addCourse = () => {
        const attendingCourse = {
            owner:user._id,
            course: course._id
        }
        console.log('attending courses', attendingCourse)
        createAttendingCourses(user,attendingCourse)
            .then(()=> {
                setUpdated(prev => !prev)
                navigate(`/courses/${course._id}`)
            })
            .then(() => {
                msgAlert({
                    heading: 'Course Removed!',
                    message: 'Course Successfully deleted',
                    variant: 'success',
                })
            })
        .catch(error => console.log(error))
    }



    const attendingCourseArray = () => {
        let courseArray = []
        getAllAttendingCourses()
        .then(res => {
            courseArray = res.data.attendingcourses
            return courseArray
        })
        .catch(error => console.log(error))
    }

    let likeCourse = 0
    let notLike = 0
    course ?.likes?.map(like => {
        if (like.like === 'like') {
            likeCourse +=1
        } else if (like.like === 'dislike')
        notLike +=1
    })

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
        <div style={{backgroundImage: `url("https://png.pngtree.com/background/20210714/original/pngtree-school-supplies-graduation-cap-border-blackboard-education-background-picture-image_1219927.jpg")`}}>
        <Container className='fluid'>

            <Card className='text-info' style={{backgroundImage:`url("https://wallpaperaccess.com/full/1092758.jpg")`}}>
                <Card.Header className="display-4">{course.courseName}</Card.Header>
    
                {/* <Card.Header> <a href = {course.courseLink} target="_blank"> <img src = {`${imageSelected ? imageSelected : `https://www.creativefabrica.com/wp-content/uploads/2020/02/16/Education-Logo-Graphics-1-2.jpg`}`}  width='250' height='300' /></a> </Card.Header>  */}
                <Card.Header> <a href = {course.courseLink} target="_blank"><img src={`${course.image ? course.image : "https://www.creativefabrica.com/wp-content/uploads/2020/02/16/Education-Logo-Graphics-1-2.jpg"}`} width='250' height='300'/></a></Card.Header>

                
                <h4><a href = {course.courseLink} target="_blank">Go to Course</a></h4>

                <Card.Body>
                    

                <Button onClick={() => addCourse()} variant="outline-success">
                    Add Course
                </Button><br/>
{recommend}
<p>{likeCourse} People recommend this course </p>
{notRecommend}
<p> {notLike} People do not Recommend this course</p>
                    {
                        user && (course.owner._id === user._id)
                        ?
                        <>

                            <Button onClick={() => deleteCourse()} className="m-2" variant="outline-danger">
                                Delete Course <Cone></Cone>
                            </Button>
                            <Button onClick={() => setModalOpen(true)} className="m-2" variant="outline-warning">
                                Edit Course <Pencil></Pencil>
                            </Button>
                        </>
                        :
                        null
                    }

                    <Card.Text>
                        <Card.Header>
                        {course.tags.map(tag=> (
                        <small><li>{tag.details} </li></small>
                        ))}
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

                        
                        <Button className="reviewB" onClick={()=> setReviewModalOpen(true)} variant="outline-primary"> Leave a Review <Chat></Chat></Button>
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
        </div>
        
    )
}


export default ShowCourse