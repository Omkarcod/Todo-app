import DeleteIcon from '@mui/icons-material/Delete';
import React, { useContext } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import AddTaskPopup from './AddTaskPopup';
import { InfoContext } from './InfoContext';


const BodyCompComp = (props) => {
    const { editPopup, setEditPopup } = useContext(InfoContext);

    return (
        <>
            <AddTaskPopup popup={editPopup} hidePopup={setEditPopup} />
            <div className="task" >
                <div className='data'>
                    <input type="checkbox" checked={props.status === 'complete' ? 'checked' : null} />
                    <div>
                        <h2>{props.title}</h2>
                        <p>{props.time}, {props.date}</p>
                    </div>
                </div>
                <div className="tools">
                    <button id="delete" onClick={(e) => { props.onSelect(props.id, e) }} >
                        <DeleteIcon className='icon' />
                    </button>
                    <button id="edit" onClick={(e) => { props.onSelect(props.id, e) }} >
                        <EditIcon className='icon' />
                    </button>
                </div>
            </div>
        </>
    )
}
export default BodyCompComp;