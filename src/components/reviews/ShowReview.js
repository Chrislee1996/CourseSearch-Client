import React, { useEffect, useState } from 'react'
import { Card, Button, Container } from 'react-bootstrap'

const ShowReview = (props) => {
    // most of these are simply to pass to edit modal
    const {review,id, user, product, triggerRefresh} = props

    
    // const destroyReview = () => {
    //     removeReview(user, product._id, review._id)
    //         .then(() => triggerRefresh())
    //         // if there is an error, we'll send an error message
    //         .catch(console.error)
    // }



    return (
        <>
            <Card className="m-2">
                <Card.Body>
                        <h4>{review.note}<br/></h4>
                    {
                        user && (user.id === product.owner.id)
                        ?
                        <>
                    </>
        :
        null
        }
        </Card.Body>
    </Card>
    </>
    )
}

export default ShowReview