import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget';
import Stack from 'react-bootstrap/Stack';
import { NavLink, Link } from 'react-router-dom';

const NavBar =() => {
    return(
        <nav className='Nav'>
            <Link to='/'>
                <h1 className='Title'>TENIS SHOP PARANÁ</h1>                
            </Link>
            <Stack direction="horizontal" gap={2}>
                <div className='col-md-4'>
                    <NavLink className='Button' to={`/category/Raquetas`}> Raquetas </NavLink>
                    <NavLink className='Button' to={`/category/Bolsos`}> Bolsos </NavLink>
                    <NavLink className='Button' to={`/category/Indumentaria`}> Indumentaria </NavLink>
                </div>
                <div className="ms-auto m-4">
                    <CardWidget />
                </div>
            </Stack>
        </nav>   
    )
}

export default NavBar
