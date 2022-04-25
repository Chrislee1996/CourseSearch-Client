import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllCourses = () => {
    return axios(`${apiUrl}/courses`)
}

//show function
export const showCurrentCourse = (courseId) => {
    return axios(`${apiUrl}/courses/${courseId}`)
}

//GET -> MINE index
export const getMyCourses = (user) => {
    return axios({
        url:`${apiUrl}/courses/mine`,
        method: 'GET',
        headers: {
            Authorization:`Token token=${user.token}`
        }
    })
}

//POST -> create function
export const createCourse = (user, newCourse) => {
    return axios({
        url:`${apiUrl}/courses`,
        method:'POST',
        headers:{
            Authorization: `Token token=${user.token}`
        },
        data:{course: newCourse}
    })
}

//PATCH -> update function
export const updateCourse = (user, updatedCourse) => {
    return axios({
        url:`${apiUrl}/courses/${updatedCourse.id}`,
        method:'PATCH',
        headers:{
            Authorization: `Token token=${user.token}`
        },
        data:{course: updatedCourse}
    })
}

//DELETE -> Delete function
export const removeCourse = (user, courseId) => {
    return axios({
        url:`${apiUrl}/courses/${courseId}`,
        method:'DELETE',
        headers:{
            Authorization: `Token token=${user.token}`
        }
    })
}