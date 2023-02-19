import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";

import { Create } from "pages/Create";
import { Home } from "pages/Home";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export { App };
