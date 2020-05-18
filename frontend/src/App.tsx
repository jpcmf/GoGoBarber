import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

import AppProvider from './context';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
      {/* <SignUp /> */}
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
