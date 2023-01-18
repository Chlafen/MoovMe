import React from 'react';
import './styles.scss';
import {AiFillPhone, AiFillMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import HeaderCard from './headerCard/HeaderCard';


const Header = () => {
  return (
    <header>
      <div className='header'>
        <div className='header__logo'>
          <Link to='/'>
            <img src={Logo} alt='logo' />
            <span>MouvMe</span>
          </Link>
        </div>
        <div className='header__contact'>
          <HeaderCard icon='phone' title='Appeler Nous' content='(123) 456-7890' />
          <HeaderCard icon='email' title='Envoyer un Mail' content='contact@mouvme.fr' />
          <HeaderCard icon='clock' title='Horaires de Service' content='Lun - Dim: 24/24' />
          
        </div>
      </div>
      <nav>
        <ul>
          <li>
              <Link to='/'>Acceuil</Link>
          </li>
          <li>
              <Link to='/'>Contact</Link>
          </li>
          <li>
              <Link to='/'>Services</Link>
          </li>
          <li>
              <Link to='/'>Tarifs</Link>
          </li>
          <li>
              <Link to='/'>Calcul Volume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;