import { NavLink } from "react-router-dom";

import accountStyles from "./_account.module.scss";
import brandStyles from "./_brand.module.scss";
import searchStyles from "./_search.module.scss";
import styles from "./style.module.scss";

const Navbar = () => {
    return (
        <div className={styles["navbar-wrapper"]}>
            <div className={`container ${styles["navbar-header"]}`}>
                <div className={brandStyles["brand"]}>
                    <i className="bi bi-amd"></i>
                    <span>AMD</span>
                </div>
                <div className={searchStyles["search"]}>
                    <i className={`bi bi-search ${searchStyles["i"]}`}></i>
                    <input
                        className={searchStyles["input"]}
                        type="text"
                        name="query"
                        id="search-bar"
                        placeholder="search..."
                    />
                </div>
                <div className={accountStyles["account"]}>
                    <span>Account</span>
                    <i
                        className={`bi bi-person-circle ${accountStyles["i"]}`}></i>
                </div>
            </div>
            <div
                className={`container-fluid ${styles["navbar-navigate-wrapper"]}`}>
                <div className={styles["navbar-navigate"]}>
                    <NavLink className={styles["link"]} to="/">
                        Home Page
                    </NavLink>
                    <NavLink className={styles["link"]} to="/create">
                        Add Blog
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export { Navbar };
