import { BlogList } from "components/BlogList";
import { useFetch } from "hooks/useFetch";

import { Link } from "react-router-dom";
import "./styles.scss";

const Home = () => {
    const { data, isLoading, getError } = useFetch(
        "http://localhost:8000/blogs"
    );

    return (
        <div className="home-wrapper">
            <div className="container">
                {data &&
                    data.map((blog) => {
                        <Link to="">
                            <BlogList data={data} />
                        </Link>;
                    })}
                {isLoading && <p>Loading</p>}
                {getError && <p>{getError}</p>}
            </div>
        </div>
    );
};

export { Home };
