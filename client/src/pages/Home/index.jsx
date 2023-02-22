import { BlogItem } from "components/BlogItem";
import { useFetch } from "hooks/useFetch";

import { Link } from "react-router-dom";
import "./_blogItem.scss";
import "./styles.scss";

const Home = () => {
    const { data, isLoading, getError } = useFetch(
        "http://localhost:8000/blogs"
    );

    return (
        <div className="home-wrapper">
            <div className="blog-list container">
                {data &&
                    data.map((blog) => (
                        <Link to="">
                            <BlogItem data={blog} />
                        </Link>
                    ))}
                {isLoading && <p>Loading</p>}
                {getError && <p>{getError}</p>}
            </div>
        </div>
    );
};

export { Home };
