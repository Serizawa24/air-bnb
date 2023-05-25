import classNames from "classnames/bind";
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)
function Search() {
  return ( 
    <div className={cx('wrapper')}>
      <input className={cx('search')} placeholder='Take a trip! '/>
      <div className={cx('icon')}>
        <FontAwesomeIcon  icon={faMagnifyingGlass} />    
      </div>
    </div>
   );
}

export default Search;