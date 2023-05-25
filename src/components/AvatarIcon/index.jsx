import classNames from "classnames/bind";
import styles from './AvatarIcon.module.scss'
import reducer,{ initState } from "../../reduce/reducer";
import { useReducer } from "react";


const cx = classNames.bind(styles);
function AvatarIcon() {
  const [state,dispatch] = useReducer(reducer,initState)
  return ( 
    <div className={cx('wrapper')} style={{
      backgroundImage: `url('http://127.0.0.1:1338/assets/${state.user.picturePath}')`
      
    }}>

    </div>
   );
}

export default AvatarIcon;