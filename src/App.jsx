import React, { useState, useEffect } from 'react';
import fire from './firebase/config'
import Login from './login';
import './App.css';
import Search from './search';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import About from './about';
import Folder1 from './folders/folder1';
import Folder2 from './folders/folder2';
import Folder3 from './folders/folder3';

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
      fire.auth().signInWithEmailAndPassword(email,password).catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;

        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire.auth().createUserWithEmailAndPassword(email,password).catch((err) => {
      switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;

      }
    });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };




  useEffect(() => {
    function authListener() {
      fire.auth().onAuthStateChanged((user) => {
        if(user){
          clearInputs();
          setUser(user);
        } else {
          setUser("");
        }
     });
    };
    authListener();
  }, []);


   
  return (
    <div className="App">

     
      {user ? (
        <div>
        <header>
        <button className='logout' onClick={handleLogout}>log out</button>
          <ul className='list'>
            <li><a className="hrefs" href="/">Home page</a></li>
            <li><a className="hrefs" href="/search">search</a></li>
            <li><a className="hrefs" href="/about">About</a></li>
          </ul>
          <ul className='folders'>
            <li><a className='folderlist' href="/folder1">folder1</a></li>
            <li><a className='folderlist' href="/folder2">folder2</a></li>
            <li><a className='folderlist' href="/folder3">folder3</a></li>
          </ul>

        </header>
        <Routes>
          <Route path='/' element={<Home handleLogout={handleLogout}/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/folder1' element={<Folder1/>}/>
          <Route path='/folder2' element={<Folder2/>}/>
          <Route path='/folder3' element={<Folder3/>}/>
        </Routes>

        </div>
      ) : ( <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignup={handleSignup} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError}/>)}
  
     
      
    </div>
  );
}

export default App;