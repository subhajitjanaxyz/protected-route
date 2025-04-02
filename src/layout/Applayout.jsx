import { Outlet } from "react-router-dom"
import { Footer } from "./footer"
import { Header } from "./Header"

export const Applayout=()=>{
    return (<>
    <Header />
    <Outlet />
    <Footer />
    </>)
}