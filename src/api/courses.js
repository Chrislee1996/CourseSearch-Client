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