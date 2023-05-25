import classNames from "classnames/bind";
import styles from './Filter.module.scss';
import FilterIcon from "../../../components/FilterIcon";
import Button from "../../../components/Button";
import { ChevronRight,ChevronLeft } from "../../../components/Icon";
import { useRef,useState,useEffect } from "react";
const cx = classNames.bind(styles);

function Filter() {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const filterList = [
    {
      name: 'Trending',
      icon:'https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg',
    },
    {
      name: 'Cabins',
      icon:'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg',

    },
    {
      name: 'Amazing views',
      icon:'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',

    },
    {
      name: 'Surfling',
      icon:'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg',

    },
    {
      name: 'Private rooms',
      icon:'https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg',

    },
    {
      name: 'Tiny homes',
      icon:'https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg',

    },
    {
      name: 'Barns',
      icon:'https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg',

    },
    {
      name: 'Boats',
      icon:'https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg',

    },
    {
      name: 'Creative spaces',
      icon:'https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg',

    },
    {
      name: 'Domes',
      icon:'https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg',

    },
    {
      name: 'Mansions',
      icon:'https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg',

    },
    {
      name: 'Contryside',
      icon:'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg',

    },
    {
      name:'Ryokans',
      icon:'https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg',

    },
    {
      name:'Yurts',
      icon:'https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg',

    },
    {
      name:'Iconic cities',
      icon:'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg',

    },
    {
      name:'Beach',
      icon:'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg',

    },
    {
      name:'Amazing pools',
      icon:'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg',

    },
    {
      name:'Treehouses',
      icon:'https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg',

    },
    {
      name:'Beachfront',
      icon:'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',

    },
    {
      name:'Hanoks',
      icon:'https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg',

    },
    

  ];

  const wrapperRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const scrollAmount = 400;

  useEffect(()=>{
    const wrapperEl = wrapperRef.current;

    const handleScroll = () => {
      if (wrapperEl.scrollLeft === 0) {
        setShowLeftArrow(false);
      } else {
        setShowLeftArrow(true);
      }

      if (wrapperEl.scrollLeft + wrapperEl.offsetWidth === wrapperEl.scrollWidth) {
        setShowRightArrow(false);
      } else {
        setShowRightArrow(true);
      }
    };

    wrapperEl.addEventListener('scroll', handleScroll);

    return () => {
      wrapperEl.removeEventListener('scroll', handleScroll);
    };
  },[])

  const handleLeftButtonClick = () => {
    const wrapperEl = wrapperRef.current;
    wrapperEl.scroll({
      left: wrapperEl.scrollLeft - scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleRightButtonClick = () => {
    const wrapperEl = wrapperRef.current;
    wrapperEl.scroll({
      left: wrapperEl.scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
  };

  return ( 
    <nav className={cx('filter')} >
      <div className={cx('wrapper')} ref={wrapperRef}>
        <div className={cx("left")} style={{
          display: showLeftArrow?"block":"none",
        }}>
          <Button className={cx("horizontal")} leftIcon={<ChevronLeft />} ref={leftRef} onClick={handleLeftButtonClick}/>
        </div>
        {filterList.map((icon,index)=>(
          <FilterIcon data={icon} key = {index} />
        ))}
        <div className={cx("right")} style={{
          display: showRightArrow?"block":"none",
        }}>
          <Button className={cx("horizontal")} leftIcon={<ChevronRight />} ref={rightRef} onClick={handleRightButtonClick} />
        </div>
      </div>
    </nav>
  );
}

export default Filter;