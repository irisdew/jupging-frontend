import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import viteLogo from '/vite.svg';
import LoginCard from './components/LoginCard';
import Content from './components/Content';
import Layout from './Layout';
import SignupCard from './components/SignupCard';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Content />} />
      </Route>
      <Route path="/login" element={<LoginCard />} />
      <Route path="/signup" element={<SignupCard />} />
    </Routes>
  );
}

export default App;
