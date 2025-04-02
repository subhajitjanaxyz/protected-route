import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Applayout } from "./layout/Applayout";
import { Login } from "./componets/login";
// import { Header } from "./layout/Header";
import { Dashboard } from "./componets/dashbord";
import { Home } from "./componets/home";
import { ProtectRoute } from "./protected routed/protectedRoute";
import { Dynamiccomponent } from "./componets/dynamic";



const App =()=>{
  const route=createBrowserRouter([
    {path:"/",
     element: <Applayout /> ,
     children:[
      {path:'/login',
        element: <Login />
      },
      {
        path:"/home",
        element:  <ProtectRoute><Home /></ProtectRoute>  ,
      }
      ,
      {
        path:"/dashboard",
        element: <ProtectRoute> <Dashboard /></ProtectRoute>  ,
      }
      ,
      {
        path:"/dashboard/:postid",
        element: <ProtectRoute> <Dynamiccomponent /></ProtectRoute>  ,
      }
     ]


    }
  ])
  return <RouterProvider  router={route}/>
}
export default App;

