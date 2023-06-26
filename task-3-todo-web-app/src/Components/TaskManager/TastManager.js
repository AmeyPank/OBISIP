import React, { useEffect, useReducer } from "react";
import TaskList from "../TaskList/TaskList.js";
import AddTask from "../Addtask/Addtask.js";
import "./styles.css";

function tasksReducer(tasks, action) {
    switch (action.type) {
        case "ADD_TASK": {
            return [
                ...tasks,
                {
                    id: action.id,
                    title: action.title,
                    desc: action.desc,
                    done: false,
                },
            ];
        }
        case "UPDATE_TASK": {
            return tasks.map((task) => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        ...action.updatedProperties,
                    };
                } else {
                    return task;
                }
            });
        }
        case "DELETE_TASK": {
            return tasks.filter((task) => task.id !== action.id);
        }
        default: {
            throw new Error("Unknown action type: " + action.type);
        }
    }
}

const initialTasks = [
    { id: 0, title: "Title", desc: "Description", done: true },
    { id: 1, title: "Title", desc: "Description", done: false },
    { id: 2, title: "Title", desc: "Description", done: false },
];

export default function TaskApp() {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function handleAddTask(title, desc) {
        const id = tasks.length;
        dispatch({ type: "ADD_TASK", id, title, desc });
    }

    function handleChangeTask(id, updatedProperties) {
        dispatch({ type: "UPDATE_TASK", id, updatedProperties });
    }

    function handleDeleteTask(id) {
        dispatch({ type: "DELETE_TASK", id });
    }

    return (
        <div className="app-container">
            <AddTask onAddTask={handleAddTask} />
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </div>
    );
}
