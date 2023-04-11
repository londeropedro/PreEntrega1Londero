import Button from 'react-bootstrap/Button';
import CardWidget from '../CardWidget/CardWidget';
import Stack from 'react-bootstrap/Stack';

const NavBar =() => {
    return(
        <nav className='Nav'>
            <h1 className='Title'>TENIS SHOP PARANÁ</h1>
            <Stack direction="horizontal" gap={2}>
                <div className='col-md-3'>
                    <Button>Raquetas</Button>{' '}
                    <Button>Bolsos</Button>{' '}
                    <Button>Indumentaria</Button>{' '}
                </div>
                <div className="ms-auto m-4">
                    <CardWidget />
                </div>
            </Stack>
        </nav>   
    )
}

export default NavBar
