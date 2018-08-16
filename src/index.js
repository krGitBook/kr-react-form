import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import MRoute from './routes/index';
import { Provider, connect } from "react-redux";
import store from "./store";
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return  <MRoute />;
    }
}

const AppStore = connect(
    state => ({ }),
    {
       
    }
)(App);

ReactDOM.render(
    <Provider store={store}>
        <AppStore />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
