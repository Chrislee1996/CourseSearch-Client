import React, {useState, useEffect } from 'react'
import { getAllAttendingCourses, removeAttendingCourse } from '../../api/attendingCourses'
import { Link } from 'react-router-dom'
import { Card, Dropdown,DropdownButton, Button  } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'


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
    const [attendingcourses, setAttendingCourses] = useState(null)
    const [updated, setUpdated] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        getAllAttendingCourses()
            .then(res=> {
                setAttendingCourses(res.data.attendingcourses)
            })
            .catch(console.error)
    },[])


    if (!attendingcourses) {
        return <p>loading...</p>
    } else if (attendingcourses.length === 0) {
        return <p>No courses to display. Go Create some!</p>
    }

    console.log(attendingcourses, 'here is the attending course')

    let attendingCourseCards

    if (attendingcourses.length > 0) {
        attendingCourseCards = attendingcourses.map(attendingcourse => (
            <Card key={attendingcourse._id} style={{ width: '30%', border:"solid 1px"}} className="m-2 bg-dark text-info"  >
                <Card.Header>{attendingcourse.course.courseName}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Subject: {attendingcourse.course.courseSubject}<br/>
                        <Link to ={`/courses/${attendingcourse._id}`}> <h4> {attendingcourse.course.courseInstitute} </h4></Link>
                        <Link to ={`/courses/${attendingcourse._id}`}><img src={`${attendingcourse.course.image ? attendingcourse.course.image : "https://www.creativefabrica.com/wp-content/uploads/2020/02/16/Education-Logo-Graphics-1-2.jpg"}`} width='250' height='300'/></Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        ))
    }

    return (
        <div style={{backgroundImage: `url("https://png.pngtree.com/background/20210714/original/pngtree-school-supplies-graduation-cap-border-blackboard-education-background-picture-image_1219927.jpg")`}}>
            <div style={{backgroundImage: `url("https://wallpaperaccess.com/full/1092758.jpg")`}}>
            </div>
            <h3 class='text-center text-info'>Courses</h3>
            <div style={cardContainerLayout}>
                {attendingCourseCards}
            </div>
        </div>
    )
}


export default IndexAttendingCourses    