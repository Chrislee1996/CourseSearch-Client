import apiUrl from '../apiConfig'
import axios from 'axios'

//POST -> create function
export const createLikedCourse = (user, courseId, like) => {
    console.log(like, 'here is the like')
    console.log(courseId, 'here is the courseId')

    return axios({
        url:`${apiUrl}/like/${courseId}`,
        method:'POST',
        headers:{
            Authorization: `Token token=${user.token}`
        },
        data:{like: {like:like}}
    })
}
