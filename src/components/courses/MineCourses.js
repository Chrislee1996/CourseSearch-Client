import React, { useState, useEffect } from 'react'
import { Card, Dropdown,DropdownButton, Button  } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { getMyCourses } from '../../api/courses'
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

const MineCourses = (props) => {
    const [myCourses, setMyCourses] = useState(null)
    const {user, msgAlert} = props
    const [course, setCourse] = useState(null)
    

    useEffect(() => {
        getMyCourses(user)
            .then(res => {
                setMyCourses(res.data.courses)
            })
                .then(()=> {
                    msgAlert({
                        heading:'List of Created Courses',
                        message: 'Courses Retrieved',
                        variant:'success'
                    })
                })
                .catch(()=> {
                    msgAlert({
                        heading:'List of Created Courses',
                        message: 'Something went wrong',
                        variant:'danger'
                    })
                })
    }, [])

    if (!myCourses) {
        return <p>loading...</p>
    }
    else if (myCourses.length === 0) {
        return <Link to='/addCourse' > <h4 className="text-center"> Help others out! Go add a Course</h4> </Link>
    }


    let courseCards

    if(myCourses.length > 0) {
        courseCards = myCourses.map(course => (
            <Card key={course._id} style={{ width: '30%', border:"solid 1px"}}  className ="m-2 bg-dark text-info"  >
                <Card.Img variant="top" src="" />
                <Card.Title className='m-2'>{course.courseName}</Card.Title>
                <Card.Body>
                <Link to ={`/courses/${course._id}`}> <h4> {course.courseInstitute} </h4></Link>
                Subject: {course.courseSubject}<br/>
                Tags:
                        {course.tags.map(tag=> (
                        <li>{tag.details}</li>
                        ))}
                        <Link to={`/courses/${course._id}`}>
                        <Card.Header> <a href = {course.courseLink} target="_blank"><img src={`${course.image ? course.image : "https://www.creativefabrica.com/wp-content/uploads/2020/02/16/Education-Logo-Graphics-1-2.jpg"}`} width='250' height='300'/></a></Card.Header>

                        </Link>
                    <Card.Text> 
                    </Card.Text>
                </Card.Body>
            </Card>
        ))
    }

    return (
        <div style={{backgroundImage: `url(${background})`}} >
            <h3 className='titleText'>Browse My Courses</h3>
            <div className = 'subjectSection'>
            <DropdownButton id="dropdown-basic-button-2" variant ='outline-light'title="Browse By Subjects">  
                <Dropdown.Item><Link to='/courses/art' style={categoryLinks}>Arts</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/business' style={categoryLinks}>Business</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/dataanalysis' style={categoryLinks}>Data Analysis</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/design' style={categoryLinks}>Design</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/education' style={categoryLinks}>Education</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/engineering' style={categoryLinks}>Engineering</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/healthcare' style={categoryLinks}>Healthcare</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/history' style={categoryLinks}>History</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/language' style={categoryLinks}>Language</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/law' style={categoryLinks}>Law</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/literature' style={categoryLinks}>Literature</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/math' style={categoryLinks}>Math</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/medicine' style={categoryLinks}>Medicine</Link></Dropdown.Item>   
                <Dropdown.Item><Link to='/courses/programming' style={categoryLinks}>Programming</Link></Dropdown.Item>                      
                <Dropdown.Item><Link to='/courses/science' style={categoryLinks}>Science</Link></Dropdown.Item>            
                <Dropdown.Item><Link to='/courses/socialscience' style={categoryLinks}>Social Science</Link></Dropdown.Item>            
			</DropdownButton>
            </div>
            <Dropdown>
            </Dropdown>
            <div style={cardContainerLayout}>
                {courseCards}
            </div>
        </div>
    )
}

export default MineCourses