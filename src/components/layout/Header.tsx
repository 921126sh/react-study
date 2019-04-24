import * as React from "react";
import { NavLink } from 'react-router-dom';

export interface AppProps {
}

class Header extends React.Component<AppProps, undefined>{
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink exact to="/con/con2">Home</NavLink></li>
                </ul>
                <hr />
            </div>
        )
    }
}

export default Header;