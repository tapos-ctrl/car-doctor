import { MdPermPhoneMsg } from "react-icons/md";
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";



const OurAddress = () => {
    
    return (
        <div className="flex flex-col lg:flex-row justify-evenly py-24 my-24 rounded-lg bg-[#151515]">
            <div className="flex items-center">
            <IoCalendarClearOutline  className=" text-3xl text-primary-color"/>
            <div className="ml-4 text-white">
                <h4>We are open monday-friday</h4>
                <h1 className="text-2xl font-bold">7:00 am - 9:00 pm</h1>
            </div>
            </div>
            <div className="flex items-center">
            <MdPermPhoneMsg  className=" text-3xl text-primary-color"/>
            <div className="ml-4 text-white">
                <h4>Have a question?</h4>
                <h1 className="text-2xl font-bold">+2546 251 2658</h1>
            </div>
            </div>
            <div className="flex items-center">
            <IoLocation  className=" text-3xl text-primary-color"/>
            <div className="ml-4 text-white">
                <h4>Need a repair? our address</h4>
                <h1 className="text-2xl font-bold">Liza Street, New York</h1>
            </div>
            </div>
        </div>
    );
};

export default OurAddress;