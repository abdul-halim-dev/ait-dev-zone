import Footer from "@/component/footer/Footer"
import Header from "@/component/header/Header"
import { Outlet } from "react-router-dom"

 

const Aside = () => {
  return (
   <>
   
   <Header/>
   <div className=" w-full h-screen bg-primary ">
    <Outlet/>
   </div>
   <Footer/>
   
   </>
  )
}

export default Aside