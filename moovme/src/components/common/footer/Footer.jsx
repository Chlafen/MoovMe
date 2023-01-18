import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';
import logo from '../assets/logo.svg';
import {MdLocalPhone, MdEmail} from 'react-icons/md';
import {IoMdPin} from 'react-icons/io';


const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='footer__contact'>
          <p className="footer__contact__title">
            Contact
          </p>
          <p className="footer__contact__content">
            <MdEmail className="footer__contact__content__icon" />
            contact@mouvme.fr
          </p>
          <p className="footer__contact__content">
            <MdLocalPhone className="footer__contact__content__icon" />
            (123) 456-7890
          </p>
          <p className="footer__contact__content">
            <MdLocalPhone className="footer__contact__content__icon" />
            (123) 456-7890
          </p>
        </div>

        <Link className='footer__logo' to='/'>
          <img src={logo} alt='logo' />
          <span>MouvMe</span>
        </Link>

        <div className='footer__operatingzones'>
          <p className="footer__operatingzones__title">
            Zones d'operations
          </p>
          <p className="footer__operatingzones__content">
            France, Paris
            <IoMdPin className="footer__operatingzones__content__icon" />
          </p>
          <p className="footer__operatingzones__content">
            Belgique, Bruxelles
            <IoMdPin className="footer__operatingzones__content__icon" />
          </p>
          <p className="footer__operatingzones__content">
            Suisse, Genève
            <IoMdPin className="footer__operatingzones__content__icon" />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
