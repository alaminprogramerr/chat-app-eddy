import React from 'react'
import {Route,Redirect} from 'react-router-dom'
const PublicRoute = ({component:Component,...rest}) => {
    return (
        <Route
            {...rest}
            render={
                props=>{
                    if(false){
                        // if(window.localStorage.getItem('eddy_app')){
                        return (
                            <Redirect
                                to={
                                    {
                                        pathname:"/chat",
                                        state:{
                                            from:props.location
                                        }
                                    }
                                }
                            />
                        )
                    }else{
                        return(
                            <Component {...props}/>
                        )
                    }
                }
            }
        />
    )
}

export default PublicRoute