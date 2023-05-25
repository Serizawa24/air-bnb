import classNames from "classnames/bind";
import styles from './Button.module.scss'
import { Link } from 'react-router-dom';
import { forwardRef } from "react";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  onClick,
  leftIcon,
  rightIcon,
  menu,
  map,
  help,
  children,
  disable,
  className,
  ...passProps
},ref) {

  let Comp = 'button';

  const props = {
    onClick,
    ...passProps,
  };

  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  return ( 
    <Comp
        className={cx(`wrapper`, {
          menu,
          map,
          help,
          [className]: className,
        })}
        {...props}
        ref={ref}
      > 
        {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
        <span className={cx('title')}>{children}</span>
        {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
  );
}

export default forwardRef(Button);