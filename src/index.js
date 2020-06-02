import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <StrictMode>
    <div className="ui container">
      <App />
    </div>
  </StrictMode>,
  document.getElementById('root')
);