import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import Button from "../Button";
import { UserIcon, MenuIcon, GlobalIcon } from "../Icon";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import MenuItem from "../Popper/MenuItem";
import reducer,{initState} from "../../reduce/reducer";
import { useReducer } from "react";
import { setLogout } from "../../reduce/actions";
import AvatarIcon from "../AvatarIcon";
const cx = classNames.bind(styles);

function Menu() {
  const [state,dispatch] = useReducer(reducer,initState);
  const MENU_ITEMS = [
    {
      icon: null,
      title: 'Sign up',
      to:'/register',
      state:'active',
    },
    {
      icon: null,
      title: 'Login',
      to:'/login',
    },
    {
      icon: null,
      title: 'Airbnb your home',
      to:'/host/homes',

    },
    {
      icon: null,
      title: 'Host an Experiences',
      to:'host/experiences',
    },
    {
      icon: null,
      title: 'Help',
      to:'/help',
    },
    {
      icon: null,
      title: 'Language',
      type:'foot',
      children: {
        title: 'Language',
        data: [
          {
            type: 'Language',
            code: 'en',
            title: 'English',
            state:'active',
          },
          {
            type: 'Language',
            code: 'vi',
            title: 'Vietnamese',
          },
          {
            type: 'Language',
            code: 'jp',
            title: 'Japanese',
          },
        ],
      },
    },
  ]
  const USER_ITEMS = [
    {
      icon: null,
      title: 'Airbnb your home',
      to:'/host/homes',

    },
    {
      icon: null,
      title: 'Host an Experiences',
      to:'host/experiences',
    },
    {
      icon: null,
      title: 'Help',
      to:'/help',
    },
    {
      icon: null,
      title: 'Language',
      type:'foot',
      children: {
        title: 'Language',
        data: [
          {
            type: 'Language',
            code: 'en',
            title: 'English',
            state:'active',
          },
          {
            type: 'Language',
            code: 'vi',
            title: 'Vietnamese',
          },
          {
            type: 'Language',
            code: 'jp',
            title: 'Japanese',
          },
        ],
      },
    },
    {
      icon: null,
      title: 'Logout',
      onClick: function () {
        dispatch(setLogout())
        window.location.href = '/';
      },
      
    }
  ]
  const handleMenuChange = (menuItem)=>{
    console.log(menuItem);
  }
  return (
    <div className={cx("wrapper")}>
      
      <Tippy
        content="Host"
        placement="bottom"
      >
        <Button className={cx("host")}>Airbnb your home</Button>
      </Tippy>
      <Tippy
        content="Language"
      >
        <Button className={cx("normal")} leftIcon={<GlobalIcon />} />
      </Tippy>

      <MenuItem
        items={state.user === null ? MENU_ITEMS : USER_ITEMS}
        onChange = {handleMenuChange}
      >
        <Button
          className={cx("menu")}
          leftIcon={<MenuIcon />}
          rightIcon={state.user === null ?<UserIcon />:<AvatarIcon />}
        />
      </MenuItem>
    </div>
  );
}

export default Menu;
