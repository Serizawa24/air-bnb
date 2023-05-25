import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Content from '../../layouts/components/Content';
const cx = classNames.bind(styles);
function Home() {



  return ( 
    <div className={cx('wrapper')} >
      <Content />
    </div>
  );
}

export default Home;