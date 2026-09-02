import { Route, Routes, Navigate} from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginForm'
import LoginPasswordLost from './LoginForm'
import LoginPasswordReset from './LoginForm'
import React from 'react';
import { UserContext } from '../../Context/User/UserContext'

const Login = () => {
  const { login } = React.useContext(UserContext);

  if(login) return <Navigate to="/conta" />
  
  return (  
    <div>
      <Routes >
        <Route path='/' element={<LoginForm />}/>
        <Route path='criar' element={<LoginCreate />}/>
        <Route path='perdeu' element={<LoginPasswordLost />}/>
        <Route path='resetar' element={<LoginPasswordReset />}/>
      </Routes>
    </div>
  )
}

export default Login
