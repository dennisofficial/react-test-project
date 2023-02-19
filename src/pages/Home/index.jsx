import { BlogList } from "./components/BlogList";

import "./styles.scss";

const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="container">
                <BlogList />
            </div>
        </div>
    );
};

export { Home };
