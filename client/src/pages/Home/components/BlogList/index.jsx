import { useFetch } from "hooks/useFetch";

import { Link } from "react-router-dom";
import "./styles.scss";

const BlogList = () => {
    const { data, isLoading, getError } = useFetch(
        "http://localhost:8000/blogs"
    );

    return (
        <div className="bloglist-wrapper">
            {data &&
                data.map((blog) => (
                    <Link to={`blogs/${blog.id}`}>
                        <div className="blog-preview" key={blog.id}>
                            <div className="header">
                                <h2 className="title">{blog.title}</h2>
                                <span className="author">
                                    Author: {blog.author}
                                </span>
                            </div>
                            <p className="content">{blog.content}</p>
                        </div>
                    </Link>
                ))}
            {isLoading && <p>Loading</p>}
            {getError && <p>{getError}</p>}
        </div>
    );
};

export { BlogList };
