import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {TrelloProvider} from '@optro/ui-react';

const CardBackSection = React.lazy(() => import('./card-back-section/CardBackSection'));
const CardButton = React.lazy(() => import('./card-button/CardButton'));
const BoardButton = React.lazy(() => import ('./board-button/BoardButton'));
const ShowAuthorization = React.lazy(() => import('./show-authorization/ShowAuthorization'));
const ShowSettings = React.lazy(() => import('./show-settings/ShowSettings'));
const AttachmentSection = React.lazy(() => import('./attachment-sections/AttachmentSection'));

const t = window.TrelloPowerUp.iframe();

function PowerupRouter() {
    return (
        <div>
            <TrelloProvider t={t}>
                <Suspense fallback={<div style={{ margin: '6px' }}>Loading...</div>}>
                    <Router basename={process.env.CONTEXT_PATH || undefined}>
                        <Route path="/attachment-section.html">
                            <AttachmentSection />
                        </Route>
                        <Route path="/board-button.html">
                            <BoardButton />
                        </Route>
                        <Route path="/card-back-section.html">
                            <CardBackSection />
                        </Route>
                        <Route path="/card-button.html">
                            <CardButton />
                        </Route>
                        <Route path="/show-authorization.html">
                            <ShowAuthorization />
                        </Route>
                        <Route path="/show-settings.html">
                            <ShowSettings />
                        </Route>
                    </Router>
                </Suspense>
            </TrelloProvider>
        </div>
    );
    // EOF
}

export default PowerupRouter;
