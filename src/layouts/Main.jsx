import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
import ScrollButton from "../Pages/Shared/ScrollButton/ScrollButton";


const Main = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-300px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster />
            <ScrollButton></ScrollButton>
        </div>
    );
};

export default Main;