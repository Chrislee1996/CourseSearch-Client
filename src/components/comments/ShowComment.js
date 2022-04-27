import React, { useEffect, useState } from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import { removeComment } from '../../api/comments'

const ShowComment = (props) => {
    // most of these are simply to pass to edit modal
    const {course, comment, user, triggerRefresh, review} = props
    
    const destroyComment = () => {
        removeComment(user, course._id , review._id, comment._id)
        .then(() => triggerRefresh())
        // if there is an error, we'll send an error message
        .catch(console.error)
    }



    return (
        <>
            <Card className="m-2">
                <Card.Body className='bg-dark'>
                        <p>Comment:</p>
                        <p>{comment.note}<br/></p>
                        {
                            user && (user._id === review.owner)
                            ?
                            <>
                            <Button onClick={()=> destroyComment()}variant="outline-danger" size='sm'>
                                Delete Comment    
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