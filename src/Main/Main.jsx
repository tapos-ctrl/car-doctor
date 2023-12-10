import { Outlet } from "react-router-dom";
import Navbar from "../pages/sheard/Navbar/Navbar";
import Footer from "../pages/sheard/Footer/Footer";


const Main = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;