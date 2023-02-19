import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";
import { Home } from "pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export { App };
