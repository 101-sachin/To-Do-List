const addtaskbtn = document.querySelector('.addtaskbtn')
const popupMenu = document.getElementById('popup-menu')
const addtaskpopupbtn = document.getElementById('addtaskpopupbtn')
const cancelpopupbtn = document.getElementById('cancelpopupbtn')
const taskinput = document.querySelector('.taskinput')
const tasklist = document.getElementById('tasklist')

addtaskbtn.addEventListener('click', () => {
    popupMenu.style.display = 'flex'
})

cancelpopupbtn.addEventListener('click', () => {
    popupMenu.style.display = 'none'
    taskinput.value = ''
})

addtaskpopupbtn.addEventListener('click', () => {
    const taskText = taskinput.value.trim()

    if (taskText !== '') {
        const li = document.createElement('li')
        li.textContent = taskText

        const donebtn = document.createElement('button')
        donebtn.textContent = 'Done'
        
        const editbtn = document.createElement('button')
        editbtn.textContent = 'Edit'

        const deletebtn = document.createElement('button')
        deletebtn.textContent = 'Delete'
        deletebtn.style.backgroundColor = 'red'

        li.appendChild(donebtn)
        li.appendChild(editbtn)
        li.appendChild(deletebtn)
        tasklist.appendChild(li)

        popupMenu.style.display = 'none'
        taskinput.value = ''
        save()
    } else {
        alert('Please enter a task')
    }
})

tasklist.addEventListener('click', (e) => {

    const li = e.target.closest('li')

    if (e.target.textContent === 'Done') {
        if (li.style.textDecoration === 'line-through') {
            li.style.textDecoration = 'none'
        } else {
            li.style.textDecoration = 'line-through'
        }
        save()
    }

    if (e.target.textContent === 'Edit') {
        const newtasktext = prompt('Edit your task:')
        if (newtasktext) {
            li.firstChild.textContent = newtasktext
        }
        save()
    }

    if (e.target.textContent === 'Delete') {
        li.remove()
        save()
    }
})

function save() {
    localStorage.setItem("data", tasklist.innerHTML)
}

function show() {
    const savedTasks = localStorage.getItem("data")
    if (savedTasks) {
        tasklist.innerHTML = savedTasks
    }
}

show()
