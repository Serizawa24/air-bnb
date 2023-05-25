import styles from './Host.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Host() {
  return ( 
  <div className={cx('wrapper')}>
    Host
  </div>
  );
}

export default Host;