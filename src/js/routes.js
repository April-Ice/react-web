import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'
import {
    App,
    NotFoundPage,
    Welcome,
    April,
    Intro,
    Books,
} from './containers'

export default (
    <Route path="/" component={App}>
        {/* <IndexRoute component={Welcome} /> */}
        <IndexRoute component={April} />

        <Route path="april" component={April}>
            <IndexRoute component={Intro} />
            {/* <Route path='intro' component={Intro} /> */}
            <Route path='books' component={Books} />
        </Route>

        <Route path="*" component={NotFoundPage} />
    </Route>
);
