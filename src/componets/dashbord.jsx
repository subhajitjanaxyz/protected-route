import { NavLink } from "react-router-dom"

export const Dashboard=()=>{
    return (
        <>
       <NavLink to={"/dashboard/post1"}>route 1</NavLink>
       <br />
       <NavLink to={"/dashboard/post2"}>route 2</NavLink><br />
       <NavLink to={"/dashboard/post3"}>route 3</NavLink><br />
       <NavLink to={"/dashboard/post4"}>route 4</NavLink>


        <h1>its dashbord</h1>
        </>
    )
}