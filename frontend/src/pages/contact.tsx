import logo from '../assets/images/logo.svg';
import '../assets/style/App.css';
import Header from '../components/Header/Header';

function Contact() {
  return (
    <>
      <Header />
      
      <div className="contact">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Contact
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        </header>
      </div>
    </>
  );
}

export default Contact;