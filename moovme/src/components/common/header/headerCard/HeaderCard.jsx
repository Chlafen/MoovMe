import React from 'react'
import './styles.scss'
import {MdLocalPhone, MdEmail} from 'react-icons/md'
import {AiFillClockCircle} from 'react-icons/ai'

export default function HeaderCard({
  icon,
  title,
  content
}) {
  switch (icon) {
    case 'phone':
      icon = <MdLocalPhone/>
      break;
    case 'email':
      icon = <MdEmail/>
      break;
    case 'clock':
      icon = <AiFillClockCircle/>
      break;
    default:
      icon = <MdLocalPhone/>
      break;
  }

  return (
    <div className='header-card'>
      <div className='header-card__icon'>
        {icon}
      </div>
      <div className='header-card__text'>
        <div className='header-card__text__title'>
          <p>{title}</p>
        </div>
        <div className='header-card__text__content'>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}
