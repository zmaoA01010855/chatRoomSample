import React from 'react';
import AuthContextProvider from './contexts/AuthContext';
import ChoiceContextProvider from './contexts/ChoiceContext';
import LoginPageComponent from './components/LoginPageComponent';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ChoiceContextProvider>
          <LoginPageComponent />
        </ChoiceContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
