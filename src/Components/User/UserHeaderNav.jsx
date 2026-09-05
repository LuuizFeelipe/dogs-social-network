import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../Context/User/UserContext';
import FeedSvg from '../../Assets/feed.svg?react';
import EstatisticasSvg from '../../Assets/estatisticas.svg?react';
import AdicionarSvg from '../../Assets/adicionar.svg?react';
import SairSvg from '../../Assets/sair.svg?react';
import styles from './UserHeaderNav.module.css';


const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end><FeedSvg /> {mobile && "Minhas fotos"} </NavLink>
      <NavLink to="/conta/estatisticas"><EstatisticasSvg /> {mobile && "Estatisticas"} </NavLink>
      <NavLink to="/conta/postar" ><AdicionarSvg /> {mobile && "Adicionar Foto"}</NavLink>
      <button onClick={userLogout} ><SairSvg /> {mobile && "Sair"}</button>
    </nav>
  )
}

export default UserHeaderNav
