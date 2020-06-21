import React, {useContext} from 'react'
import AuthContext from '../../../context/authContext/AuthContext'
import {Route, Redirect} from 'react-router-dom'

export default function PrivateRoute({component:Component,...rest}) {
    const {userAuth} = useContext(AuthContext)
    return (
        <Route
        {...rest}
        render = {props => !userAuth ? (<Redirect to = '/login' />):(<Component {...props}/>)}
        
        />

    )
}
