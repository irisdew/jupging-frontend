import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginCard from './components/LoginCard';
import Content from './pages/HomePage';
import Layout from './Layout';
import SignupCard from './components/SignupCard';

import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';
import { User, useUser } from './hooks/useUser';
import { useLocalStorage } from './hooks/useLocalStorage';
import CreateEventForm from './components/CreateEventForm';

function App() {
  const { getItem, setItem } = useLocalStorage();

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const user = getItem('user');
    if (user) {
      setItem('user', JSON.parse(user));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Content />} />
          <Route path="/login" element={<LoginCard />} />
          <Route path="/signup" element={<SignupCard />} />
          <Route path="/create" element={<CreateEventForm />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
