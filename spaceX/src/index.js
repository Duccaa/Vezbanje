import {getCompanyInfo, getAllShips} from './services'
import { makeHeader } from './components/Header'
import { shipList } from "./components/ShipList"
import {select} from "./components/Select"

const app = document.querySelector('#app')

    getCompanyInfo()
        .then(res => {
            console.log(res.data)
            app.appendChild(makeHeader(res.data))
            app.appendChild(select())    
            getAllShips()
            .then(res => {
                app.appendChild(shipList(res.data))
        })        
        })

    app.addEventListener('change', () => {
        const select = document.getElementById('select')
        const divShipList = document.getElementById('list')
        // divShipList.innerHTML = ''
        if(select.value == 'All ships') {
            divShipList.innerHTML = '' 
            getAllShips()
                .then(res => {
                    app.appendChild(shipList(res.data))
            })  
        } 
        else if(select.value == 'Active'){
            app.removeChild(shipList())
            divShipList.innerHTML = ''
            getAllShips()
                .then(res => {
                        app.appendChild(shipList(res.data.filter(ship => ship.active == true)))
                    })  
        }
        else if(select.value == 'Not active'){ 
            divShipList.innerHTML = ''
            getAllShips()
                .then(res => { 
                    app.appendChild(shipList(res.data.filter(ship => ship.active == false)))
                })       
        }
    })    