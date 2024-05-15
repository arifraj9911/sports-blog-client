import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";


const Main = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-300px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster />
            <ScrollToTopButton></ScrollToTopButton>
        </div>
    );
};

export default Main;