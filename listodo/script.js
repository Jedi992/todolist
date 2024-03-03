`use strict`

const button = document.querySelector('.btn');
const input = document.querySelector(".input__todo")
const ul = document.querySelector(".ul")
const t = document.querySelector(".element")
const span = t.content.querySelector('.task')
const btnDelete = document.querySelector(".btn_delete")
let task = []
let taskCheckBox = document.querySelector(".list_task")


function addTaskForEnter (e) {
    if (e.keyCode === 13) {
        document.querySelector(".btn").click()
    }
}
function addTask() {
    task.push(
        {id: task.length + 1 , flagComplete:true, text:input.value}
    )
    if (input.value.length <= 3) {
        return
    }
    task.forEach((elem) => {
        span.textContent = elem.text
    })
    // console.log(task)
    let list = t.content.cloneNode(true);
    ul.append(list)
        input.value = ''

}

function clearFunc (event) {
    event.target.closest('.list_task').remove()
}

function taskComplete(event) {
    if (event.target.closest('.list_task').classList.contains("checkBoxComplete") === false) {
    event.target.closest('.list_task').classList.add("checkBoxComplete");
    } else {
        event.target.closest('.list_task').classList.remove('checkBoxComplete')
    }
}

