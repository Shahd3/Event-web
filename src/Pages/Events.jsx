import { Link } from 'react-router-dom'; 
import events from '../data/events.js';
import './style.css'
import React, { useState} from 'react'; 

export default function Events(){

    return (
        
        <section className='E-section'>
            
            <h1 className = 'E-title'> Upcoming Events</h1>
        
        <div className='E-container'> 
        
            {events.map(event =>(
                <div key={event.id} className = 'events'>
                <img src ={event.image} alt={event.title} className = 'E-img'/> 

                <div style = {{padding: '16px', fontSize: '25px'}}>
                    <h3 style={{fontFamily: 'serif'}}>{event.title}</h3>
                    <p style ={{ color: '#555', fontSize: '0.9rem'}}>{event.date}</p> 
                    <p style={{ color: '#888', fontSize: '0.8rem'}}>{event.location}</p>
                    <div style ={{textAlign: 'center', marginTop: '30px'}}>
                        <Link to = {`/events/${event.id}`}>
                         <button className = 'E-btn' >View Details</button>
                    </Link>
                    </div>
                </div>
            </div>
            ))}

        </div>
        </section>
    ); 
    
}