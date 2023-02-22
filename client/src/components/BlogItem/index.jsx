const BlogItem = ({ data }) => {
    return (
        <div className="blog-preview" key={data.id}>
            <div className="header">
                <h2 className="title">{data.title}</h2>
                <span className="author">Author: {data.author}</span>
            </div>
            <p className="content">{data.content}</p>
        </div>
    );
};

export { BlogItem };
