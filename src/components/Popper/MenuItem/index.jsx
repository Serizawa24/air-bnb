import TippyHeadless from '@tippyjs/react/headless'
import { useState } from 'react';
import { Wrapper as PopperWrapper } from '..'
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import MenuItems from './MenuItems';
import MenuHeader from './Header';
const cx = classNames.bind(styles)

function MenuItem({children,items=[],onChange}) {
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);


  const [history,setHistory] = useState([{data:items}])
  const current = history[history.length - 1]

  const renderItems = () => {
    return current.data.map((item,index) => {
      const isParrent = !!item.children;
      return <MenuItems key = {index} data = {item} onClick={()=>{
        if (isParrent) {
          setHistory(prev => [...prev,item.children] )
        } else {
          onChange(item)
        }
      }} />
    }
    )
  }

  return ( 
    <TippyHeadless
      visible={visible}
      onClickOutside={hide}
      interactive
      placement="bottom-end"
      render={attrs => (
        <div className={cx('menu-items')} tabIndex="-1" {...attrs} >
          <PopperWrapper>
            {history.length > 1 && <MenuHeader title={current.title} onBack={()=>{
              setHistory(prev => prev.slice(0,-1));
            }}/>}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={()=> setHistory(prev => prev.slice(0,1))}
      >
      <div onClick={visible ? hide : show}>
        {children}
      </div>
      </TippyHeadless>
  );
}

export default MenuItem;