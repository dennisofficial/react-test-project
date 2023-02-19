import { Link } from "react-router-dom";

import { Create } from "pages/Create";
import { Home } from "pages/Home";

import "./_account.scss";
import "./_brand.scss";
import "./_search.scss";
import "./style.scss";

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-header container">
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
