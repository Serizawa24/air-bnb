import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { AirBnB } from '../../../components/Icon';
import Search from '../../../components/Search';
import Menu from '../../../components/Menu';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);
function Header() {
  const navigate = useNavigate();

  return ( 
    <header className={cx('header')}>
      <div className={cx('logo')} onClick={()=>{
         navigate("/");
      }}>
        <AirBnB />
      </div>
      <div className={cx('search')}> 
        <Search />
      </div>
      <div className={cx('menu')}>
        <Menu />
      </div>
    </header>
  );
}

export default Header;