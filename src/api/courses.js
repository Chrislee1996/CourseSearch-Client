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


//Routes for all our subjects
export const getArt = () => {
    return axios(`${apiUrl}/courses/art`)
}

export const getBusiness = () => {
    return axios(`${apiUrl}/courses/business`)
}

export const getDataAnalysis = () => {
    return axios(`${apiUrl}/courses/dataanalysis`)
}

export const getDesign = () => {
    return axios(`${apiUrl}/courses/design`)
}

export const getEducation = () => {
    return axios(`${apiUrl}/courses/education`)
}

export const getEngineering = () => {
    return axios(`${apiUrl}/courses/engineering`)
}

export const getHealthcare = () => {
    return axios(`${apiUrl}/courses/healthcare`)
}

export const getHistory = () => {
    return axios(`${apiUrl}/courses/history`)
}

export const getLanguage = () => {
    return axios(`${apiUrl}/courses/language`)
}

export const getLaw = () => {
    return axios(`${apiUrl}/courses/law`)
}

export const getLiterature = () => {
    return axios(`${apiUrl}/courses/literature`)
}

export const getMath = () => {
    return axios(`${apiUrl}/courses/math`)
}

export const getProgramming = () => {
    return axios(`${apiUrl}/courses/computerprogramming`)
}

export const getScience = () => {
    return axios(`${apiUrl}/courses/science`)
}

export const getSocialScience = () => {
    return axios(`${apiUrl}/courses/socialscience`)
}


// routes for college and non college courses
export const getCollegeCourses = () => {
    return axios(`${apiUrl}/courses/collegecourses`)
}

export const getNonCollegeCourses = () => {
    return axios(`${apiUrl}/courses/noncollegecourses`)
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
