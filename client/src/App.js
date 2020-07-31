import React from 'react'
import {BrowserRouter, Switch ,Redirect} from 'react-router-dom'
import ChatIndex from './component/privateComponent/Chat/index'
import Login from './component/publicComponent/Login'
import Register from './component/publicComponent/Register'
import ResetPassword from './component/publicComponent/ResetPassword'
import LockScreen from './component/publicComponent/LockScreen'
import PhoneVerification from './component/publicComponent/PhoneVerification'
import PublicRoute from './component/util/PublicRoute'
import PrivateRoute from './component/util/PrivateRoute'


import {RecoilRoot} from 'recoil'
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RecoilRoot>
          <PublicRoute path='/login' component={Login}/>
          <PublicRoute path='/register' component={Register}/>
          <PublicRoute path='/reset-password' component={ResetPassword}/>
          <PublicRoute path='/lock' component={LockScreen}/>
          <PublicRoute path='/phone-verification' component={PhoneVerification}/>
          
          {/* Private route */}
          <PrivateRoute exect path='/chat' component={ChatIndex}/>
          <Redirect from ='/' to='/chat'/>
        </RecoilRoot>
        {/* Public route */}
      </Switch>
    </BrowserRouter>
  )
}

export default App
