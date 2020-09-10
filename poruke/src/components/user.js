
export const oneMessage = (message) => {
    const divPoruka = document.createElement('div')
    divPoruka.innerHTML = `<p>Korisnik: ${message.username}</p><p>Napisao je poruku: ${message.message}</p><p>Vreme posta: ${message.timestamp}</p>`
    return divPoruka
}