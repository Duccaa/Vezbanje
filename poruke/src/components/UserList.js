import {oneMessage} from './user'

export const userList = (messages) => {
    const userListDiv = document.createElement('div')
    messages.forEach(message => {
        userListDiv.append(oneMessage(message))       
    });
    return userListDiv
}