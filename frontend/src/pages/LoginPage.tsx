import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/footer/Footer';
import LoginForm from '../components/LoginForm';
import styles from '../assets/style/LoginPage.module.css';

const LoginPage: React.FC = () => {
  return (
    <div className={styles.loginPage}>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.sideImage}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/61b34383be76c0f0b7a822e438015cb28277426e6ee32137d9ffefb6803c6ac4?placeholderIfAbsent=true&apiKey=14c95281464f4dc7abbc9d4edef57375" alt="Decorative RedHunter Logo" className={styles.decorativeImage} />
        </section>
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;