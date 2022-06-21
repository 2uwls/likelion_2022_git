import React from 'react';
import {Link,Outlet, useNavigate} from "react-router-dom";
import { URL_PATH_HOME, URL_PATH_MOVIES } from '../lib/path';
const Menubar = () => {
    const navigate = useNavigate();
    const goHome = () => {
      navigate("/");
    };

    return (
        <div>
            <ul>
                <li>
                    <Link to ={URL_PATH_HOME}>Home</Link>
                    </li>
                <li>
                    <Link to={URL_PATH_MOVIES}>Movies</Link>
                    </li>
            </ul>
            
            <Outlet/>
        </div>
    );
};

export default Menubar;