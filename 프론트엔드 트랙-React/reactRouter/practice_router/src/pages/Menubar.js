import React from 'react';
import {Link,Outlet, useNavigate} from "react-router-dom";
const Menubar = () => {
    const navigate = useNavigate();
    const goHome = () => {
      navigate("/");
    };

    return (
        <div>
            <ul>
                <li>
                    <Link to >Home</Link>
                    </li>
                <li>
                    <Link to="/Movies">Movies</Link>
                    </li>
            </ul>
            
            <Outlet/>
        </div>
    );
};

export default Menubar;