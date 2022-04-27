import React, { useEffect, useState } from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import { removeComment } from '../../api/comments'

const ShowComment = (props) => {
    // most of these are simply to pass to edit modal
    const {comment, user, triggerRefresh, course, review} = props
    
    const destroyComment = () => {
        removeComment(user, comment._id, review._id)
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(console.error)
    }



    return (
        <>
            <Card className="m-2">
                <Card.Body className='bg-dark'>
                        <p>Comments:</p>
                        <p>{comment.note}<br/></p>
                        <Button onClick={()=> destroyComment()}variant="outline-danger" size='sm'>
                            Delete Comment    
                        </Button>
                </Card.Body>
            </Card>
    </>
    )
}

export default ShowComment