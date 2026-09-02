import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Dogs from '../Assets/dogs.svg?react';
import { UserContext } from '../Context/User/UserContext';
import React from 'react';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - home">
          <Dogs />
        </Link>
        {data ? (
          <>
            <Link className={styles.login} to="/conta">{data.nome}</Link> 
            <button onClick={userLogout}>Sair</button>
          </>
        ) : (
          <Link className={styles.login} to="/login">Login / Criar</Link>
        )}
      </nav>
    </header>
  )
}

export default Header
