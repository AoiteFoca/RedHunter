import logo from '../assets/images/logo.svg';
import '../assets/style/App.css';
import Header from '../components/Header/Header';
import Footer from '../components/footer/Footer';

function About() {
  return (
    <>
      <div className="About">
      <Header />
        <main className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            About
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default About;