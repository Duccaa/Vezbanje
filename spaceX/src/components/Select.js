
export const select = () => {
    const divSelect = document.createElement('div')
    divSelect.id = 'select-conatiner'
    const select = document.createElement('select')
    select.id = 'select'
    const option1 = document.createElement('option')
    option1.textContent = 'All ships'
    const option2 = document.createElement('option')
    option2.textContent = 'Active'
    const option3 = document.createElement('option')
    option3.textContent = 'Not active'
    select.append(option1, option2, option3)
    divSelect.appendChild(select)
    return divSelect
}