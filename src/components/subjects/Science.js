import React, { useState, useEffect } from 'react'
import { getScience } from '../../api/courses'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import background from '../images/backgroundproject4.png'
import gradimage from '../images/gradimage.png'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const Science = (props) => {
    const [courses, setCourses] = useState(null)

    
    useEffect(() => {
        getScience()
            .then(res => {
                setCourses(res.data.science)
            })
            .catch(console.error)
    }, [])

    if (!courses) {
        return <p>loading...</p>
    }
    else if (courses.length === 0) {
        return <p>Add a Course!</p>
    }

    let courseCards

    if (courses.length > 0) {
        courseCards = courses.map(course => (
            <Card key={course.id} style={{ width: '30%', border:"solid 1px"}} className="m-2 bg-dark text-info"  >
                <Card.Header>{course.courseName}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Link to ={`/courses/${course._id}`}> <h4> {course.courseInstitute} </h4></Link>
                        <Link to ={`/courses/${course._id}`}><img src={`${course.image ? course.image : "https://www.creativefabrica.com/wp-content/uploads/2020/02/16/Education-Logo-Graphics-1-2.jpg"}`} width='250' height='300'/></Link>
                        <p>{course.subject}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        ))
    }

    return (
        <div style={{backgroundImage: `url(${background})`}} >
            <h3 class='text-center text-info'>Science Courses</h3>
            <div style={cardContainerLayout}>
                {courseCards}
            </div>
        </div>
    )
}

export default Science