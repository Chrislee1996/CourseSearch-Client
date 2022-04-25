import React, { useState, useEffect } from 'react'
import { Card, Dropdown, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { getMyCourses } from '../../api/courses'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const MineCourses = (props) => {
    const [myCourses, setMyCourses] = useState(null)
    const {user} = props
    const [course, setCourse] = useState(null)
    

    useEffect(() => {
        getMyCourses(user)
            .then(res => {
                setMyCourses(res.data.courses)
            })
            .catch(console.error)
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
            <Card key={course._id} style={{ width: '30%', border:"solid 1px"}}   className="m-2" className ="m-2 bg-dark text-info"  >
                <Card.Img variant="top" src="" />
                <Card.Title className='m-2'>{course.courseName}</Card.Title>
                <Card.Body>
                <Link to ={`/courses/${course._id}`}> <h4> {course.courseInstitute} </h4></Link>
                        <Link to={`/courses/${course._id}`}>
                            <div className='imgIP'>
                                <Card.Img 
                                src={course.image}
                                alt='product image'
                                />
                            </div>
                        </Link>
                    <Card.Text> 

                    </Card.Text>
                </Card.Body>
            </Card>
        ))
    }

    return (
        <div className='bg-dark'>
        
            <h3 className='titleText'>Browse My Courses</h3>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic-button-2">
                    Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                </Dropdown.Menu>
            </Dropdown>
            <div style={cardContainerLayout}>
                {courseCards}
            </div>
        </div>
    )
}

export default MineCourses