import {  BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from './Routes/Login'
import Home from './Routes/Home'
import Profile from './Routes/Profile'
const PrivateRoute = ({element}) => {
  const {credentials} = useSelector(state => state.user)
  if(!credentials) return <Navigate to={'/login'}/>
  return element
}
function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<PrivateRoute element={<Home/>}/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/profile'} element={<PrivateRoute element={<Profile/>}/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
