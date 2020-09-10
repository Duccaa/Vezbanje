export const makeHeader = (info) => {
    const header = document.createElement('header')
    header.id = 'header'
    header.innerHTML = `<h1>${info.name}</h1><p>Founder: ${info.founder}</p><p>Founded: ${info.founded}</p>`
    return header
}
