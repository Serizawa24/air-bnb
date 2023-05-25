import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '../../Button';
const cx = classNames.bind(styles)
function MenuItems({data,onClick}) {
  return ( 
    <Button to={data.to} onClick={data.onClick || onClick} className={cx('menu-list',data.state)}>{data.title}</Button>
  );
}

export default MenuItems;