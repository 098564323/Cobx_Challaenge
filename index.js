/**
 * @format
 */

import {AppRegistry} from 'react-native';
import DashboardComponent from './src/component/DashboardComponent';
import {name as appName} from './app.json';
//
import React from 'react';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers/APICallerReducers';
//
const store = createStore(reducers,applyMiddleware(thunk));
//
const ApplicationProContainer = ()=>
    <Provider store={store}>
        <DashboardComponent/>
    </Provider>

AppRegistry.registerComponent(appName, () => ApplicationProContainer);
