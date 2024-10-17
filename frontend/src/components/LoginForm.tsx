import React from 'react';
import styles from './LoginForm.module.css';

const LoginForm: React.FC = () => {
  return (
    <section className={styles.loginFormSection}>
      <h2 className={styles.formTitle}>Entrar</h2>
      <p className={styles.formDescription}>Digite as suas informações abaixo</p>
      <form className={styles.loginForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.inputLabel}>Email</label>
          <input type="email" id="email" className={styles.formInput} required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.inputLabel}>Senha</label>
          <input type="password" id="password" className={styles.formInput} required />
        </div>
        <div className={styles.formActions}>
          <button type="submit" className={styles.submitButton}>Entrar</button>
          <a href="#" className={styles.forgotPassword}>Esqueceu sua senha?</a>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;