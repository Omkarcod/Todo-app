import { useContext } from "react";
import { InfoContext } from "./InfoContext";

const AddTaskPopup = (props) => {
    const { value, setValue, input, setInput, inputId, btnTask } = useContext(InfoContext);
    
    const inputEvent = (e) => {
        const name = e.target.name;
        const val = e.target.value;

        setInput({
            ...input,
            [name]: val,
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString()
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.title !== "" && input.status !== "") {
            if (btnTask === true) {
                setValue([...value, input]);
            } else {
                setValue(value.map((item, index) => {
                    if (index === inputId) {
                        return {
                            ...item, title: input.title, status: input.status,
                            time: new Date().toLocaleTimeString(),
                            date: new Date().toLocaleDateString()
                        }
                    }
                    return item;
                }));
            }
            props.hidePopup(false);
            setInput({ title: "", status: "" });
        } else {
            alert("Fill all the data");
        }
    }


    return (
        <>
            <div className={`popup ${props.popup === false ? "hide" : ""} ${props.editPopup === false ? "hide" : ""}`}>
                <div className="popup_container">
                    <h1>{btnTask === true ? 'Add TODO' : 'Update TODO'}</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <div className='info'>
                            <label htmlFor="title">Title</label>
                            <input type="text" name='title' id='title' onChange={inputEvent} value={btnTask === true ? input.title : input.title} />

                            <select name="status" id="status" onChange={inputEvent} value={btnTask === true ? input.status : input.status}>
                                <option value="">Status</option>
                                <option value="complete">Complete</option>
                                <option value="incomplete">Incomplete</option>
                            </select>
                        </div>
                        <div className="buttons">
                            <button type='submit' id='addTask' >{btnTask === true ? 'Add Task' : 'Update Task'}</button>
                            <button type='button' id='taskCancel' onClick={() => props.hidePopup(false)}>Cancel</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default AddTaskPopup;