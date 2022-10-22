import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainHeader from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Footer from "../components/Footer"

const RouteList = () => {
    return(
        <>
            <BrowserRouter>
                <header>
                    <MainHeader />
                </header>

                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>

                <footer>
                    <Footer />
                </footer>
            </BrowserRouter>
        </>
    );
};

export default RouteList;