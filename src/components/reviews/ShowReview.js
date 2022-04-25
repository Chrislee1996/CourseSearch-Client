import React, { useEffect, useState } from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import { removeReview } from '../../api/reviews'

import EditReviewModal from './EditReviewModal'

const ShowReview = (props) => {
    // most of these are simply to pass to edit modal
    const {review,id, user, triggerRefresh, msgAlert, course} = props

    const [showEditModal, setShowEditModal] = useState(false)
    
    const destroyReview = () => {
        removeReview(user, course._id, review._id)
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(console.error)
    }


    return (
        <>
            <Card className="m-2">
                <Card.Body>
                        <h4>Overall experience: {review.note}<br/></h4>
                        <h4>Course Rating: {review.courseRating}<br/></h4>
                        <h4>Professor Rating:{review.professorRating}<br/></h4>
                        {/* {
                            user && (user._id === review.owner)
                            ?
                            <>
                                <Button onClick={()=> destroyReview()}variant="outline-danger" size='sm'>
                                    Delete Review    
                                </Button>
                                <Button variant="outline-warning" onClick={() => setShowEditModal(true)}>
                                    Edit Review
                                </Button>
                            </>
                            :
                            null
                        } */}

                        <Button onClick={()=> destroyReview()}variant="outline-danger" size='sm'>
                            Delete Review    
                        </Button>
                        <Button variant="outline-warning" onClick={() => setShowEditModal(true)}>
                            Edit Review
                        </Button>
        </Card.Body>
    </Card>
    <EditReviewModal 
                user={user}
                course={course}
                review={review}
                show={showEditModal}
                handleClose={() => setShowEditModal(false)}
                msgAlert={msgAlert}
                triggerRefresh={triggerRefresh}
            />
    </>
    )
}

export default ShowReview