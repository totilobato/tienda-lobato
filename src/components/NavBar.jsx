import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget';
import logomauro from '../assets/images/logomauro.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillArchiveFill } from 'react-icons/bs';
import { useCartContext } from "../context/CartContext";
import '../App.css'

export const NavBar = (props) =>{
    const {count} = props
    const {iconCart} = useCartContext
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Nav.Link className="navbar-brand" href={'/'}><img src={logomauro} width="40" height="40" alt="logo"/></Nav.Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
        <li className="nav-item">
        <Nav.Link className="nav-link active" aria-current="page" href={'/category/Fertilizantes'}>Fertilizantes</Nav.Link>
        </li>
        <li className="nav-item">
        <Nav.Link className="nav-link" href={'/category/Sustratos'}>Sustratos</Nav.Link>
        </li>
        <li className="nav-item">
        <Nav.Link className="nav-link" href={'/category/Carpas'}>Carpas</Nav.Link>
        </li>
        <li className="nav-item">
        <Nav.Link className="nav-link" href={'/category/Iluminacion'}>Iluminación</Nav.Link>
        </li>
        <li className="nav-item dropdown">
        <NavDropdown className="nav-link dropdown-toggle" href={'/category/Parafernalia'} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Parafernalia</NavDropdown>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavDropdown.Item className="dropdown-item" href={'/category/parafernalia/picadores'}>Picadores</NavDropdown.Item></li>
            <li><NavDropdown.Item className="dropdown-item" href={'/category/parafernalia/papelesyfiltros'}>Papeles y Filtros</NavDropdown.Item></li>
            <li><NavDropdown.Item className="dropdown-item" href={'/category/parafernalia/bongsypipas'}>Bongs y Pipas</NavDropdown.Item></li>
        </ul>
        </li>
    </ul>
</div>
<BsFillArchiveFill/>
    <Link exact to= '/cart'>
        {iconCart}
        <CartWidget count={count}/>
    </Link>
</nav>
    <h1 className="tituloBorabora">Bora Bora GrowShop</h1>
        </div>   
    )
}