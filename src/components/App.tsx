import * as React from "react";
import "./../assets/scss/App.scss";
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './layout/Header';
import Content from './layout/Content';
import routes from '../route';
import Con2 from "./con/Con2";

import Contact from "./contact/Contact";
import ContactInfo from "./contact/ContactInfo";


{/* TODO 이미지 추가방법 숙지 할때까지 유지 */ }
// const reactLogo = require("./../assets/img/react_logo.svg");

export interface AppProps {
}

class App extends React.Component<AppProps, undefined> {
    componentDidMount() {
        console.log('I was triggered during componentDidMount');
        console.log("route:::", routes)
    }

    render() {
        return (
            <div className="container">
                <Contact />



                {/* <Header />
                <BrowserRouter>
                    <Route path="/con2" component={Con2} />
                </BrowserRouter> */}
                {/* {routes.map((route, idx) => {
                        console.log(route);
                        console.log(idx);
                        return route.component ? (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                    <route.component {...props} />
                                )} />
                        ) : (null);
                    })}
                    <Redirect from="/" to="/dashboard" /> */}
                {/* TODO 이미지 추가방법 숙지 할때까지 유지 */}
                {/* <img src={reactLogo} height="480"/> */}
            </div>

        );
    }
}

export default App;