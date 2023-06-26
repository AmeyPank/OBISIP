import { useState } from "react";
import "./styles.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function AddTask({ onAddTask }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleAddTask = () => {
        if (title.trim() === "" && desc.trim() === "") {
            toast.error("Please add a valid Task!");
        } else {
            onAddTask(title ,desc);
            setTitle("");
            setDesc("");
            toast("Tast Added!");

        }
    };

    return (
        <div className="header">
            <ToastContainer />
            <div className="input-container">
                <input
                    placeholder="Title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description..."
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)} >

                </textarea>
                <button
                    id="add-todo-btn"
                    onClick={handleAddTask}
                >
                    Save
                </button>

            </div>
        </div>

    );
}