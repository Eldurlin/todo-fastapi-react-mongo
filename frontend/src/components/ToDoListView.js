import ToDoItem from "./ToDo";

export default function ToDoView(props) {
    return (
        <div>
            <ul>
                {props.toDoList.map(toDo => <ToDoItem toDo={toDo}/>)}
            </ul>
        </div>
    )
}