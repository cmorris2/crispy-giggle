import React from "react"

function TodoItem(props) {
    console.log(props)
    console.log("after props")
    return (
    <div className="todo-item">
        <input type="checkbox"></input>
    <p></p>
    </div>
    )
}

export default TodoItem