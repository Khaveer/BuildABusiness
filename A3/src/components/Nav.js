import React from "react";
import { Header } from "semantic-ui-react";

import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Header as="h3">Navigation</Header>
            <ul class="nav-links">
                <Link to="/">
                    <li>Landing Page</li>
                </Link>
                <Link to="/Instructions">
                    <li>Instructions</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
