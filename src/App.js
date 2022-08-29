import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { FirebaseProvider } from './contexts/FirebaseContext';

import { renderRoutes } from './routes';
import { BASENAME } from './config/constant';
import { AlertContext, AlertProvider, AlertType } from './contexts/AlertContext';
import { Alert, Button, Col, Row, Toast } from 'react-bootstrap';

const App = () => {
  // const { message, title, type, setAlert } = useContext(AlertContext) 

  const renderAlert = () => {
    return (
      <AlertContext.Consumer>
        {({ message, title, type, setAlert }) => {
          console.log("🚀 ~ file: App.js ~ line 18 ~ renderAlert ~  message, title, type", message, title, type)

          return (
            <Toast
              onClose={() => setAlert(AlertType.IDE)} show={type !== AlertType.IDE} delay={3000} autohide animation
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                minWidth: 300
              }}
            >
              <Toast.Header
                color='danger'
              >
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">{title}</strong>
                <small>just now</small>
              </Toast.Header>
              <Toast.Body>{message}</Toast.Body>
            </Toast>
          )
        }}
      </AlertContext.Consumer>
    )
  }


  return (
    <React.Fragment>
      <Router basename={BASENAME}>
        <FirebaseProvider>
          <AlertProvider>
            {renderAlert()}
            {renderRoutes()}
          </AlertProvider>
        </FirebaseProvider>
      </Router>
    </React.Fragment>
  );
};

export default App;
