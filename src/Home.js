import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                    alt="Amazon Banner"
                />

                <div className="home__row">
                    <Product
                        id="1234501"
                        title="The Last of Us Part II - PlayStation 4 Ellie Edition"
                        price={419.95}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/91alt4X%2BC4L._SL1500_.jpg"
                    />
                    <Product
                        id="1234502"
                        title="Razer Blade 15 Gaming Laptop - Intel Core i7-8750H 6 Core, GeForce RTX 2060, 15.6 FHD 144Hz, 16GB RAM, 512GB SSD, teclado Chroma RGB, Thunderbolt 3, 0.70"
                        price={1899.88}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61LemXk5tuL._AC_SX679_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="1234503"
                        title="Oficial Microsoft Xbox One Wireless Controller Black"
                        price={61.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/41LO2OX6pRL._SX466_.jpg" 
                    />
                    <Product
                        id="1234504"
                        title="The Art of Game of Thrones, the official book of design from Season 1 to Season 8" 
                        price={44.25} 
                        rating={5} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51Lza3JLgOL._SX381_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="1234505"
                        title="Logitech G502 Lightspeed Wireless Mouse HERO Sensor 25K, PowerPlay and Lightsync RGB - black"
                        price={99.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71uNZAdQOoL._AC_SL1500_.jpg"
                    />
                </div>
                
                <div className="home__row">
                    <Product
                        id="1234506"
                        title="SAMSUNG LC49RG90SSNXZA CRG9 - Monitor de juego curvado, color negro"
                        price={1049.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71tZW1aa%2BPL._AC_SL1500_.jpg"
                    />
                </div>


            </div>
        </div>
    );
}

export default Home;
