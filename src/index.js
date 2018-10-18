import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Root from './pages/root/Root'

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
