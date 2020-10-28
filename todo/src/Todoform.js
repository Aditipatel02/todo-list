import React, { useState } from "react";

function TodoForm() {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.targetvalue });
    }

    return (
        <form>
            <input
                name="task"
                type="task"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <button type="submit" />
        </form>
    );
}

export default TodoForm;