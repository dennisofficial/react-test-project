import "./style.scss";

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar container">
                <div className="brand">
                    <i className="bi bi-amd"></i>
                    <span>AMD</span>
                </div>
                <div className="search">
                    <i className="bi bi-search"></i>
                    <input
                        type="text"
                        name="query"
                        id="search-bar"
                        placeholder="search..."
                    />
                </div>
                <div className="account">
                    <span>Account</span>
                    <i className="bi bi-person-circle"></i>
                </div>
            </div>
        </div>
    );
};

export { Navbar };
