import React from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/style/App.css';
import Header from '../components/Header/Header';
import Footer from '../components/footer/Footer';

function App() {
  return (
    <>
    <div className="App">
    <Header />
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </main>
      <Footer />
    </div>
    </>
  );
}

export default App;