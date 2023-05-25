import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)

function MenuHeader({title,onBack}) {


  return ( 
   <header className={cx('header')}>
    <button className={cx('back-btn')} onClick={onBack}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
    <h4 className={cx('title')}>{title}</h4>
   </header>
  );
}

export default MenuHeader;