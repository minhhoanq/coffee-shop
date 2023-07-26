import React from 'react';
import "remixicon/fonts/remixicon.css";
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/integration/react";
import  store, { persistor } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer
          theme="light"
          position="top-right"
          autoClose={2000}
          closeOnClick
          pauseOnHover
        />
        <App />
      </PersistGate>
    </Provider>
  //</React.StrictMode>
);
