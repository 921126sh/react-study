import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./components/App";

const rootEl = document.getElementById("root");

render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootEl
);

// Hot Module Replacement API
// 소스변경시 페이지 리다이렉트가 아닌 변경 부분만 교체한다.
declare let module: { hot: any };

if (module.hot) {
    module.hot.accept("./components/App", () => {
        const NewApp = require("./components/App").default;

        render(
            <AppContainer>
                <NewApp />
            </AppContainer>,
            rootEl
        );
    });
}
