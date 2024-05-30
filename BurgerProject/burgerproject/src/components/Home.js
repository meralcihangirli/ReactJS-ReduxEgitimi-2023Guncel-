import React from 'react'
import { Link } from 'react-router-dom';
import BackgroundImage from '../assets/5.png';
import '../styles/Home.css';

export const Home = () => {
    return (
        <div className='mainPage' style={{backgroundImage:`url(${BackgroundImage})`}}>
            <div className='order'>
                <Link to="/menu">
                    <button>Sipariş Ver</button>
                </Link>
            </div>
        </div>
    )
}
