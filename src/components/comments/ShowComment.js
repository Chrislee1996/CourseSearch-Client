import React, { useEffect, useState } from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import { removeComment } from '../../api/comments'
import {Cone} from "react-bootstrap-icons"


const ShowComment = (props) => {
    // most of these are simply to pass to edit modal
    const {course, comment, user, triggerRefresh, review, msgAlert} = props
    const [updated, setUpdated] = useState(false)
    
    const destroyComment = () => {
        removeComment(user, course._id , review._id, comment._id)
        .then(() => triggerRefresh())
        // if there is an error, we'll send an error message
        .catch(() => {
            msgAlert({
                heading: 'Something Went Wrong',
                message: 'Unable to remove comment',
                variant: 'danger',
            })
        })
    }

 

    let comments    

    if(review){
        if(review.comments.length > 0){
            comments = review.comments.map(comment=> (
                <ShowComment key={comment._id} updated={updated} comment={comment} review={review} user={user} course={course}
                triggerRefresh={()=> setUpdated(prev=> !prev)}
                />  
            ))
        }
    }  

    return (
        <>
            <Card className="m-2">
                <Card.Body className='bg-dark'>
                        <p>Comment:</p>
                        <p>{comment.note}<br/></p>
                        {
                            user && (user._id === comment.owner)
                            ?
                            <>
                            <Button onClick={()=> destroyComment()}variant="outline-danger" size='sm'>
                                Delete Comment <Cone></Cone>
                            </Button>
                            </>
                            :
                            null
                        }
                </Card.Body>
            </Card>
    </>
    )
}

export default ShowComment