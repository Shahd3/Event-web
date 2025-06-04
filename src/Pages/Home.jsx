import { Link } from 'react-router-dom';
import React from 'react';
import tickets from '../assets/img/tickets.png';
import './style.css'

export default function Home() {
   
    return (
        <section className='home-section'>
            <div className = 'container'>
                <h1 className='home-title'>
                    Find Amazing Events <br /> in Abu Dhabi </h1>
                <Link to='/events'>
                    <button className='btn-1' > Explore </button>
                </Link>
            </div>
            <img className ='H-img' src={tickets} alt='Ticket-Photo' />
        </section>



    );

}

