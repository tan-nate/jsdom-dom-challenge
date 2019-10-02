const counter_element = document.querySelector("h1#counter")
const heart_button = document.querySelector("button#heart")
const pause_button = document.querySelector("button#pause")
const plus_button = document.querySelector("button#plus")
const minus_button = document.querySelector("button#minus")
const comment_button = document.querySelector("button#submit")
const comment_input = document.querySelector("input#comment-input")
function countUp() {
    let counter = 0
    function myClock() {
        counter_element.innerHTML = counter
        counter ++
    }
    let clockRunning = setInterval(myClock, 1000)
    pause_button.addEventListener("click", function() {
        if(pause_button.innerHTML === " pause ") {
            clearInterval(clockRunning)
            pause_button.innerHTML = " start "
            plus_button.disabled = true
            minus_button.disabled = true
            heart_button.disabled = true
            comment_button.disabled = true
        } else {
            clockRunning = setInterval(myClock, 1000)
            pause_button.innerHTML = " pause "
            plus_button.disabled = false
            minus_button.disabled = false
            heart_button.disabled = false
            comment_button.disabled = false
        }
    })
    plus_button.addEventListener("click", function() {
        counter ++
        counter_element.innerHTML = counter
    })
    minus_button.addEventListener("click", function() {
        counter --
        counter_element.innerHTML = counter
    })
}
function like() {
    let like_count = {}
    heart_button.addEventListener("click", function() {
        let existing_li = document.querySelector(`li[data-num="${counter_element.innerHTML}"]`)
        let li
        if(existing_li !== null) {
            li = existing_li
            like_count[counter_element.innerHTML] ++
        } else {
            li = document.createElement("li")
            li.setAttribute("data-num", counter_element.innerHTML)
            like_count[counter_element.innerHTML] = 1
        }
        if(like_count[counter_element.innerHTML] === 1) {
            li.innerHTML = `${counter_element.innerHTML} has been liked 1 time`
        } else {
            li.innerHTML = `${counter_element.innerHTML} has been liked ${like_count[counter_element.innerHTML]} times`
        }
        document.querySelector("ul.likes").appendChild(li)
    })
}
function comment() {
    comment_button.addEventListener("click", function(event) {
        event.preventDefault()
        let li = document.createElement('li')
        li.innerHTML = comment_input.value
        let ul = document.createElement('ul')
        ul.appendChild(li)
        document.querySelector("div#list.comments").appendChild(ul)
        comment_input.value = ""
    })
}
document.addEventListener("DOMContentLoaded", () => {
    countUp()
    like()
    comment()
})