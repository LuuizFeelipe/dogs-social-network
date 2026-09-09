import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../Context/User/UserContext';
import FeedSvg from '../../Assets/feed.svg?react';
import EstatisticasSvg from '../../Assets/estatisticas.svg?react';
import AdicionarSvg from '../../Assets/adicionar.svg?react';
import SairSvg from '../../Assets/sair.svg?react';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';


const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <>
    {mobile && <button aria-label="menu" className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive} `} onClick={() => setMobileMenu(!mobileMenu)} ></button>}

    <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
      <NavLink onClick={() => setMobileMenu(false)} to="/conta" end><FeedSvg /> {mobile && "Minhas fotos"} </NavLink>
      <NavLink onClick={() => setMobileMenu(false)} to="/conta/estatisticas"><EstatisticasSvg /> {mobile && "Estatisticas"} </NavLink>
      <NavLink onClick={() => setMobileMenu(false)} to="/conta/postar" ><AdicionarSvg /> {mobile && "Adicionar Foto"}</NavLink>
      <button onClick={userLogout} ><SairSvg /> {mobile && "Sair"}</button>
    </nav>
    </>
  )
}

export default UserHeaderNav
