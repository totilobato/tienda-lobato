import CartWidget from './CartWidget';
function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
    <img src="../assets/images/logomauro.png"></img>
    <a className="navbar-brand" href="#">Inicio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Fertilizantes</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Sustratos</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Carpas</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Iluminación</a>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Parafernalia
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Picadores</a></li>
            <li><a className="dropdown-item" href="#">Papeles y Filtros</a></li>
            <li><a className="dropdown-item" href="#">Bongs y Pipas</a></li>
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
