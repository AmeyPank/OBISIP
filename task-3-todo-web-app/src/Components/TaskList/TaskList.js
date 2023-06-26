import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiPencil } from "react-icons/hi";
import { MdDataSaverOn, MdOutlineCancel } from "react-icons/md";
import "./styles.css"
export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
    return (
        <div className="tasks-container">
            <div className="titles">
                <div className="title1">Title</div>
                <div className="title2">Description</div>
                <div className="title3">Edit/Delete</div>
            </div>
            <ul>
                {tasks && tasks.length > 0 ? (
                    tasks.map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                            onChange={onChangeTask}
                            onDelete={onDeleteTask}
                        />
                    ))
                ) : (
                    <li className="empty-tasks">Tasks List is empty!</li>
                )}
            </ul>
        </div>
    );
}

function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(task.title);
    const [updatedDesc, setUpdatedDesc] = useState(task.desc);

    const handleInputChange = (e) => {
        if (e.target.name === "title") {
            setUpdatedTitle(e.target.value);
        } else if (e.target.name === "description") {
            setUpdatedDesc(e.target.value);
        }
    };


    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onChange(task.id, updatedTitle, updatedDesc);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setUpdatedTitle(task.title);
        setUpdatedDesc(task.desc);

    };

    const handleDelete = () => {
        onDelete(task.id);
    };

    return (
        <li className="task">
            {isEditing ? (
                <div className="task-details">

                    <div className="description">
                        <textarea
                            type="text"
                            name="title"
                            value={updatedTitle}
                            onChange={handleInputChange}
                        />
                        <textarea
                            type="text"
                            name="description"
                            value={updatedDesc}
                            onChange={handleInputChange}
                        />

                        <span className="button save" onClick={handleSave}>
                            <MdDataSaverOn />
                        </span>
                        <span className="button cancel" onClick={handleCancel}>
                            <MdOutlineCancel />
                        </span>
                    </div>
                </div>
            ) : (
                <div className="task-details">
                    <div className="description">
                        <div className="title">{updatedTitle}</div>
                        <div className="desc">{updatedDesc}</div>

                        <span className="button edit" onClick={handleEdit}>
                            <HiPencil />
                        </span>
                        <span className="button delete" onClick={handleDelete}>
                            <RiDeleteBinLine />
                        </span>
                    </div>
                </div>
            )}
        </li>
    );
}
