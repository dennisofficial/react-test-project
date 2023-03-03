import { BlogItem } from "/src/components/BlogItem";
import { useFetch } from "/src/hooks/useFetch";

import { Link } from "react-router-dom";

import blogItemStyles from "./_blogItem.module.scss";
import styles from "./styles.module.scss";

const Home = () => {
    const { data, isLoading, getError } = useFetch(
        "http://localhost:4000/blogs"
    );

    return (
        <>
            <div className={`container ${styles["blog-list"]}`}>
                {data &&
                    data.map((blog, key) => (
                        <Link to={`blogs/${blog.id}`} key={key}>
                            <BlogItem data={blog} styles={blogItemStyles} />
                        </Link>
                    ))}
                {isLoading && <p>Loading</p>}
                {getError && <p>{getError}</p>}
            </div>
        </>
    );
};

export { Home };
