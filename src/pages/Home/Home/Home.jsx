import About from "../About/About";
import Banner from "../Banner/Banner";
import OurAddress from "../OurAddress/OurAddress";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <OurAddress></OurAddress>
        </div>
    );
};

export default Home;