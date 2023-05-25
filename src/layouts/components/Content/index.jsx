import styles from './Content.module.scss';
import classNames from 'classnames/bind';
import Tour from '../../../components/Tour';
const cx = classNames.bind(styles);
function Content() {

  const houses = [
    {
      name:'Vila Jungle',
      location:'Rayong',
      country:'Thailand',
      price:1970,
      time:"Apr 18 – 23",
      days:5,
      star:4.5,
      images:[
        'https://a0.muscache.com/im/pictures/9acaef46-8130-48b0-8e45-4de64c1319c7.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-9738315/original/a6a87b0d-8854-4631-8797-444f1069f7df.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/4f1710dd-30bf-462f-83b9-709f626658b8.jpg?im_w=720',
      ],
      description:'lorem ipsum dolor sit amet'
    },
    {
      name:'An Bang Beach',
      location:'Hoi An City',
      country:'Vietnam',
      price:970,
      time:"Apr 13 – 21",
      days:9,
      star:4.3,
      images:[
        'https://a0.muscache.com/im/pictures/miso/Hosting-743128366313843509/original/fee29795-cad9-4b4b-9efa-66e37dee6766.png?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-9738315/original/a6a87b0d-8854-4631-8797-444f1069f7df.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/4f1710dd-30bf-462f-83b9-709f626658b8.jpg?im_w=720',
      ],
      description:'lorem ipsum dolor sit amet'
    },
    {
      name:'Koh Chang Tai Beach',
      location:'Koh Chang Tai', 
      country:'Thailand',
      price:570,
      time:"Apr 13 – 22",
      days:10,
      star:4.5,
      images:[
        'https://a0.muscache.com/im/pictures/miso/Hosting-743128366313843509/original/fee29795-cad9-4b4b-9efa-66e37dee6766.png?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-9738315/original/a6a87b0d-8854-4631-8797-444f1069f7df.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/4f1710dd-30bf-462f-83b9-709f626658b8.jpg?im_w=720',
      ],
      description:'lorem ipsum dolor sit amet'
    },
    {
      name:'Hoa Hai Beach',
      location:'Hoa Hai',
      country:'Vietnam',
      price:950,
      time:"Apr 13 – 21",
      days:9,
      star:4.7,
      images:[
        'https://a0.muscache.com/im/pictures/miso/Hosting-743128366313843509/original/fee29795-cad9-4b4b-9efa-66e37dee6766.png?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-9738315/original/a6a87b0d-8854-4631-8797-444f1069f7df.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/4f1710dd-30bf-462f-83b9-709f626658b8.jpg?im_w=720',
      ],
      description:'lorem ipsum dolor sit amet'
    },
    {
      name:'Jomtien',
      location:'Na Chom Thian',
      country:'Thailand',
      price:470,
      time:"Apr 17 – 22",
      days:5,
      star:4.2,
      images:[
        'https://a0.muscache.com/im/pictures/miso/Hosting-743128366313843509/original/fee29795-cad9-4b4b-9efa-66e37dee6766.png?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-9738315/original/a6a87b0d-8854-4631-8797-444f1069f7df.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/4f1710dd-30bf-462f-83b9-709f626658b8.jpg?im_w=720',
      ],
      description:'lorem ipsum dolor sit amet'
    },
    {
      name:'Jomtien',
      location:'Muang Pattaya',
      country:'Thailand',
      price:970,
      time:"Apr 13 – 21",
      days:5,
      star:4.3,
      images:[
        'https://a0.muscache.com/im/pictures/miso/Hosting-743128366313843509/original/fee29795-cad9-4b4b-9efa-66e37dee6766.png?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-9738315/original/a6a87b0d-8854-4631-8797-444f1069f7df.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/4f1710dd-30bf-462f-83b9-709f626658b8.jpg?im_w=720',
      ],
      description:'lorem ipsum dolor sit amet'
    },
    {
      name:'Pattaya Beach',
      location:'Muang Pattaya',
      country:'Thailand',
      price:970,
      time:"Jul 1 – 7",
      days:5,
      star:4.3,
      images:[
        'https://a0.muscache.com/im/pictures/miso/Hosting-743128366313843509/original/fee29795-cad9-4b4b-9efa-66e37dee6766.png?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-9738315/original/a6a87b0d-8854-4631-8797-444f1069f7df.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/4f1710dd-30bf-462f-83b9-709f626658b8.jpg?im_w=720',
      ],
      description:'lorem ipsum dolor sit amet'
    },
    {
      name:'Vila Jungle',
      location:'Rayong',
      country:'Thailand',
      price:1970,
      time:"Apr 18 – 23",
      days:5,
      star:4.5,
      images:[
        'https://a0.muscache.com/im/pictures/miso/Hosting-743128366313843509/original/fee29795-cad9-4b4b-9efa-66e37dee6766.png?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-9738315/original/a6a87b0d-8854-4631-8797-444f1069f7df.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/4f1710dd-30bf-462f-83b9-709f626658b8.jpg?im_w=720',
      ],
      description:'lorem ipsum dolor sit amet'
    },
    {
      name:'An Bang Beach',
      location:'Hoi An City',
      country:'Vietnam',
      price:970,
      time:"Apr 13 – 21",
      days:5,
      star:4.3,
      images:[
        'https://a0.muscache.com/im/pictures/miso/Hosting-743128366313843509/original/fee29795-cad9-4b4b-9efa-66e37dee6766.png?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-9738315/original/a6a87b0d-8854-4631-8797-444f1069f7df.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/4f1710dd-30bf-462f-83b9-709f626658b8.jpg?im_w=720',
      ],
      description:'lorem ipsum dolor sit amet'
    },
    {
      name:'Koh Chang Tai Beach',
      location:'Koh Chang Tai', 
      country:'Thailand',
      price:570,
      time:"Apr 13 – 22",
      days:5,
      star:4.5,
      images:[
        'https://a0.muscache.com/im/pictures/miso/Hosting-743128366313843509/original/fee29795-cad9-4b4b-9efa-66e37dee6766.png?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-9738315/original/a6a87b0d-8854-4631-8797-444f1069f7df.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/4f1710dd-30bf-462f-83b9-709f626658b8.jpg?im_w=720',
      ],
      description:'lorem ipsum dolor sit amet'
    },
    {
      name:'Hoa Hai Beach',
      location:'Hoa Hai',
      country:'Vietnam',
      price:950,
      time:"Apr 13 – 21",
      days:5,
      star:4.7,
      images:[
        'https://a0.muscache.com/im/pictures/miso/Hosting-743128366313843509/original/fee29795-cad9-4b4b-9efa-66e37dee6766.png?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-9738315/original/a6a87b0d-8854-4631-8797-444f1069f7df.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/4f1710dd-30bf-462f-83b9-709f626658b8.jpg?im_w=720',
      ],
      description:'lorem ipsum dolor sit amet'
    },
    {
      name:'Jomtien',
      location:'Na Chom Thian',
      country:'Thailand',
      price:470,
      time:"Apr 17 – 22",
      days:5,
      star:4.2,
      images:[
        'https://a0.muscache.com/im/pictures/miso/Hosting-743128366313843509/original/fee29795-cad9-4b4b-9efa-66e37dee6766.png?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-9738315/original/a6a87b0d-8854-4631-8797-444f1069f7df.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/4f1710dd-30bf-462f-83b9-709f626658b8.jpg?im_w=720',
      ],
      description:'lorem ipsum dolor sit amet'
    },
    {
      name:'Jomtien',
      location:'Muang Pattaya',
      country:'Thailand',
      price:970,
      time:"Apr 13 – 21",
      days:5,
      star:4.3,
      images:[
        'https://a0.muscache.com/im/pictures/miso/Hosting-743128366313843509/original/fee29795-cad9-4b4b-9efa-66e37dee6766.png?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-9738315/original/a6a87b0d-8854-4631-8797-444f1069f7df.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/4f1710dd-30bf-462f-83b9-709f626658b8.jpg?im_w=720',
      ],
      description:'lorem ipsum dolor sit amet'
    },
    {
      name:'Pattaya Beacj',
      location:'Muang Pattaya',
      country:'Thailand',
      price:970,
      time:"Jul 1 – 7",
      days:5,
      star:4.3,
      images:[
        'https://a0.muscache.com/im/pictures/miso/Hosting-743128366313843509/original/fee29795-cad9-4b4b-9efa-66e37dee6766.png?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-9738315/original/a6a87b0d-8854-4631-8797-444f1069f7df.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/4f1710dd-30bf-462f-83b9-709f626658b8.jpg?im_w=720',
      ],
      description:'lorem ipsum dolor sit amet'
    },
    {
      name:'Vila Jungle',
      location:'Rayong',
      country:'Thailand',
      price:1.970,
      time:"Apr 18 – 23",
      days:5,
      star:4.5,
      images:[
        'https://a0.muscache.com/im/pictures/miso/Hosting-743128366313843509/original/fee29795-cad9-4b4b-9efa-66e37dee6766.png?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-9738315/original/a6a87b0d-8854-4631-8797-444f1069f7df.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/4f1710dd-30bf-462f-83b9-709f626658b8.jpg?im_w=720',
      ],
      description:'lorem ipsum dolor sit amet'
    },
    {
      name:'An Bang Beach',
      location:'Hoi An City',
      country:'Vietnam',
      price:970,
      time:"Apr 13 – 21",
      days:5,
      star:4.3,
      images:[
        'https://a0.muscache.com/im/pictures/miso/Hosting-743128366313843509/original/fee29795-cad9-4b4b-9efa-66e37dee6766.png?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-9738315/original/a6a87b0d-8854-4631-8797-444f1069f7df.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/4f1710dd-30bf-462f-83b9-709f626658b8.jpg?im_w=720',
      ],
      description:'lorem ipsum dolor sit amet'
    },
    {
      name:'Koh Chang Tai Beach',
      location:'Koh Chang Tai', 
      country:'Thailand',
      price:570,
      time:"Apr 13 – 22",
      days:5,
      star:4.5,
      images:[
        'https://a0.muscache.com/im/pictures/miso/Hosting-743128366313843509/original/fee29795-cad9-4b4b-9efa-66e37dee6766.png?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-9738315/original/a6a87b0d-8854-4631-8797-444f1069f7df.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/4f1710dd-30bf-462f-83b9-709f626658b8.jpg?im_w=720',
      ],
      description:'lorem ipsum dolor sit amet'
    },
    {
      name:'Hoa Hai Beach',
      location:'Hoa Hai',
      country:'Vietnam',
      price:950,
      time:"Apr 13 – 21",
      days:5,
      star:4.7,
      images:[
        'https://a0.muscache.com/im/pictures/miso/Hosting-743128366313843509/original/fee29795-cad9-4b4b-9efa-66e37dee6766.png?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-9738315/original/a6a87b0d-8854-4631-8797-444f1069f7df.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/4f1710dd-30bf-462f-83b9-709f626658b8.jpg?im_w=720',
      ],
      description:'lorem ipsum dolor sit amet'
    },
    {
      name:'Jomtien',
      location:'Na Chom Thian',
      country:'Thailand',
      price:470,
      time:"Apr 17 – 22",
      days:5,
      star:4.2,
      images:[
        'https://a0.muscache.com/im/pictures/miso/Hosting-743128366313843509/original/fee29795-cad9-4b4b-9efa-66e37dee6766.png?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-9738315/original/a6a87b0d-8854-4631-8797-444f1069f7df.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/4f1710dd-30bf-462f-83b9-709f626658b8.jpg?im_w=720',
      ],
      description:'lorem ipsum dolor sit amet'
    },
    {
      name:'Jomtien',
      location:'Muang Pattaya',
      country:'Thailand',
      price:970,
      time:"Apr 13 – 21",
      days:5,
      star:4.3,
      images:[
        'https://a0.muscache.com/im/pictures/miso/Hosting-743128366313843509/original/fee29795-cad9-4b4b-9efa-66e37dee6766.png?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-9738315/original/a6a87b0d-8854-4631-8797-444f1069f7df.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/4f1710dd-30bf-462f-83b9-709f626658b8.jpg?im_w=720',
      ],
      description:'lorem ipsum dolor sit amet'
    },
    {
      name:'Pattaya Beacj',
      location:'Muang Pattaya',
      country:'Thailand',
      price:970,
      time:"Jul 1 – 7",
      days:5,
      star:4.3,
      images:[
        'https://a0.muscache.com/im/pictures/miso/Hosting-743128366313843509/original/fee29795-cad9-4b4b-9efa-66e37dee6766.png?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-9738315/original/a6a87b0d-8854-4631-8797-444f1069f7df.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/4f1710dd-30bf-462f-83b9-709f626658b8.jpg?im_w=720',
      ],
      description:'lorem ipsum dolor sit amet'
    },
  ];

  return ( 
    <div className={cx('content')}>
      {houses.map((item,index)=>(
        <Tour data={item} key={index} />
      ))}
    </div>
  );
}

export default Content;