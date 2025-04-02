import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectRoute=({children})=>{
    const isLogin=useSelector((state)=>state.loginstatus);
    return isLogin ? children : <Notacess /> 
    // return isLogin ? children : <Navigate to={"/login"} /> 

}

const Notacess=()=>{
    return <h1>you dont have any acess of this page</h1>
}