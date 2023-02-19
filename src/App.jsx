import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Create } from "pages/Create";
import { Home } from "pages/Home";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </Router>
    );
};

export { App };
