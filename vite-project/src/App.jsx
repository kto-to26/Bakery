import { useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules'
import SwiperCore from "swiper/core";


import './App.scss'
import 'swiper/scss';
import "swiper/css/navigation"


import Offer from "./Offer/Offer"
import Three from "./Three/Three"

import DataContext from './Context'

// img for two
import {sevenFive, sevenFour, sevenThree, sevenTwo, twoOne} from "./image"
import {twoTwo} from "./image"
import {twoThree} from "./image"
import {twoFour} from "./image"

// img for three
import {threeOne} from './image';
import {threeTwo} from "./image"
import{ threeThree} from "./image"
import {threeFour} from "./image"
import{ threeFive} from "./image"

// img for seven
import { sevenOne } from './image'

// img for eight
import {eightOne} from "./image"
import {eightTwo} from "./image"
import {eightThree} from "./image"
import {eightFour} from "./image"
import {eightFive} from "./image"
import {eightSix} from "./image"

// создаем Context

console.log(threeOne);

const Data={
  header:{
    center:{
      Occasion:[
        {name:"Occasions"},
        {name:"Working From Home"},
        {name:"Snack Time"},
        {name:"Breakfast"},
        {name:"Vegan Life"},
        {name:"Baking"},
        {name:"Gifts & Bundles"},
        {name:"Easy Cooling"},
        {name:"All Products"},
      ],
      Categories:[
        {name:"Baking"},
        {name:"Breakfast"},
        {name:"Condiments"},
        {name:"Drinks"},
        {name:"Heat Things Up"},
        {name:"Meal Solutions"},
        {name:"Pantry Staples"},
        {name:"Simmer Sauces"},
        {name:"Snack & Treats"},
        {name:"Spice Up Your Cooking"},
        {name:"Sweet & Tooth"},
        {name:"Wine & Cheese"},
        {name:"All Products"},
      ],
      Gifts:[
        {name:"Sweet Tooth Special"},
        {name:"Discover Local"},
        {name:"Baking Box"},
        {name:"Spicy Heat Lover's Box"},
        {name:"Snacking Sensations"},
      ]
    }
  },
  two:[
    {
    img:twoOne,  
    name:"Pepperoni Pizza",
    price:"$19.9",
    priceTwo:"$24.99",
    
  },
  {
    img:twoTwo,  
  name:"Baked Pancakes",
  price:"$35.99",
  priceTwo:"$44.99",
  
},
{
  img:twoThree,  
name:"Avocado",
price:"$17.99",
priceTwo:"$20.99",

},
  {
    img:twoFour,
    name:"Bunch of Orange",
    price:"$24.99",
    priceTwo:"$29.99",
    
  },
  ],
  three:[
    {
      img:threeOne,
      name:"Discover new flavours & people",
      text:"Discover new tastes, flavours, snacks and recipes to make wonderful meals. Also find out where your food comes from and who makes it."
    },
    {
      img:threeTwo,
      name:"Discover new flavours & people",
      text:"Discover new tastes, flavours, snacks and recipes to make wonderful meals. Also find out where your food comes from and who makes it."
    },
    {
      img:threeThree,
      name:"Discover new flavours & people",
      text:"Discover new tastes, flavours, snacks and recipes to make wonderful meals. Also find out where your food comes from and who makes it."
    },
    {
      img:threeFour,
      name:"Discover new flavours & people",
      text:"Discover new tastes, flavours, snacks and recipes to make wonderful meals. Also find out where your food comes from and who makes it."
    },
    {
      img:threeFive,
      name:"Discover new flavours & people",
      text:"Discover new tastes, flavours, snacks and recipes to make wonderful meals. Also find out where your food comes from and who makes it."
    },
  ],
  seven:[
    {img:sevenOne},
    {img:sevenTwo},
    {img:sevenThree},
    {img:sevenFour},
    {img:sevenFive},
    {img:sevenOne},
    {img:sevenTwo},
    {img:sevenThree},
    {img:sevenFour},
    {img:sevenFive},
  ],
  eight:[
    {img:eightOne,
    link:"https://www.facebook.com/"
    },
    {img:eightTwo,
    link:"https://www.instagram.com/"
    },
    {img:eightThree,
    link:"https://twitter.com"
    },
    {img:eightFour,
      link:"https://web.whatsapp.com/"
    },
    {img:eightFive,
    link:"https://www.messenger.com"
    },
    {img:eightSix,
    link:"https://t.me/kto_to_Frontend"
    },
  ]
}

// Создаем и экспортируем context(желательно в другом файле)

SwiperCore.use([Navigation]);


function App() {


  const [tips,setTips] = useState(true)



  return (
    <>
    <section className="wrapper">
      {/* tips */}
      <div className={tips ? "tips-on" : "tips-off"}>
        {/* заглушка */}
        <div className="tips__zero"></div>
        <h1 className="tips__text">Free Delivery over $100. Gift with Purchase over $150</h1>
        <button className="tips__close" onClick={()=>{
          setTips(!tips)
        }}></button>
      </div>
        {/* header */}
      <header>
        <div className="header__logo"></div>
        {/* selescts */}
        <div className="header__center">
          {/* Occasions */}
        <select name="Occasions" id="">
        <option value="" hidden>Occasion</option>
        {Data.header.center.Occasion.map((i,index)=>{
          return (
            <option key={"Occasions" + index}><a href="">{i.name}</a></option>
          )
        })}
        </select>
        {/*All Categories  */}
        <select name="All Categories" id="">
        <option value="" hidden>All Categories</option>
        {Data.header.center.Categories.map((i,index)=>{
          return (
            <option key={"Categories" + index}><a href="">{i.name}</a></option>
          )
        })}
        </select>
        {/* Gifts & Bundles */}
        <select name="Gifts & Bundles" id="">
        <option value="" hidden>Gifts & Bundles</option>
        {Data.header.center.Gifts.map((i,index)=>{
          return (
            <option key={"Gifts" + index}><a href="">{i.name}</a></option>
          )
        })}
        </select>
        {/* link */}
        <a href="">Our Brands</a>
        <a href="">About Us</a>
        </div>
        {/* right */}
        <div className="header__right">
        <div className="header__right-search header__right-item"></div>
        <div className="header__right-profile header__right-item"></div>
        <div className="header__right-buy header__right-item"></div>
        </div>
      </header>

      {/* block 1 */}
      <section className="one">
        <div className="one__text">
          <h1>Support Your Local Artisans</h1>
          <p>Discover brands and theit stories</p>
          <button>Browse bands</button>
        </div>
      </section>

      {/* block 2(offers) */}
      <section className="two">
        <h1 className="two__text">Latest <span>Offers</span></h1>
        {/* offers */}
        <DataContext.Provider value={Data.two}>
        <div className="two__offers">
        <Offer></Offer>
          
        </div>
        </DataContext.Provider>
        
      </section>

      <section className="three">
        <h1 className="three__text">Why Choose <span>the Premium Bakery Quality</span></h1>
        <ul>
           { Data.three.map((i,index)=>{
            return(
              <li key={"three" + index}>
                <Three data={i}></Three>
              </li>
            )
            })}
         
        </ul>
      </section>

      <section className="four">
        <div className="four__wrapper">
          <div className="four__wrapper-left">
            <h1 className="four__wrapper-left-name"><span>Who Makes</span> Your Food?  </h1>
            <p className="four__wrapper-left-text">Our mission is to help grow the local food ecosystem in BC and across Canada.  Why? </p>
            <ul className="four__wrapper-left-list">
              <li> <span></span>Because it connects us to the land we live on, and to the people who live here.</li>
              <li> <span></span>Because it’s more meaningful to cook and eat something made by a person nearby than by some distant corporation</li>
              <li> <span></span>Because good local food makes our corner of the world a better place to live</li>
              <li> <span></span>Because it supports local jobs</li>
              <li> <span></span>Because it makes more sense for the environment</li>
            </ul>
            <button className="four__wrapper-left-btn">Discover our Producers</button>
          </div>

          <div className="four__wrapper-right"></div>
        </div>
      </section>

      <section className="five">
       <div className="five__wrapper">
       <div className="five__wrapper-name">Our Charity Partner, City Bakery</div>
        <div className="five__wrapper-logo"></div>
        <button className="five__wrapper-btn">Learn more about City Bakery</button>
       </div>
      </section>

      <section className="six">
      <div className="six__left"></div>
          <div className="six__right">
            <div className="six__right-name"><span>Surprise Someone</span> <br />Working from Home</div>
            <div className="six__right-text">Do you have a colleague or family member working hard at home? Our Working From Home box of snacks and drinks is the perfect way to put a smile on their face, delivered direct to their door.
            <br />
            <br />
            To buy for a large group of people, get in touch and we can discuss bespoke   bundles and personalised messaging. </div>
            <button className="six__right-btn">Buy Now</button>
          </div>
          
      </section>


{/* ДОДЕЛАТЬ!!! */}
      <section className="seven"> {/* swiper */}
          
            <h1 className='seven-text'>
              <span>@PremiumBakeryQuality</span> on Instagram
              </h1>
             
      <Swiper
      className='sevenSwiper'
      spaceBetween={50}
      slidesPerView={5}
      navigation={true}
      
    >
    {Data.seven.map((i,index)=>(
        <SwiperSlide key={"slide" + index}>
          <img src={i.img} />
        </SwiperSlide>
      ))}
    </Swiper>

      </section>
      
      {/* 8 */}
      <section className="eight">
      <div className="eight-name">Tell a Friend</div>
      <ul className="eight-links">
        {Data.eight.map((i,index)=>(
          <li key={"link" + index}><a href={i.link}><img src={i.img}/></a></li>
        ))}
      </ul>
      </section>

      <footer>
      <div className="footer__wrapper">

        <div className="footer__wrapper-logo"></div>

        <ul className="footer__wrapper-Occasions footer__wrapper-links">
          <li>Occasions</li>
        {Data.header.center.Occasion.map((i,index)=>{
          return (
            <li key={"Occasions" + index}><a href="">{i.name}</a></li>
          )
        })}
        </ul>
        <ul className="footer__wrapper-Categories footer__wrapper-links">
          <li>All Categories</li>
        {Data.header.center.Categories.map((i,index)=>{
          return (
            <li key={"Categories" + index}><a href="">{i.name}</a></li>
          )
        })}
        </ul>
        <ul className="footer__wrapper-Gift footer__wrapper-links">
          <li>Gifts & Bundles</li>
        {Data.header.center.Gifts.map((i,index)=>{
          return (
            <li key={"Gifts" + index}><a href="">{i.name}</a></li>
          )
        })}
        </ul>
        <div className="footer__wrapper-Brands footer__wrapper-right"><a href="">Our Brands</a></div>
        <div className="footer__wrapper-About footer__wrapper-right"><a href="">About Us</a></div>
      </div>
    </footer>
    </section>

    
   </>
  )
}

export default App 
