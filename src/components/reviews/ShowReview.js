import React, { useEffect, useState } from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import { removeReview } from '../../api/reviews'
import GiveComment from '../comments/GiveComment'
import ShowComment from '../comments/ShowComment'
import EditReviewModal from './EditReviewModal'
// import { removeComment } from '../../api/comments'
// import {addComment} from '../../api/comments.js'


const ShowReview = (props) => {
    // most of these are simply to pass to edit modal
    const {review, user, triggerRefresh, msgAlert, course, comment, handleClose} = props
    const [commentModalOpen, setCommentModalOpen] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [updated, setUpdated] = useState(false)
    
    
    const destroyReview = () => {
        removeReview(user, course._id, review._id)
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(console.error)
    }




    let comments    

    if(review){
        if(review.comments.length > 0){
            comments = review.comments.map(comment=> (
                <ShowComment key={comment._id} updated={updated} comment={comment} review={review} user={user} course={course}
                triggerRefresh={triggerRefresh}
                />  
            ))
        }
    }  

    return (
        <>
            <Card className="m-2">
                <Card.Body className='reviews'>
                        <h4>Overall experience: {review.note}<br/></h4>
                        <h4>Course Rating: {review.courseRating}<br/></h4>
                        <h4>Professor Rating:{review.professorRating}<br/></h4>
                        {
                            user && (user._id === review.owner)
                            ?
                            <>
                                <Button onClick={()=> destroyReview()}variant="outline-danger" size='sm'>
                                    Delete Review    
                                </Button>
                                <Button variant="outline-warning" size='sm' onClick={() => setShowEditModal(true)}>
                                    Edit Review
                                </Button>
                            </>
                            :
                            null
                        }
                        <p>{comments}</p>
                        <button className="comment" onClick={()=> setCommentModalOpen(true)}> Comment on Review Above</button>
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
    <GiveComment
        user={user}
        review={review}
        show = {commentModalOpen}
        course={course}
        comment={comment}
        handleClose={()=> setCommentModalOpen(false)}
        triggerRefresh={triggerRefresh}
    />

    </>
    )
}

export default ShowReview