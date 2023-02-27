import { BlogItem } from "components/BlogItem";
import { useFetch } from "hooks/useFetch";

import { Link } from "react-router-dom";

import blogItemStyles from "./_blogItem.module.scss";
import styles from "./styles.module.scss";

const Home = () => {
    const { data, isLoading, getError } = useFetch(
        "http://localhost:8000/blogs"
    );

    return (
        <>
            <div className={`container ${styles["blog-list"]}`}>
                {data &&
                    data.map((blog) => (
                        <Link to={`blogs/${blog.id}`}>
                            <BlogItem
                                data={blog}
                                key={blog.id}
                                styles={blogItemStyles}
                            />
                        </Link>
                    ))}
                {isLoading && <p>Loading</p>}
                {getError && <p>{getError}</p>}
            </div>
        </>
    );
};

export { Home };
