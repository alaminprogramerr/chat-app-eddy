import React from 'react'
import {Route, Redirect}from 'react-router-dom'

const PrivageRoute=({component:Component,...rest})=> {
    return (
        <Route
            {...rest}
            render={
                props=>{
                    if(true){
                        // if(localStorage.getItem('eddy_app')){
                        return <Component {...props}/>
                    }else{
                        return(
                            <Redirect
                                to={
                                    {
                                        pathname:"/login",
                                        state:{
                                            from:props.location
                                        }
                                    }
                                }
                            />
                        )
                    }
                }
            }
        />
    )
}

export default PrivageRoute