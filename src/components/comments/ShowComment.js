import React, { useEffect, useState } from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import { removeComment } from '../../api/comments'


const ShowComment = (props) => {
    // most of these are simply to pass to edit modal
    const {comment, user, triggerRefresh, course} = props
    
    const destroyComment = () => {
        removeComment(user, course._id, comment._id)
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(console.error)
    }



    return (
        <>
            <Card className="m-2">
                <Card.Body>
                        <h3>Comments:</h3>
                        <h4>{comment.note}<br/></h4>
                        <Button onClick={()=> destroyComment()}variant="outline-danger" size='sm'>
                            Delete Comment    
                        </Button>
                </Card.Body>
            </Card>
    {/* <EditReviewModal 
                user={user}
                course={course}
                review={review}
                show={showEditModal}
                handleClose={() => setShowEditModal(false)}
                msgAlert={msgAlert}
                triggerRefresh={triggerRefresh}
            /> */}
    </>
    )
}

export default ShowComment