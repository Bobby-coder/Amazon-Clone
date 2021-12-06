import React from "react";
import './Home.css';
import primeBanner from './Amazon-Prime-Banner.jpg';
import Product from "./Product";

const Home = () => {
    return (
        <>
            <div className='home'>
                <div className='home__container'>

                    <img className='home__banner' src={primeBanner} alt='prime-banner' />

                    <div className='home__option one'>
                        <Product title='Apple iPhone 12 Pro (128GB) - Pacific Blue' price={97900} image={'https://m.media-amazon.com/images/I/71DVgBTdyLL._SL1500_.jpg'} rating={5} />
                        <Product title='JBL T460BT by Harman, Wireless On Ear Headphones with Mic, Pure Bass, Portable, Lightweight & Flat Foldable, Voice Assistant Support for Mobiles (Blue)' price={2799} image={'https://m.media-amazon.com/images/I/51LR5-2F4jS._SL1500_.jpg'} rating={4} />
                        <Product title='Samsung T7 Touch 1TB Up to 1,050MB/s USB 3.2 Gen 2 (10Gbps, Type-C) External Solid State Drive (Portable SSD) Black (MU-PC1T0K)' price={14000} image={'https://m.media-amazon.com/images/I/81RA-R8WvIL._SL1500_.jpg'} rating={4} />
                        <Product title='Scuderia Ferrari Race Day Series 1' price={18360} image={'https://m.media-amazon.com/images/I/81Ilor75CBL._UL1500_.jpg'} rating={4} />
                    </div>

                    <div className='home__option two' >
                        <Product title='HP Pavilion 11th Gen Intel Core i7 15.6 inches FHD Gaming Laptop (16GB RAM/512GB SSD/144Hz/4GB NVIDIA GeForce GTX 1650 Graphics/Windows 10 Home/MS Office/Shadow Black/2.28 Kg), 15-dk2075txs' price={66990} image={'https://m.media-amazon.com/images/I/611VHOvjkES._SL1080_.jpg'} rating={4} />
                        <Product title='Sony Bravia 108 cm (43 inches) Full HD LED Smart TV KLV-43W672G (Black)' price={51140} image={'https://m.media-amazon.com/images/I/81y7qQG1GvL._SL1500_.jpg'} rating={4} />
                    </div>

                    <div className='home__option three'>
                        <Product title='Python Tricks: A Buffet Of Awesome Python Features' price={450} image={'https://images-eu.ssl-images-amazon.com/images/I/418fhXtvPML._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'} rating={4} />
                        <Product title='Django for Beginners: Build Websites with Python and Django' price={3000} image={'https://images-na.ssl-images-amazon.com/images/I/31-KKrO-7ZL._SX404_BO1,204,203,200_.jpg'} rating={5} />
                        <Product title='Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming' price={2450} image={'https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg'} rating={5} />
                        <Product title='The Road to Learn React: Your Journey to Master Plain Yet Pragmatic React.Js' price={2550} image={'https://images-na.ssl-images-amazon.com/images/I/41JAb-hRu7L._SX384_BO1,204,203,200_.jpg'} rating={4} />
                    </div>


                </div>
            </div>
        </>
    )
}

export default Home;