const input = document.querySelector('input')
const btn = document.querySelector('button')
const section = document.querySelector('.section')


btn.addEventListener('click', () => {
    const getInput = input.value;
    addNewTask(getInput)

})
input.addEventListener('keydown', (e) => {
    if (e.code == 'Enter' || e.code == 'NumpadEnter') {
        const getInput = input.value;
        addNewTask(getInput)
    }
})

function addNewTask(getInput) {
    const newDiv = document.createElement('div')

    newDiv.classList.add('items')
    const check = document.createElement('i')
    check.classList.add('far', "fa-check-circle", "icon0", "vs")
        // check.style.visibility('none')
    newDiv.append(check)

    section.append(newDiv)

    const newSpan = document.createElement('div')
    newSpan.classList.add('span')


    newSpan.textContent = getInput

    newDiv.append(newSpan)

    const newIcons = document.createElement('div')
    newIcons.classList.add('icons')
    newSpan.append(newIcons)

    const firstIcon = document.createElement('i')
    firstIcon.classList.add('far', 'fa-trash-alt', 'icon1')
    const SecondIcon = document.createElement('i')
    SecondIcon.classList.add('far', 'fa-edit', 'icon2')
    newIcons.append(firstIcon)
    newIcons.append(SecondIcon)
    input.value = '';
    const del = document.querySelectorAll('.icon1')
    for (let d of del) {
        d.addEventListener('click', () => {
            d.parentElement.parentElement.parentElement.remove()

        })
    }
    const edit = document.querySelectorAll('.icon2')
    for (let e of edit) {
        e.addEventListener('click', () => {
            const parent = e.parentElement.parentElement.parentElement
            parent.style.textDecoration = 'line-through'
            const editBtn = e.parentElement.parentElement.parentElement.children[0]

            editBtn.classList.remove('vs')


        })
    }

}
