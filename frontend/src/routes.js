import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed.js';
import News from './pages/News.js';

function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Feed} />
            <Route path='/New' exact component={News} />
        </Switch>
    )
};

export default Routes;