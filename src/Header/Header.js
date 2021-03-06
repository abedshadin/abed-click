import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {
    const [user]= useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
    return (
        <div className=''>
              <Navbar bg="secondary" expand="lg" className='pt-3'>
  <Container>
    <Link to="home" className='text-light text-decoration-none h2'>Abed Clicker</Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto text-danger ">
        <Link to="/home" className='text-light text-decoration-none me-2'>Home</Link>
        <Link to="/blogs" className='text-light text-decoration-none me-2'>Blogs</Link>
        <Link to="/about" className='text-light text-decoration-none me-2'>About</Link>
        {
            user ? <button onClick={logout}   className='btn btn-danger text-light'>SignOut</button>:   <Link to="/login" className='text-light text-decoration-none me-2'>Login</Link>
        }
      
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;