// import React, { Suspense } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';

// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
// import './i18';
// import { CircularProgress } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter
    // basename="/Ekopolis"
    >
      {/* <Suspense fallback={<CircularProgress />}> */}
      <App />
      {/* </Suspense> */}
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
);
