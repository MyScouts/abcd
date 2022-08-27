import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { FirebaseProvider } from './contexts/FirebaseContext';

import { renderRoutes } from './routes';
import { BASENAME } from './config/constant';
import { AlertContext, AlertProvider, AlertType } from './contexts/AlertContext';
import { Alert, Button, Col, Row, Toast } from 'react-bootstrap';

const App = () => {
  const { message, title, type } = useContext(AlertContext)
  console.log("🚀 ~ file: App.js ~ line 13 ~ App ~ type", type)
  const [show, setShow] = useState(true);

  useEffect(() => {
    console.log("🚀 ~ file: App.js ~ line 13 ~ App ~ show", show)
  }, [type])


  return (
    <React.Fragment>
      <Router basename={BASENAME}>
        <FirebaseProvider>
          <AlertProvider>

            <AlertContext.Consumer>
              {({ message, title, type }) => (
         
        )}
            </AlertContext.Consumer>

            <Toast
              onClose={() => setShow(false)} show={type !== AlertType.IDE} delay={3000} autohide
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
              }}
            >
              <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Bootstrap</strong>
                <small>just now</small>
              </Toast.Header>
              <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
            </Toast>

            {renderRoutes()}
          </AlertProvider>
        </FirebaseProvider>
      </Router>
    </React.Fragment>
  );
};

export default App;
