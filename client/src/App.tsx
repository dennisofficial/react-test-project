import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer } from "/src/components/Footer";
import { Navbar } from "/src/components/Navbar";

import { Blog } from "/src/pages/Blog";
import { Create } from "/src/pages/Create";
import { Home } from "/src/pages/Home";

import "./styles/global.scss";
import "./styles/models.scss";
import "./styles/normalize.css";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/blogs" element={<Blog />}>
                    <Route path=":blogId" element={<Blog />} />
                </Route>
            </Routes>
            <Footer />
        </Router>
    );
};

export { App };
