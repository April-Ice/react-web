import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'
import {
    App,
    NotFoundPage,
    April,
    Welcome,
    Books,
} from './containers'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Welcome} />

        <Route path="april" component={April}>
            <IndexRoute component={Books} />
            <Route path='books' component={Books} />
        </Route>

        <Route path="*" component={NotFoundPage} />
    </Route>
);
