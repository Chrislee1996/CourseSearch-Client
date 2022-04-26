import apiUrl from '../apiConfig'
import axios from 'axios'

export const getOnlineCourses = () => {
    return axios(`${apiUrl}/tags/onlinecourses`)
}

export const getCollegeCourses = () => {
    return axios(`${apiUrl}/tags/collegecourses`)
}

export const getNonCollegeCourses = () => {
    return axios(`${apiUrl}/tags/noncollegecourses`)
}

export const getInpersonCourses = () => {
    return axios(`${apiUrl}/tags/inpersoncourses`)
}

export const getMandatory = () => {
    return axios(`${apiUrl}/tags/mandatoryattendence`)
}

export const getHomework = () => {
    return axios(`${apiUrl}/tags/homework`)
}

export const getTestheavy = () => {
    return axios(`${apiUrl}/tags/testheavy`)
}

export const getGroupprojects = () => {
    return axios(`${apiUrl}/tags/groupprojects`)
}

export const getFeedback = () => {
    return axios(`${apiUrl}/tags/feedback`)
}

export const getMaterial = () => {
    return axios(`${apiUrl}/tags/material`)
}

export const getCaring = () => {
    return axios(`${apiUrl}/tags/caring`)
}

export const getTextbook = () => {
    return axios(`${apiUrl}/tags/textbook`)
}

export const getToughgrader = () => {
    return axios(`${apiUrl}/tags/toughgrader`)
}

export const getLectureheavy = () => {
    return axios(`${apiUrl}/tags/lectureheavy`)
}





