import React, { Suspense } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import { hot } from "react-hot-loader/root";
import CardButton from "./card-button/CardButton";
import BoardButton from "./board-button/BoardButton";
import ShowSettings from "./show-settings/ShowSettings";

const CardBackSection = React.lazy(() => import("./card-back-section/CardBackSection"));

function PowerupRouter() {
    return (
        <div>
            <Suspense fallback={<div style={{ margin: "6px" }}>Loading...</div>}>
                <Router>
                    <Route path="/card-back-section.html">
                        <CardBackSection />
                    </Route>
                    <Route path="/card-button.html">
                        <CardButton />
                    </Route>
                    <Route path="/board-button.html">
                        <BoardButton />
                    </Route>
                    <Route path="/show-settings.html">
                        <ShowSettings />
                    </Route>
                </Router>
            </Suspense>
        </div>
    );
}

export default hot(PowerupRouter);
