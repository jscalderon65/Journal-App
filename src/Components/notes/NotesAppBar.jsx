import React from 'react'

const NotesAppBar = () => {
    return (
        <div className="notes__appbar">
            <span className="notes__date">28 de agosto de 2020</span>
            <div className="notes__options">
                <button className="mr-1 btn btn-options">Picture</button>
   
                <button className="btn btn-options">Save</button>
            </div>
        </div>
    )
}

export default NotesAppBar
