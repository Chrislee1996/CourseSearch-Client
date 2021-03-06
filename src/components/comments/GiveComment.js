import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import CommentForm from '../shared/CommentForm'
import {addComment} from '../../api/comments.js'

const GiveCommentModal = (props) => {
    const { user, course, show, handleClose, msgAlert, triggerRefresh, review } = props
    const [comment, setComment] = useState({})
    const [updated, setUpdated] = useState(false)



    const handleChange = (e) => {
        // e === event
        e.persist()
        addUsertoComment()

        setComment(prevComment => {
            const name = e.target.name
            let value = e.target.value
    

            const updatedValue = { [name]: value }

            return {...prevComment, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addComment(user, course._id, comment, review._id, comment._id)
            .then(() => triggerRefresh())
            .then(() => handleClose())
            // if there is an error, we'll send an error message
            .catch(() => {
                msgAlert({
                    heading: 'Something Went Wrong',
                    message: 'Unable to add comment',
                    variant: 'danger',
                })
            })
    }



    const addUsertoComment = () => {
        setComment(prevComment => {
            const updatedValue = {'owner': user._id}
            return {...prevComment , ...updatedValue}
        })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <CommentForm
                    comment={comment}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Comment on Review"
                    course={course}
                    review={review}
                    triggerRefresh={() => setUpdated(prev => !prev)}
                />
            </Modal.Body>
        </Modal>
    )
}

export default GiveCommentModal