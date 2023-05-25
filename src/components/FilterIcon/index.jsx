import classNames from "classnames/bind";
import styles from './FilterIcon.module.scss'
import { Link } from 'react-router-dom'
const cx = classNames.bind(styles);

function FilterIcon({data}) {
  return ( 
    <div className={cx('wrapper')}>
      <Link to={data.to} className={cx(
        'icon'
        )}>
        <img className={cx('img')} src={data.icon} alt={data.icon} />
        <span className={cx('name')}>{data.name}</span>
      </Link>
    </div>
  );
}

export default FilterIcon;