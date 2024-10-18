import logo from '../assets/images/logo.svg';
import '../assets/style/App.css';
import Header from '../components/Header/Header';

function About() {
  return (
    <>
      <Header />
      
      <div className="About">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            About
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        </header>
      </div>
    </>
  );
}

export default About;