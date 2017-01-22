// 入口容器组件（展示组件）
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppleBasket from './AppleBasket';
import todoApp from '../reducers/reducers';

let store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
        <AppleBasket />
    </Provider>,
    document.querySelector('#app'));