import {postUserName } from '../services'
export const userName = () => {
    const formDiv = document.createElement('div')
    const userNameForm = document.createElement('form')
    const userNameInput = document.createElement('input')
    userNameInput.id  = 'user-name'
    userNameInput.type = 'text'
    userNameInput.placeholder = 'Unesite usermane'
    const userNameBtn = document.createElement('button')
    userNameBtn.className = 'submit'
    userNameBtn.type = 'submit'
    userNameBtn.textContent ='Submit'
    userNameForm.append(userNameInput, userNameBtn)
    formDiv.append(userNameForm)
    userNameForm.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(userNameInput.value)
        postUserName(userNameInput.value) 
            .then(res => console.log(res.data))
            .catch(err => {
                const p = document.createElement('p')
                p.textContent = err.response.data.message
                userNameForm.appendChild(p)   
                setTimeout(() => {
                    p.remove()
                }, 2400 )
                console.log(err.response.data)})
            userNameInput.value = ''
     })
    
    return formDiv
}

export const message = () => {
    const messageForm = document.createElement('form')
    const messageInput = document.createElement('input')
    messageInput.type= 'text'
    messageInput.placeholder = 'Unesite poruku'
    const messageBtn = document.createElement('button')
    messageBtn.type = 'submit'
    messageBtn.textContent = 'Submit'
    messageForm.append(messageInput, messageBtn)
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(messageInput.value)
        postUserName(messageInput.value) 
            .then(res => console.log(res.data))
            .catch(err => {
            const p = document.createElement('p')
            p.textContent = err.response.data.message
            messageForm.appendChild(p)   
            setTimeout(() => {
                p.remove()
            }, 2400 )
            console.log(err.response.data)})
            messageInput.value = ''
    })
            
    return messageForm
}