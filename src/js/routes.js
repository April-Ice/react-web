import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'
import {
    App,
    NotFoundPage,
    Welcome,
    April,
    Intro,
    Books,
    CommonMenu,
    CommonText,
    EchartsList,
    EchartMapAni,
    BoxBorder
} from './containers'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Welcome} />

        <Route path="april" component={April}>
            <IndexRoute component={EchartsList} />
            <Route path='intro' component={Intro} />
            <Route path='books' component={Books} />
            <Route path='common' component={CommonMenu} />
            <Route path='commonText' component={CommonText} />
            <Route path='echarts' component={EchartsList} />
            <Route path='mapAni' component={EchartMapAni} />
            <Route path='boxBorder' component={BoxBorder} />
        </Route>

        <Route path="*" component={NotFoundPage} />
    </Route>
);
