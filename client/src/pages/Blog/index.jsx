import { useFetch } from "hooks/useFetch";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { BlogItem } from "components/BlogItem";

import "./styles.scss";

const Blog = () => {
    const { blogId } = useParams();
    const navigate = useNavigate();

    const {
        data: dataMain,
        isLoading: loadingMain,
        getError: errorMain,
    } = useFetch(`http://localhost:8000/blogs/${blogId}`);

    const {
        data: dataList,
        isLoading: loadingList,
        getError: errorList,
    } = useFetch(`http://localhost:8000/blogs`);

    useEffect(() => {
        if (!blogId) {
            navigate("/");
        }
    }, [blogId, navigate]);

    if (!blogId) {
        return;
    }

    return (
        <div className="blog-wrapper container">
            <div className="blog-main">
                {dataMain && <BlogItem data={dataMain}></BlogItem>}
                {loadingMain && <div>Loading...</div>}
                {errorMain && <div>{errorMain}</div>}
            </div>

            <div></div>

            <div className="blog-side-list">
                {dataList &&
                    dataList.map((blog) => (
                        <Link to={`blogs/${blog.id}`}>
                            <BlogItem data={dataMain} key={blog.id}></BlogItem>
                        </Link>
                    ))}
                {loadingList && <div>Loading...</div>}
                {errorList && <div>{errorList}</div>}
            </div>
        </div>
    );
};

export { Blog };
