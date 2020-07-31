import React from 'react'
const nonActiveStyle={
    width:'12px',
    height:'12px',
    background:'yellow',
    borderRadius:'50%',
    position:'absolute',
    right:'-2px',
    top:'2px',
    border:'2px solid white'
}
const NonActiveDot = () => {

    return (
        <div className="activeDot" style={nonActiveStyle}>
        </div>
    )
}

export default NonActiveDot
