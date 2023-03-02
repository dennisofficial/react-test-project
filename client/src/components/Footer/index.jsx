import "./style.scss";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer container">
                <div className="copyright">
                    <span>Dennis Lysenko, {new Date().getFullYear()}</span>
                    <i className="bi bi-c-circle"></i>
                </div>
            </div>
        </div>
    );
};

export { Footer };
