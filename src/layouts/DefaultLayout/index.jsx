import Header from '../components/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {

  return (
    <div className={cx('wrapper')}>
      <Header />
      <Filter />
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}


export default DefaultLayout;