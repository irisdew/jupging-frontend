import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { Container } from '@chakra-ui/react';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Layout() {
  const user = useContext(AuthContext);
  const isLogined: Boolean = user ? true : false;

  return (
    <Container maxW={'8xl'} p={0}>
      <Header isLogined={isLogined} />
      <Outlet />
      <Footer />
    </Container>
  );
}
