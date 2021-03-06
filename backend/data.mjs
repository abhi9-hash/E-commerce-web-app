import bcrypt from 'bcryptjs';

const data={
    users: [
        {
          name: 'Abhinav',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'Pathak',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],

    products:
[
    {
       
        stock:5,
category: 'mobile',
title: 'Samsung J1 with latest Android | 8Gb ROM | 1 Gb RAM | 1.2 gz Quad core Processor',
price: 7999,
image: 'https://images.samsung.com/is/image/samsung/latin_en-galaxy-j1-ace-ve-j111m-sm-j111mzkatpa-000000001-front-black?$720_576_PNG$',
rating: 3
},
{
    
    stock:5,
                category: 'mobile',
                title: 'Redmi Note 7 Pro (Nebula Red, 128 GB)  (6 GB RAM)',
                price: 10999 ,
                image: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-7-pro-1.jpg',
                rating: 4
},
{
    
    stock:5,
    category: 'mobile',
    title: 'Redmi Note 8 Pro (Halo White, 128 GB)  (6 GB RAM)',
    price: 18999, 
    image: 'https://rukminim1.flixcart.com/image/416/416/k7usyvk0/mobile/g/u/h/mi-redmi-note-9-b0784d862l-original-imafqy27dchrz3af.jpeg?q=70',
    rating: 5
},
{
 
    stock:5,
                category: 'electronics',
                title: 'Hisense 93 L Direct Cool Single Door 1 Star (2020) Refrigerator  (Silver, RR120D4ASB1)',
                price: 8999,
                image: 'https://rukminim1.flixcart.com/image/416/416/kcxpbww0/refrigerator-new/a/8/7/rr120d4asb1-1-hisense-original-imaftxk2e5h3vsxz.jpeg?q:70',
                rating: 4
},
{
    stock:0,
                category: 'electronics',
                title: 'Chartbusters np:035 Non-stick Compact light weight Dry Iron  (Multicolor)',
                price: 999 ,
                image: 'https://rukminim1.flixcart.com/image/832/832/kc9eufk0pkrrdj/iron-refurbished/g/g/5/c-np-035-non-stick-compact-light-weight-chartbusters-original-imaftgu6rfwgpz65.jpeg?q:70',
                rating: 5
},
{
    stock:5,
                category: 'interiors',
                title: 'YMS Size:- 16" X 24" Calyptra Hedge Floral Design Wall Stencil  (Pack of 1, PETAL PATTERN)',
                price: 199,
                image: 'https://rukminim1.flixcart.com/image/416/416/k4324y80/stencil/j/9/m/1-calyptra-hedge-floral-design-wall-yms-original-imafn2thurcxwdfz.jpeg?q:70',
                rating: 5
},
{  
stock:5,
                category: 'furniture',
                title: 'Bharat Lifestyle Nano Fabric 6 Seater Sofa  (Finish Color - Black Grey)',
                price: 24999 ,
                image: 'https://rukminim1.flixcart.com/image/416/416/jhs0o7k0/sofa-sectional/5/f/x/black-na-nano-bharat-lifestyle-black-grey-original-imaf5q3ghqnczgf9.jpeg?q:70',
                rating: 4
},
],
};
export default data;
