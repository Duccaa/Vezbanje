export const allShips = (ship) => {
        const divShip = document.createElement('div')
        const divImg = document.createElement('img')
        divImg.src = ship.image
        const p1 = document.createElement('p')
        p1.innerText = `Ship name: ${ship.ship_name}`
        const p2 = document.createElement('p')
        p2.innerText = `Active: ${ship.active}`
        divShip.append(divImg, p1, p2)
        return divShip
}
 


