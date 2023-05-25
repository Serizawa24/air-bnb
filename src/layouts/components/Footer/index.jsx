import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import Button from '../../../components/Button';
import { GlobalIcon } from '../../../components/Icon';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { ChevronUp } from '../../../components/Icon';
const cx = classNames.bind(styles);
function Footer() {
  const state = {
    language: 'English',
    code:'US',
    currentPayment:'USD',
  }
  return ( 
    <footer className={cx('footer')}>
      <div className={cx('map')}>
        <span className={cx('author')}>
        © 2023 Airbnb, Inc.
        </span>
        <span className={cx('dot')} ></span>
        <Button 
          to='/terms'
          map
        >
          Terms
        </Button>
        <span className={cx('dot')}>
          
        </span>
        <Button 
          to='/terms/privacy'
          map
        >
          Privacy
        </Button>
        <span className={cx('dot')}>
          
        </span>
        <Button 
          to='/sitemap'
          map
        >
          Sitemap
        </Button>
      </div>
      <div className={cx('help')}>
        <Button 
          leftIcon = {<GlobalIcon />}
          help
        >
          {state.language} {`(${state.code})`}
        </Button>

        <Button
          leftIcon = {<FontAwesomeIcon icon={faDollarSign} />}
          help
        >
          {state.currentPayment}
        </Button>
        <Button
          rightIcon = {<ChevronUp/>}
          help
        >
          Support & resources
        </Button>
      </div>
    </footer>
  );
}

export default Footer;