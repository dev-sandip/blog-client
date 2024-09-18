import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className=" flex items-center justify-center min-h-[calc(100vh-100px-20px)]">
                <Outlet />
            </div>
            <Footer />


        </div>
    )
}

export default MainLayout