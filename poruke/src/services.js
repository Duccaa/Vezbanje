import axios from 'axios'

export const getMessages = () => {
    return axios.get('https://coetus.herokuapp.com/api/message')
}

export const postUserName = (username) => {
    return axios.post('https://coetus.herokuapp.com/api/message',{username})
}    

export const postMessage = (message) => {
    return axios.post('https://coetus.herokuapp.com/api/message',{message})
}    