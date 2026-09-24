import styles from './Footer.module.css';
import DogsImg from '../Assets/dogs-footer.svg?react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <DogsImg />
      <p>Dogs. Alguns direitos reservados</p>
    </footer>
  )
}

export default Footer
