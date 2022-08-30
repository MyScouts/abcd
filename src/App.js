import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { FirebaseProvider } from './contexts/FirebaseContext';

import { renderRoutes } from './routes';
import { BASENAME } from './config/constant';
import { AlertContext, AlertProvider, AlertType } from './contexts/AlertContext';
import Toast from 'react-bootstrap/Toast';
import { ToastProvider } from 'react-toast-notifications';

const App = () => {
  const renderAlert = () => {
    return (
      <AlertContext.Consumer>
        {({ message, type, setAlert }) => {
          return type !== AlertType.IDE && (
            <Toast
              onClose={() => setAlert(AlertType.IDE)} show={type !== AlertType.IDE} delay={3000} autohide animation
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                minWidth: 300,
                zIndex: 9999
              }}
            >
              <Toast.Header className={`${type === AlertType.ERROR ? 'bg-danger' : (type === AlertType.SUCCESS ? 'bg-success' : 'bg-primary')} text-light`}>
                {/* <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" /> */}
                <strong className="mr-auto">
                  {type === AlertType.ERROR ? "Opps..." : (type === AlertType.SUCCESS ? "Success..." : "Info...")}
                </strong>
                <small>just now</small>
              </Toast.Header>
              <Toast.Body className='bg-light'>{message}</Toast.Body>
            </Toast>
          )
        }}
      </AlertContext.Consumer>
    )
  }

  return (
    <React.Fragment>
      <ToastProvider autoDismiss={true} newestOnTop={true} autoDismissTimeout={2000}>
        <Router basename={BASENAME}>
          <FirebaseProvider>
            <AlertProvider>
              {renderAlert()}
              {renderRoutes()}
            </AlertProvider>
          </FirebaseProvider>
        </Router>
      </ToastProvider>
    </React.Fragment>
  );
};

export default App;
