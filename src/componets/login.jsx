import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../store/loginSlice";

export const Login=()=>{
    const dispatch=useDispatch();
    const isLogin=useSelector((state)=>state.loginstatus);
    console.log(isLogin);
    const handleOnclicklogin=()=>{
        console.log('click')
        isLogin? dispatch(logout()):dispatch(login())
        
        
    }
    return (
        <>
        <h1>your are  {isLogin? "login":"log out"}</h1>
        <button onClick={handleOnclicklogin}>{isLogin?"log out":"login"}</button>
        
        </>
    )
}