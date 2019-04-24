import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export interface AppProps {
}

class Content extends React.Component<AppProps, undefined>{
    render() {
        return (
            <Router>
                <Route path={"XX"} />
            </Router>
        )
    }
}

export default Content;