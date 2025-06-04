import vid from '../assets/img/AD.gif'
import './style.css'


export default function About() {
    return (
        <section className = 'A-section'>
            <div className='A-container'>
            
            <img src={vid} className = 'A-img'/>
            <p className='A-text'>
                
             <h1 className = 'A-title'> ABOUT  </h1> 

                This is a mini project assigned by MVP Game and Aplication Design company, 
                it is part of my internship journey <br/> to sharpen skills in component-based design,
                routing, and clean UI/UX layouts. This website was built using React.js. 
            </p> 
            </div>
        </section>

    )
};