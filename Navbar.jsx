import React from "react";
import {Link} from "react-router-dom";
export default function Navbar()
{
    return(
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/java'>Java</Link>
            </li>
            <li>
                <Link to='/python'>Python</Link>
            </li>
            <li>
                <Link to='/sql'>Sql</Link>
            </li>
        </ul>
    );
}
