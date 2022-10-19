import { Box } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Box className="bgcolor">
      <App />
      </Box>
    </Provider>
  </React.StrictMode>
);
