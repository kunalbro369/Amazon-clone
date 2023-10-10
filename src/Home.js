import React from 'react';
import "./Home.css"
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <img className="home_image" 
      src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

      {/* Product id,title,price,rating,image */}
      <div className="home_row">
              <Product
                    id='123462'
                    title='Leatherette Side Sling Bags For Women Ladies'
                    price={345}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/71uMUyTBggL._AC_UL480_QL65_.jpg'
                />
                <Product
                    id='123456'
                    title='Lenovo Legion Y540 9th Gen Intel Core i5 15.6 inch FHD Gaming Laptop'
                    price={65490}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/81pl1o7uQ3L._AC_UY327_QL65_.jpg'
                />
      </div>
      <div className="home_row">
                <Product
                    id='123458'
                    title='Apple iPhone 11 (64GB) - White'
                    price={63999.00}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/51o5RmQtroL._AC_UY327_QL65_.jpg'
                    />
                    <Product
                    id='123459'
                    title='Whirlpool 190 L 2 Star Direct-Cool Single Door Refrigerator '
                    price={11990.12}
                    rating={3}
                    image='https://m.media-amazon.com/images/I/61Eu0QD2pZL._AC_UY327_QL65_.jpg'
                    />
                    <Product
                    id='123460'
                    title='RAW BICYCLES Children 20T Sports'
                    price={4099}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/81l04cgQPdL._AC_UL480_QL65_.jpg'
                    />
      </div>
      <div className="home_row">
                    <Product
                            id='122402'
                            title='Nightwear Women Pyjama with Pockets and Rope'
                            price={399}
                            rating={4}
                            image='https://m.media-amazon.com/images/I/71s-yHBfT5L._AC_UL480_QL65_.jpg'
                        />
                        <Product
                            id='113462'
                            title='Denill Women Bellies'
                            price={424}
                            rating={3}
                            image='https://m.media-amazon.com/images/I/71hKITI+HXL._AC_UL480_QL65_.jpg'
                        />
                
      </div>
    </div>
  )
}

export default Home
