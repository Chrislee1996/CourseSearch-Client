import apiUrl from '../apiConfig'
import axios from 'axios'


// POST -> create function
export const addReview = (user, courseId, newReview) => {
    // console.log('user in review axios', user)
    // console.log(courseId,'course id in review')
    // console.log('review in review axios', newReview)
    return axios({
        url: `${apiUrl}/reviews/${courseId}`,
        method: 'POST',
        header: {
            Authorization:`Token token=${user.token}`
        },
        data: { review: newReview }
    })
}

// PATCH -> update function
export const updateReview = (user, courseId, reviewId, updatedReview) => {

    return axios({
        url: `${apiUrl}/reviews/${courseId}/${reviewId}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { review: updatedReview }
    })
}

// DELETE -> remove function
export const removeReview = (user, courseId, reviewId) => {
    return axios({
        url: `${apiUrl}/reviews/${courseId}/${reviewId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

