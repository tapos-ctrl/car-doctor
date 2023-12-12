import { Outlet } from "react-router-dom";
import Navbar from "../pages/sheard/Navbar/Navbar";
import Footer from "../pages/sheard/Footer/Footer";


const Main = () => {
    return (
        <div>
            <div className="container mx-auto px-5">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
        <div className="bg-[#151515]">
        <Footer></Footer>
        </div>
        </div>
    );
};

export default Main;