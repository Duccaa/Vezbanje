
import { allShips } from "./ShipDiv"

export const shipList = (ships) => {
    const divShipList = document.createElement('div')
    divShipList.id = 'list'
    ships.forEach(ship => {
       divShipList.appendChild(allShips(ship)) 
    })
    return divShipList
}