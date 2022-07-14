import React, { createRoot }  from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css';
import {AppWrapper} from './components/context'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AppWrapper>
    <App />
  </AppWrapper>
)
