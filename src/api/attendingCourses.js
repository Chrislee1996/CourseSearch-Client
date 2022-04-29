import apiUrl from '../apiConfig'
import axios from 'axios'


// index function
// export const getAllAttendingCourses = () => {
//     return axios(`${apiUrl}/attendingcourses`)
// }

export const getAllAttendingCourses = (user) => {
    console.log(user, 'here is the user')
    return axios({
        url:`${apiUrl}/attendingcourses`,
        method: 'GET',
        headers: {
            Authorization:`Token token=${user.token}`
        }
    })
}

export const createAttendingCourses = (user, newAttendingCourses) => {
    return axios({
        url:`${apiUrl}/attendingcourses`,
        method:'POST',
        headers: {
            Authorization:`Token token=${user.token}`
        },
        data:{attendingcourse: newAttendingCourses}
    })
}


export const removeAttendingCourse = (user, courseId) => {
    return axios({
        url:`${apiUrl}/attendingcourses/${courseId}`,
        method:'DELETE',
        headers: {
            Authorization:`Token token=${user.token}`
        }
    })
}