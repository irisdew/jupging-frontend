import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginCard from './components/LoginCard';
import Content from './components/Content';
import Layout from './Layout';
import SignupCard from './components/SignupCard';

import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';

function App() {
  const { user, login, logout } = useAuth();

  return (
    <AuthContext.Provider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Content />} />
        </Route>
        <Route path="/login" element={<LoginCard />} />
        <Route path="/signup" element={<SignupCard />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
