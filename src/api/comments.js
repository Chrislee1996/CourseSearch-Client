import apiUrl from '../apiConfig'
import axios from 'axios'


export const addComment = (user, courseId, reviewId, newComment) => {
    console.log('user in comment axios', user)
    console.log('comment in comment axios', newComment)
    console.log(reviewId, 'reviewID')
    console.log(courseId, 'courseId')
    return axios({
        url: `${apiUrl}/reviews/${courseId}/${reviewId}`,
        method: 'POST',
        header: {
            Authorization:`Token token=${user.token}`
        },
        data: { comment: newComment }
    })
}



// DELETE -> remove function
export const removeComment = (user, courseId, reviewId,commentId) => {
    return axios({
        url: `${apiUrl}/reviews/${courseId}/${reviewId}/${commentId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}