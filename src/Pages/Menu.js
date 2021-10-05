import React, {useEffect, useState} from 'react'

import '../assets/css/menu.css'

import Section from '../components/Section.js';
import Card from '../components/Card.js';
import Footer from '../components/Footer.js';
import {products} from '../components/items.js';

// import Adobo from '../assets/images/adobo.jpg';
// import Arozcaldo from '../assets/images/arozcaldo.jpg'
// import BBQ from '../assets/images/bbq.jpg';
// import BistekTagalog from '../assets/images/bistektagalog.jpg';
// import Bulalo from '../assets/images/bulalo.jpg';
// import ChickenInasal from '../assets/images/chickeninasal.jpg';
// import Dinuguan from '../assets/images/dinuguan.jpg';
// import GinataangGulay from '../assets/images/ginataanggulay.jpg';
// import LiempoInihaw from '../assets/images/inihawnaliempo.jpg';
// import Kaldereta from '../assets/images/kaldereta.jpg';
// import KareKare from '../assets/images/karekare.jpg';
// import Kilawin from '../assets/images/kilawin.jpg';
// import KrispiPata from '../assets/images/krispipata.jpg';
// import LechonKawali from '../assets/images/lechonkawali.jpg';
// import Lumpia from '../assets/images/lumpia.jpg';
// import Palabok from '../assets/images/palabok.jpg';
// import PancitGuisado from '../assets/images/pancitguisado.jpg';
// import Sinigang from '../assets/images/sinigang.jpg';
// import Sisig from '../assets/images/sisig.jpg';
// import Sopas from '../assets/images/sopas.jpg';
// import Tinola from '../assets/images/tinola.jpg';

function Menu() {

  // const menu = [
  //   {key:'adobo', prodImg:Adobo, prodAlt:Adobo, prodName: 'Chicken Adobo', prodType: 'main' , prodPrice: '130.00'},
  //   {key:'arozcaldo', prodImg:Arozcaldo, prodAlt:Arozcaldo, prodName: 'Arozcaldo', prodType: 'siesta' , prodPrice: '60.00'},
  //   {key:'bbq', prodImg:BBQ, prodAlt:BBQ, prodName: 'BBQ - 3 sticks', prodType: 'main' , prodPrice: '90.00'},
  //   {key:'bistektagalog', prodImg:BistekTagalog, prodAlt:BistekTagalog, prodName: 'Bistek Tagalog', prodType: 'main' , prodPrice: '130.00'},
  //   {key:'bulalo', prodImg:Bulalo, prodAlt:Bulalo, prodName: 'Bulalo', prodType: 'main' , prodPrice: '130.00'},
  //   {key:'chickeninasal', prodImg:ChickenInasal, prodAlt:ChickenInasal, prodName: 'Chicken Inasal', prodType: 'main' , prodPrice: '130.00'},
  //   {key:'dinuguan', prodImg:Dinuguan, prodAlt:Dinuguan, prodName: 'Dinuguan', prodType: 'main' , prodPrice: '130.00'},
  //   {key:'ginataanggulay', prodImg:GinataangGulay, prodAlt:GinataangGulay, prodName: 'Ginataang Gulay', prodType: 'main' , prodPrice: '90.00'},
  //   {key:'liempoinihaw', prodImg:LiempoInihaw, prodAlt:LiempoInihaw, prodName: 'Liempo Inihaw', prodType: 'main' , prodPrice: '170.00'},
  //   {key:'kaldereta', prodImg:Kaldereta, prodAlt:Kaldereta, prodName: 'Kaldereta', prodType: 'main' , prodPrice: '180.00'},
  //   {key:'karekare', prodImg:KareKare, prodAlt:KareKare, prodName: 'Kare-kare', prodType: 'main' , prodPrice: '180.00'},
  //   {key:'kilawin', prodImg:Kilawin, prodAlt:Kilawin, prodName: 'Kilawin', prodType: 'main' , prodPrice: '90.00'},
  //   {key:'krispipata', prodImg:KrispiPata, prodAlt:KrispiPata, prodName: 'Krispi Pata', prodType: 'main' , prodPrice: '170.00'},
  //   {key:'lechonkawali', prodImg:LechonKawali, prodAlt:LechonKawali, prodName: 'Lechon Kawali', prodType: 'main' , prodPrice: '210.00'},
  //   {key:'lumpia', prodImg:Lumpia, prodAlt:Lumpia, prodName: 'Lumpia - 4pcs', prodType: 'siesta' , prodPrice: '120.00'},
  //   {key:'palabok', prodImg:Palabok, prodAlt:Palabok, prodName: 'Palabok', prodType: 'siesta' , prodPrice: '60.00'},
  //   {key:'pancitguisado', prodImg:PancitGuisado, prodAlt:PancitGuisado, prodName: 'Pancit Guisado', prodType: 'siesta' , prodPrice: '60.00'},
  //   {key:'sinigang', prodImg:Sinigang, prodAlt:Sinigang, prodName: 'Sinigang', prodType: 'main' , prodPrice: '210.00'},
  //   {key:'sisig', prodImg:Sisig, prodAlt:Sisig, prodName: 'Sisig', prodType: 'main' , prodPrice: '210.00'},
  //   {key:'sopas', prodImg:Sopas, prodAlt:Sopas, prodName: 'Sopas', prodType: 'siesta' , prodPrice: '60.00'},
  //   {key:'tinola', prodImg:Tinola, prodAlt:Tinola, prodName: 'Tinola', prodType: 'main' , prodPrice: '130.00'}
  // ];

  const[fMenu, setfMenu] = useState([]);
  let tempMenu = products;

  useEffect(() => {
    setfMenu(tempMenu);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  const filterMenu = target => () => {

    if(target === 'selAll'){
      tempMenu = products;
      setfMenu(tempMenu);
    }

    if(target === 'selMain'){
      tempMenu = [];
      for (let i = 0; i < products.length; i++) {
        if (products[i].prodType === 'main') {
          tempMenu.push(products[i]);
        }
      }
      setfMenu(tempMenu);
    }

    if(target === 'selSiesta'){
      tempMenu = [];
      for (let i = 0; i < products.length; i++) {
        if (products[i].prodType === 'siesta') {
          tempMenu.push(products[i]);
        }
      }
      setfMenu(tempMenu);
    }

    // console.log(tempMenu);
  }


  return (
    <div className="wrapper">
      <Section
        titleClass="fdir__col"
        titleContent={
          <>
            <span className="section__title">Our Menu</span>
          </>
        }
        bodyContent={
          <>
            {/* Menu Container */}
            <div className="menu__container">
              <div className="menu__header">
                <span onClick={filterMenu('selAll')}>All</span>
                <span onClick={filterMenu('selMain')}>Main</span>
                <span onClick={filterMenu('selSiesta')}>Siesta</span>
              </div>
              <div className="menu__body">
                { fMenu.map(pick => (
                    <Card 
                      key={pick.key}
                      id={pick.key}
                      cardImg={pick.prodImg}
                      cardAltImg={pick.prodAlt}
                      cardInfo={pick.prodName}
                      cardPrice={pick.prodPrice}
                    />
                  )) }
              </div>
            </div>
          </>
        }
      />

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default Menu
