import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Suporte',
      content: [
        'R. dos Imigrantes, 500 - Rau, Jaraguá do Sul - SC, 89254-430',
        'suporte@redhunter.com',
        '0800 600 0005'
      ]
    },
    {
      title: 'Conta',
      content: ['Minha conta', 'Login / Registro', 'Profissionais', 'Empresas']
    },
    {
      title: 'Links rápidos',
      content: ['Políticas internas', 'Termos de uso', 'FAQ', 'Contato']
    }
  ];

  const socialIcons = [
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/987783492924c7d83bb7640c604454ba684b5cc1ec35342bd147e76c86f7708b?placeholderIfAbsent=true&apiKey=14c95281464f4dc7abbc9d4edef57375', alt: 'Facebook' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ac492c7bc997263fbd4a0eb3af025e8598de52223278f0b99bdb58dcf0cb7638?placeholderIfAbsent=true&apiKey=14c95281464f4dc7abbc9d4edef57375', alt: 'Twitter' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2cd7d7bc40954a7ba1a77b434e475ffa4503e408fc2a4aa37d93843ac7c22688?placeholderIfAbsent=true&apiKey=14c95281464f4dc7abbc9d4edef57375', alt: 'Instagram' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7c7336403425dc198bb233acec00354eeb41646a40823f3f5097a2599289ceb6?placeholderIfAbsent=true&apiKey=14c95281464f4dc7abbc9d4edef57375', alt: 'LinkedIn' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <section className={styles.subscribeSection}>
          <h2 className={styles.footerLogo}>RedHunter</h2>
          <h3 className={styles.subscribeTitle}>Inscreva-se</h3>
          <p className={styles.subscribeText}>Encontre a sua melhor versão</p>
          <form className={styles.subscribeForm}>
            <input
              type="email"
              id="emailSubscribe"
              placeholder="Digite seu email"
              className={styles.subscribeInput}
              required
            />
            <button type="submit" className={styles.subscribeButton}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b2d5e160cc0a5a1dd59af4ed711348c7558740eff3cbe63f4b8bedea61bd15b?placeholderIfAbsent=true&apiKey=14c95281464f4dc7abbc9d4edef57375" alt="Enviar" className={styles.sendIcon} />
            </button>
          </form>
        </section>

        {footerSections.map((section, index) => (
          <section key={index} className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>{section.title}</h3>
            <ul className={styles.sectionList}>
              {section.content.map((item, itemIndex) => (
                <li key={itemIndex} className={styles.sectionItem}>{item}</li>
              ))}
            </ul>
          </section>
        ))}

        <section className={styles.socialSection}>
          <h3 className={styles.socialTitle}>Siga nossas redes</h3>
          <div className={styles.socialIcons}>
            {socialIcons.map((icon, index) => (
              <a href="#" key={index} className={styles.socialLink}>
                <img src={icon.src} alt={icon.alt} className={styles.socialIcon} />
              </a>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;