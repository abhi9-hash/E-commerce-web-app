import React from 'react';
import Productcard from './Productcard'
import './Home.css'
function Home() {
    return (
        <div className='home'>
                <Productcard
                id='100001'
                category='mobile'
                title='Samsung J1 with latest Android | 8Gb ROM | 1 Gb RAM | 1.2 gz Quad core Processor'
                price={7999} 
                image='https://images.samsung.com/is/image/samsung/latin_en-galaxy-j1-ace-ve-j111m-sm-j111mzkatpa-000000001-front-black?$720_576_PNG$'
                rating={3}
                />
                <Productcard
                id='100002'
                category='mobile'
                title='Redmi Note 7 Pro (Nebula Red, 128 GB)  (6 GB RAM)'
                price={10999} 
                image='https://rukminim1.flixcart.com/image/832/832/k0lbdzk0pkrrdj/mobile/5/8/h/mi-redmi-note-7-pro-mzb7463in-original-imafeybchwasdygf.jpeg?q=70'
                rating={4}
                />
                <Productcard
                id='100003'
                category='mobile'
                title='Redmi Note 8 Pro (Halo White, 128 GB)  (6 GB RAM)'
                price={18999} 
                image='https://rukminim1.flixcart.com/image/832/832/k5lcvbk0pkrrdj/mobile-refurbished/s/7/x/redmi-note-8-pro-64-c-m1906g7i-mi-6-original-imafhgsa77msdgng.jpeg?q=70'
                rating={5}
                />
        
                <Productcard
                id='100011'
                category='electronics'
                title='Hisense 93 L Direct Cool Single Door 1 Star (2020) Refrigerator  (Silver, RR120D4ASB1)'
                price={8999} 
                image='https://rukminim1.flixcart.com/image/416/416/kcxpbww0/refrigerator-new/a/8/7/rr120d4asb1-1-hisense-original-imaftxk2e5h3vsxz.jpeg?q=70'
                rating={4}
                />
                <Productcard
                id='100012'
                category='electronics'
                title='Chartbusters np=035 Non-stick Compact light weight Dry Iron  (Multicolor)'
                price={999} 
                image='https://rukminim1.flixcart.com/image/832/832/kc9eufk0pkrrdj/iron-refurbished/g/g/5/c-np-035-non-stick-compact-light-weight-chartbusters-original-imaftgu6rfwgpz65.jpeg?q=70'
                rating={5}
                />
            
                <Productcard
                id='100021'
                category='interiors'
                title='YMS Size:- 16" X 24" Calyptra Hedge Floral Design Wall Stencil  (Pack of 1, PETAL PATTERN)'
                price={199} 
                image='https://rukminim1.flixcart.com/image/416/416/k4324y80/stencil/j/9/m/1-calyptra-hedge-floral-design-wall-yms-original-imafn2thurcxwdfz.jpeg?q=70'
                rating={5}
                />
                <Productcard
                id='100022'
                category='furniture'
                title='Bharat Lifestyle Nano Fabric 6 Seater Sofa  (Finish Color - Black Grey)'
                price={24999} 
                image='https://rukminim1.flixcart.com/image/416/416/jhs0o7k0/sofa-sectional/5/f/x/black-na-nano-bharat-lifestyle-black-grey-original-imaf5q3ghqnczgf9.jpeg?q=70'
                rating={4}
                />
            
        </div>
    )
}

export default Home
