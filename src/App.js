import React, { useState } from 'react';
import subscribeToTimer from './api';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AuthContextProvider from './contexts/AuthContext';
import ChoiceContextProvider from './contexts/ChoiceContext';
import LoginPageComponent from './components/login/LoginPageComponent';
import ChatRoomUI from './components/room/ChatRoomUI';
import Navbar from './components/Navbar';
import './css/app.css';

function App() {
  // const [timestamp, setTimestamp] = useState("undefined");

  // subscribeToTimer(10000, (err, timestamp) => {
  //   setTimestamp({
  //     timestamp
  //   });
  //   console.log(timestamp);
  // });



  return (
    <Router>
      <div className="App">
        <AuthContextProvider>
          <Navbar />
          <ChoiceContextProvider>
            <Switch>
              <Router path="/chatroom">
                <ChatRoomUI />
              </Router>
              <Router path="/">
                <LoginPageComponent />
              </Router>
            </Switch>
          </ChoiceContextProvider>
        </AuthContextProvider>
      </div>
    </Router>
  );
}

export default App;
