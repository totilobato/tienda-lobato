import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget';
import logomauro from '../assets/images/logomauro.png';
function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
    <Nav.Link className="navbar-brand" href={'/'}><img src={logomauro} width="40" height="40" alt="logo"/></Nav.Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
        <li className="nav-item">
        <Nav.Link className="nav-link active" aria-current="page" href={'/category/fertilizantes'}>Fertilizantes</Nav.Link>
        </li>
        <li className="nav-item">
        <Nav.Link className="nav-link" href={'/category/sustratos'}>Sustratos</Nav.Link>
        </li>
        <li className="nav-item">
        <Nav.Link className="nav-link" href={'/category/carpas'}>Carpas</Nav.Link>
        </li>
        <li className="nav-item">
        <Nav.Link className="nav-link" href={'/category/iluminacion'}>Iluminación</Nav.Link>
        </li>
        <li className="nav-item dropdown">
        <Nav.Link className="nav-link dropdown-toggle" href={'/category/parafernalia'} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Parafernalia
            </Nav.Link>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Nav.Link className="dropdown-item" href={'/category/parafernalia/picadores'}>Picadores</Nav.Link></li>
            <li><Nav.Link className="dropdown-item" href={'/category/parafernalia/papelesyfiltros'}>Papeles y Filtros</Nav.Link></li>
            <li><Nav.Link className="dropdown-item" href={'/category/parafernalia/bongsypipas'}>Bongs y Pipas</Nav.Link></li>
        </ul>
        </li>
    </ul>
    </div>
</div>
<CartWidget/>
</nav>
    <h1>Bora Bora GrowShop</h1>
        </div>
        
    )
}

export default NavBar
