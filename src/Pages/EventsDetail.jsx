import { useParams } from 'react-router-dom';
import events from '../data/events.js';
import './style.css'

export default function EventDetails() {

    const { id } = useParams();
    const event = events.find(e => e.id === id);

    if (!event) return <h2 style={{ padding: '40px' }}> Sorry, Event Not Found! </h2>
    return (
        <section className='ED-section'>
            <div className='ED-container'>
                <img src={event.image} alt={event.title} className='ED-img' />
                <div>
                    <h1 className='ED-title'>{event.title}</h1>
                    <p style={{ fontSize: '1rem', color: '#555' }}>{event.date}</p>
                    <p style={{ fontSize: '1rem', color: '#888' }}>{event.location}</p>
                    <p style={{ marginTop: '10px' }}>{event.description}</p>
                    <button className='ED-btn'> Register! </button>
                </div>
            </div>
        </section>
    );
}

