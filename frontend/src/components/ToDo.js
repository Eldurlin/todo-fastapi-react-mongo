import axios from "axios";
import React from "react";

function ToDoItem(props) {
    const deleteToDoHandler = (title) => {
        axios.delete(`http://localhost:8000/api/todo/${title}`)
            .then(res => console.log(res.data))
    }

    return (
        <div>
            <p>
                <span style={{fontWeight:'bold, underline'}}>
                    {props.toDo.title} :
                </span>
                    {props.toDo.description}
                <button onClick={() => deleteToDoHandler(props.toDo.title)} className="btn btn-outline-danger my-2 mx-2" style={{"borderRadius":"50px",}}>
                    X
                </button>
            </p>
        </div>
    )
}

export default ToDoItem;