import React from 'react'

const activeStyle={
    width:'12px',
    height:'12px',
    background:'green',
    borderRadius:'50%',
    position:'absolute',
    right:'-2px',
    top:'2px',
    border:'2px solid white'
}

const ActiveDot = () => {
    return (
        <div className="activeDot" style={activeStyle}>
        </div>
    )
}

export default ActiveDot
