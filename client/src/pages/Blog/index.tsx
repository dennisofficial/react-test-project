import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "/src/hooks/useFetch";

import { BlogItem } from "/src/components/BlogItem";

import blogMainStyles from "./_blogmain.module.scss";
import blogSideStyles from "./_blogside.module.scss";
import styles from "./styles.module.scss";

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
        <div className={`container ${styles["blog-wrapper"]}`}>
            <div className={styles["blog-main"]}>
                {dataMain && (
                    <BlogItem
                        data={dataMain}
                        styles={blogMainStyles}></BlogItem>
                )}
                {loadingMain && <div>Loading...</div>}
                {errorMain && <div>{errorMain}</div>}
            </div>

            <div></div>

            <div className={styles["blog-side-list"]}>
                {dataList &&
                    dataList.map((blog) => (
                        <Link to={`/blogs/${blog.id}`}>
                            <BlogItem
                                data={blog}
                                key={blog.id}
                                styles={blogSideStyles}></BlogItem>
                        </Link>
                    ))}
                {loadingList && <div>Loading...</div>}
                {errorList && <div>{errorList}</div>}
            </div>
        </div>
    );
};

export { Blog };