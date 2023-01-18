import React from 'react';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import './styles.scss';

function MainLayout({ children }) {
  return (
    <div className='moovme'>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout;