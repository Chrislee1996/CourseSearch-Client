import React, {useState, useEffect } from 'react'
import { getAllAttendingCourses, removeAttendingCourse } from '../../api/attendingCourses'
import { Link } from 'react-router-dom'
import { Card, Dropdown,DropdownButton, Button  } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import background from '../images/backgroundproject4.png'
import gradimage from '../images/gradimage.png'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const categoryLinks = {
    color: 'black',
    textDecoration: 'none'
}

const IndexAttendingCourses = (props) => {
    const {user, msgAlert} = props
    const [attendingcourses, setAttendingCourses] = useState(null)
    const [updated, setUpdated] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        getAllAttendingCourses(user)
            .then(res=> {
                setAttendingCourses(res.data.attendingcourses)
            })
            .then(()=> {
                msgAlert({
                    heading:'Attending Courses',
                    message: 'Courses Retrieved',
                    variant:'success'
                })
            })
            .catch(()=> {
                msgAlert({
                    heading:'Attending Courses',
                    message: 'Something went wrong',
                    variant:'danger'
                })
            })
    },[updated])

    const deleteAttendingCourse = (courseId) => {
        removeAttendingCourse(user, courseId)
        .then(()=> {
            msgAlert({
                heading:'Removed Course',
                message: 'Course was successfully removed from list',
                variant:'success'
            })
        })
        .then(()=> {
            setUpdated((prev)=> !prev)
            navigate(`/attendingcourses`)
        })
        .catch(()=> {
            msgAlert({
                heading:'Attending Courses',
                message: 'Something went wrong',
                variant:'danger'
            })
        })
    }

    if (!attendingcourses) {
        return <p>loading...</p>
    } else if (attendingcourses.length === 0) {
        return <p>No courses to display. Go add some!</p>
    }


    let attendingCourseCards


    if (attendingcourses.length > 0) {
        attendingCourseCards = attendingcourses.map(attendingcourse => (
            <Card key={attendingcourse._id} style={{ width: '30%', border:"solid 1px"}} className="m-2 bg-dark text-info"  >
                <Card.Header>{attendingcourse.course.courseName}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Subject: {attendingcourse.course.courseSubject}<br/>
                        <Link to ={`/courses/${attendingcourse.course._id}`}> <h4> {attendingcourse.course.courseInstitute} </h4></Link>
                        <Link to ={`/courses/${attendingcourse.course._id}`}><img src={`${attendingcourse.course.image ? attendingcourse.course.image : "https://www.creativefabrica.com/wp-content/uploads/2020/02/16/Education-Logo-Graphics-1-2.jpg"}`} width='250' height='300'/></Link>
                        <Button variant='outline-danger' className='attendingCourse' onClick={()=> deleteAttendingCourse(attendingcourse._id)}>Remove Course from my List</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        ))

    }

    return (
        <div style={{backgroundImage: `url(${background})`}} >
            <div style={{backgroundImage: `url(${gradimage})`}} >
            </div>
            <h3 class='text-center text-info'>Courses</h3>
            <div style={cardContainerLayout}>
                {attendingCourseCards}
            </div>
        </div>
    )
}


export default IndexAttendingCourses    