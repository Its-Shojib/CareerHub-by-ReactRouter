import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header.jsx/Header";


const Root = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 my-5">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <div className="max-w-screen-2xl mx-auto mt-5">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;