import { useState } from 'react';
import viteLogo from '/vite.svg';
import LoginCard from './components/LoginCard';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      {/* 줍깅
      <LoginCard /> */}
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
