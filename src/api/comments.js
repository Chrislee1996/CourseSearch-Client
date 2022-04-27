import apiUrl from '../apiConfig'
import axios from 'axios'


export const addComment = (user, courseId, newComment, reviewId) => {
    console.log('user in comment axios', user)
    console.log('our courseId in comments', courseId)
    console.log('our review Id', reviewId)
    console.log('this is our new comment', newComment)
    return axios({
        url: `${apiUrl}/comments/${courseId}/${reviewId}`,
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