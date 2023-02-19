import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "pages/home";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
