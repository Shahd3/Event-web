import { Link } from 'react-router-dom'; 

export default function Header(){
    return (
        <header style = {{
            display : 'flex',
            justifyContent: 'space-between',
            alignItems: 'center', 
            padding :'20px 40px', 
            borderBottom: '3px solid #ccc ', 
            fontFamily: 'limeLight', 
            fontSize: '21px',
            backgroundColor: '#D9D9D9', 
            borderRadius: '40px', 
            position: 'sticky', 
            top: '0', 
            zIndex: 1000,
            margin: '0px 20px'
            
        }}> 
            <nav style= {{
                display: 'flex', 
                gap: '30px', 
            }}>
                <Link to ="/" style={linkStyle}>Home</Link> 
                <Link to ="/events" style={linkStyle}>Events</Link>
                <Link to ="/about" style={linkStyle}>About </Link>
            </nav>
               
        </header>
    );
}


var linkStyle = {
    textDecoration: 'none', 
    color: '#3B3B3B', 
    fontWeight: '16px',
}; 