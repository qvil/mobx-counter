import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { appState } from './App';

ReactDOM.render(<App store={appState} />, document.getElementById('root'));
registerServiceWorker();
