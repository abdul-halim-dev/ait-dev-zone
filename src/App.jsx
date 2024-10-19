import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Aside from "./pages/aside/Aside"
import Home from "./pages/home/Home"
import Services from "./pages/services/Services"
import Portfolio from "./pages/portfolio/Portfolio"
import Price from "./pages/price/Price"
import Team from "./pages/team/Team"
import Technology from "./pages/technology/Technology"
import Contactus from "./pages/contactus/Contactus"
import Pagenot from "./pages/pagenot/Pagenot"
import './App.css'
 


const route = createBrowserRouter([

{
  path:"/",
  element:<Aside/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },

    {
      path:"/service",
      element:<Services/>
    },

    {
      path:"/portfolio",
      element:<Portfolio/>
    },

    {
      path:"/price",
      element:<Price/>
    },

    {
      path:"/team",
      element:<Team/>
    },

    {
      path:"/technology",
      element:<Technology/>
    },

    {
      path:"/contactus",
      element:<Contactus/>
    },
{
  path:"*",
  element:<Pagenot/>
}



  ]
}


])






 
 const App = () => {
   return (
     <RouterProvider router={route}> </RouterProvider>
   )
 }
 
 export default App