import React, {useState, useEffect } from 'react'
import { getAllCourses } from '../../api/courses'
import { Link } from 'react-router-dom'
import { Card, Dropdown,DropdownButton, Button  } from 'react-bootstrap'
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

const IndexCourses = (props) => {
    const [courses, setCourses] = useState(null)

    useEffect(() => {
        getAllCourses()
            .then(res=> {
                setCourses(res.data.courses)
            })
            .catch(console.error)
    },[])


    if (!courses) {
        return <p>loading...</p>
    } else if (courses.length === 0) {
        return <p>No courses to display. Go Create some!</p>
    }




    let courseCards

    if (courses.length > 0) {
        courseCards = courses.map(course => (
            <Card key={course.id} style={{ width: '30%', border:"solid 1px"}} className="m-2 bg-dark text-info"  >
                <Card.Header>{course.courseName}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Subject: {course.courseSubject}<br/>
                        Tags:
                        {course.tags.map(tag=> (
                        <li>{tag.details}</li>
                        ))}
                        <Link to ={`/courses/${course._id}`}> <h4> {course.courseInstitute} </h4></Link>
                        <Link to ={`/courses/${course._id}`}><img src={`${course.image ? course.image : "https://www.creativefabrica.com/wp-content/uploads/2020/02/16/Education-Logo-Graphics-1-2.jpg"}`} width='250' height='300'/></Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        ))
    }


    return (
        <div style={{backgroundImage: `url(${background})`}} >
            <div style={{backgroundImage: `url(${gradimage})`}} >
            <h3 className='text-primary text-center' >Browse Some Courses</h3>
            <Link to={`/tags/onlinecourses`}><Button variant='outline-light' className='viewI ' style={{margin: '5px'}}>Online Courses</Button></Link>
            <Link to={`/tags/inpersoncourses`}><Button variant='outline-light' className='viewI' style={{margin: '5px'}}>In person Courses</Button></Link>
            <Link to={`/tags/mandatoryattendence`}><Button variant='outline-light' className='viewI'  style={{margin: '5px'}}>Mandatory Attendence</Button></Link>
            <Link to={`/tags/lotsofhomework`}><Button variant='outline-light' className='viewI' style={{margin: '5px'}}>Lots of Homework</Button></Link>
            <Link to={`/tags/testheavy`}><Button variant='outline-light' className='viewI' style={{margin: '5px'}}>Test Heavy</Button></Link>
            <Link to={`/tags/groupprojects`}><Button variant='outline-light' className='viewI' style={{margin: '5px'}}>Group Projects</Button></Link>
            <Link to={`/tags/goodfeedback`}><Button variant='outline-light' className='viewI' style={{margin: '5px'}}>Good Feedback</Button></Link>
            <Link to={`/tags/material`}><Button variant='outline-light' className='viewI' style={{margin: '5px'}}>Cares About the Material</Button></Link>
            <Link to={`/tags/caring`}><Button variant='outline-light' className='viewI' style={{margin: '5px'}}>Caring</Button></Link>
            <Link to={`/tags/textbook`}><Button variant='outline-light' className='viewI' style={{margin: '5px'}}>Text-book Mandatory</Button></Link>
            <Link to={`/tags/toughgrader`}><Button variant='outline-light' className='viewI' style={{margin: '5px'}}>Tough Grader</Button></Link>
            <Link to={`/tags/lectureheavy`}><Button variant='outline-light' className='viewI' style={{margin: '5px'}}>Lecture Heavy</Button></Link>
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
                {courseCards}
            </div>
        </div>
    )
}


export default IndexCourses    