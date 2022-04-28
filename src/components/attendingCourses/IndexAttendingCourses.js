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
            <h3 className='text-primary text-center'>Browse Some Courses</h3>
            <Link to={`/tags/onlinecourses`}><Button variant='outline-light' className='viewI '>Online Courses</Button></Link>
            <Link to={`/tags/inpersoncourses`}><Button variant='outline-light' className='viewI'>In person Courses</Button></Link>
            <Link to={`/tags/mandatoryattendence`}><Button variant='outline-light' className='viewI'>Mandatory Attendence</Button></Link>
            <Link to={`/tags/lotsofhomework`}><Button variant='outline-light' className='viewI'>Lots of Homework</Button></Link>
            <Link to={`/tags/testheavy`}><Button variant='outline-light' className='viewI'>Test Heavy</Button></Link>
            <Link to={`/tags/groupprojects`}><Button variant='outline-light' className='viewI'>Group Projects</Button></Link>
            <Link to={`/tags/goodfeedback`}><Button variant='outline-light' className='viewI'>Good Feedback</Button></Link>
            <Link to={`/tags/material`}><Button variant='outline-light' className='viewI'>Cares About the Material</Button></Link>
            <Link to={`/tags/caring`}><Button variant='outline-light' className='viewI'>Caring</Button></Link>
            <Link to={`/tags/textbook`}><Button variant='outline-light' className='viewI'>Text-book Mandatory</Button></Link>
            <Link to={`/tags/toughgrader`}><Button variant='outline-light' className='viewI'>Tough Grader</Button></Link>
            <Link to={`/tags/lectureheavy`}><Button variant='outline-light' className='viewI'>Lecture Heavy</Button></Link>
            </div>
            <div className = 'subjectSection'>
            <DropdownButton id="dropdown-basic-button-2" title="Browse By Subjects" variant='outline-light'>  
                <Dropdown.Item><Link to='/courses/art' style={categoryLinks}>Arts and Culture </Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/business' style={categoryLinks}>Business</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/dataanalysis' style={categoryLinks}>Data Analysis</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/design' style={categoryLinks}>Design</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/education' style={categoryLinks}>Education</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/engineering' style={categoryLinks}>Engineering</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/healthcare' style={categoryLinks}>Healthcare</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/history' style={categoryLinks}>History</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/language' style={categoryLinks}>Language</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/law' style={categoryLinks}>Law and Politics</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/literature' style={categoryLinks}>Literature</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/math' style={categoryLinks}>Math</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/medicine' style={categoryLinks}>Medicine</Link></Dropdown.Item>   
                <Dropdown.Item><Link to='/courses/programming' style={categoryLinks}>Computer Science and Informations</Link></Dropdown.Item>                      
                <Dropdown.Item><Link to='/courses/science' style={categoryLinks}>Science</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/socialscience' style={categoryLinks}>Social Science</Link></Dropdown.Item>            
			</DropdownButton>
            </div>
            <h3 class='text-center text-info'>Courses</h3>
            <div style={cardContainerLayout}>
                {attendingCourseCards}
            </div>
        </div>
    )
}


export default IndexAttendingCourses    