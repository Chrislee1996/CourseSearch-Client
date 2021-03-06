import apiUrl from '../apiConfig'
import axios from 'axios'

export const createLikedCourse = (user, courseId, newLike) => {
    console.log(courseId, 'here is the courseId')
    console.log('new like here!' , newLike)
    return axios({
        url: `${apiUrl}/like/${courseId}`,
        method: 'POST',
        header: {
            Authorization:`Token token=${user.token}`
        },
        data:{like: newLike}
    })
}