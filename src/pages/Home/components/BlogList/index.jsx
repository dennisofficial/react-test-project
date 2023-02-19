import { useFetch } from "hooks/useFetch";

import "./styles.scss";

const BlogList = () => {
    const { data, isLoading, getError } = useFetch(
        "http://localhost:8000/blogs"
    );

    return (
        <div className="bloglist-wrapper">
            {data &&
                data.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <span>{blog.author}</span>
                    </div>
                ))}
            {isLoading && <p>Loading</p>}
            {getError && <p>{getError}</p>}
        </div>
    );
};

export { BlogList };
