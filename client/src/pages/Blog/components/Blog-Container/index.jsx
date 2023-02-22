import { useFetch } from "hooks/useFetch";

import "./styles.scss";

const BlogContainer = ({ data }) => {
    const {
        data: blogList,
        isLoading,
        getError,
    } = useFetch("http://localhost:8000/blogs");

    console.log(blogList);

    return (
        <div className="blog-container-wrapper container">
            <div className="blog">
                <h1 className="title">{data.title}</h1>
                <span className="author">Author: {data.author}</span>
            </div>
            <div></div>
            <div className="blog-list">
                <h1 className="title">{data.title}</h1>
                <span className="author">Author: {data.author}</span>
            </div>
        </div>
    );
};

export default BlogContainer;
