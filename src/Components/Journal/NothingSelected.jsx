import React from 'react'

const NothingSelected = () => {
    return (
        <div className="nothing__main-content journal__new-entry animate__animated animate__fadeIn" style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
            <p>
            Select Something...
            <br/>
            Or Create An Entry
            </p>
            <br/>
            <i className="far fa-star fa-4x"></i>
        </div>
    )
}

export default NothingSelected
