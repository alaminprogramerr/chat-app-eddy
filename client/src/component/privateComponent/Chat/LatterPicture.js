import React from 'react'
import './style.css'
import ActiveDot from './ActiveDot'
import NonActiveDot from './NonActiveDot'


const LatterPicture = ({width,height,fontSize,firstName,status}) => {
    return (
        <div className="profileImage" style={{width:width,height:height,fontSize:fontSize}}>
            {status===true?
                <ActiveDot/>:''
            }
            {
                status===false?
                <NonActiveDot/>:''
            }
            <span>
                {firstName?firstName.split('')[0]:''}
            </span>
        </div>
    )
}

export default LatterPicture
