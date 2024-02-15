import React, { useContext } from 'react';
import AddTaskPopup from './AddTaskPopup';
import { InfoContext } from './InfoContext';

const HeaderComp = (props) => {
    const { setInput, popup, setPopup, setBtnTask } = useContext(InfoContext);
    const showPopup = () => {
        setBtnTask(true);
        setPopup(true);
        setInput({ title: "", status: "" });
    }

    return (
        <>
            <AddTaskPopup popup={popup} hidePopup={setPopup} />
            <header>
                <h1>Test Application</h1>
                <div className="filter">
                    <button type='button' onClick={showPopup}>Add Task</button>
                    <select name="status" id="status" onChange={(e) => { props.filterData(e.target.value) }}>
                        <option value="all">All</option>
                        <option value="complete">Complete</option>
                        <option value="incomplete">Incomplete</option>
                    </select>
                </div>
            </header>
        </>
    )
}
export default HeaderComp;