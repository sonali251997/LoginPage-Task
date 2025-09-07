import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router";


const Login = React.lazy(()=>import('../app/auth/Login'));
const Dashboard = React.lazy(()=>import('../app/modules/Dashboard'));


const AppRouter = () => {
  let token = useSelector(state => state.auth.accessToken);
  console.log("token", token);

  return (<Routes>
    {token ? (<>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='*' element={<Navigate to={"/dashboard"} replace />} />
    </>) : (
      <>
        <Route index element={<Login />} />
        <Route path='*' element={<Navigate to={"/"} replace />} />
      </>
    )}
  </Routes>)
}

export default AppRouter;