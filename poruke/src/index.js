import {getMessages} from './services'
import {userList} from './components/UserList'
import {userName, message} from './components/inputs'


const app = document.getElementById('app')


getMessages()
    .then(res=> {
        app.append(userName())
        app.appendChild(userList(res.data.data))
        app.append(message()) 
    })  





