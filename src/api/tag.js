import apiUrl from '../apiConfig'
import axios from 'axios'

export const getCourseTags = (tagId) => {
    return axios(`${apiUrl}/tags/${tagId}`)
}


export const getTags = () => {
    return axios(`${apiUrl}/tags`)
}

