import React, {useState, useEffect } from 'react'
import { getCourseTags } from '../../api/tag'
import { Link } from 'react-router-dom'
import { Card, Dropdown,DropdownButton, Button  } from 'react-bootstrap'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const IndexMaterial = (props) => {
    const [courses, setCourses]= useState(null)

    useEffect(()=> {
        getCourseTags('626844ec0cc0b2149abd4299')
            .then(res=>{
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
                        <Link to ={`/courses/${course._id}`}> <h4> {course.courseInstitute} </h4></Link>
                        <Link to ={`/courses/${course._id}`}><img src={`${course.image}`} width='250' height='300'/></Link>
                        <p>{course.subject}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        ))
    }

    return (
        <div className='bg-dark'>
            <h3 className='text-primary'>Browse Some Courses</h3>
            <h3 class='text-center text-info'>Courses</h3>
            <div style={cardContainerLayout}>
                {courseCards}
            </div>
        </div>
    )
}

export default IndexMaterial