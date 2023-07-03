import Navbar2 from './Navbar2';
import {Routes, Route} from 'react-router-dom';
import Meals from './Meals';

const text = "CuisineTD we always got you back ";
const text2 = "Italian cuisine is renowned for its diverse range of flavors, with dishes like pasta, pizza, and gelato stealing the spotlight. Fresh ingredients, such as tomatoes, olive oil, and herbs, are staples."

const Home = () => {
    return ( 
        <>
            <div className='home' >
                <Navbar2 />
                <div style={{width: '100%'}}>
                    <div className='textColorTitle'>{text}</div>
                    <div className='textColor'>{text2}</div>
                </div>
                
            </div>
            
        </>
        
        
    );
}
 
export default Home;