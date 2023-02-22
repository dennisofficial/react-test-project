import { useFetch } from "hooks/useFetch";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Blog = () => {
    const { blogId } = useParams();
    const navigate = useNavigate();

    const { data, isLoading, getError } = useFetch(
        `http://localhost:8000/blogs/${blogId}`
    );

    useEffect(() => {
        if (!blogId) {
            navigate("/");
        }
    }, [blogId, navigate]);

    if (!blogId) {
        return;
    }

    return (
        <div className="blog-wrapper">
            {data && (
                <div className="blog container">
                    <h1>{data.title}</h1>
                </div>
            )}
            {isLoading && <div>Loading...</div>}
            {getError && <div>{getError}</div>}
        </div>
    );
};

export { Blog };
