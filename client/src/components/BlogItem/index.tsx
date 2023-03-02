const BlogItem = ({ data, styles }) => {
    console.log(styles);
    return (
        <div className={styles["blog-item"]} key={data.id}>
            <div className={styles["header"]}>
                <h2 className={styles["title"]}>{data.title}</h2>
                <span className={styles["author"]}>Author: {data.author}</span>
            </div>
            <p className={styles["content"]}>{data.content}</p>
        </div>
    );
};

export { BlogItem };
