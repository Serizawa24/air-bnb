import classNames from "classnames/bind";
import styles from './Tour.module.scss';
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar} from "@fortawesome/free-solid-svg-icons";
import { HeartIcon } from "../Icon";
const cx = classNames.bind(styles);

function Tour({data}) {
  return ( 
    <div className={cx('wrapper')}>
      <Link target="_blank" to ={`/rooms/:${data.id}` }>
        
        <div className={cx('image')} style={{
          backgroundImage : `url(${data.images[0]})`
        }}>
        <span className={cx('heart')}>
          <HeartIcon />
        </span>
        </div>

        <div className={cx('body')}>
          <div className={cx('info')}>
            <div className={cx('location')}>{data.location}, {data.country}</div>
            <div className={cx('name')}>{data.name}</div>
            <div className={cx('time')}>{data.time}</div>
            <div className={cx('price')}>
              <span>
              ${data.price}
              </span>
              <span className={cx('price-des')}>
                night
              </span>
            </div>
          </div>
          <div className={cx('star')}>
          <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />{data.star}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Tour;