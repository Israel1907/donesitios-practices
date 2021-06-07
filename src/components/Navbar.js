import React from 'react'
import ModalLogin from '../components/ModalLogin'

import '../styles/Navbar.css';

class Navbar extends React.Component {
    render() {
        return (

            <nav _ngcontent-eiy-c2="" className="navbar fixed-top  navbar-fixed-top  navbar-expand-lg navbar-light bg-light  bot-navbar ">
                <button _ngcontent-eiy-c2="" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right" data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
                    <div _ngcontent-eiy-c2="" className="searchBox">
                        <button _ngcontent-eiy-c2="" className="bttn-gradient bttn-md bttn-warning botonF1 searchButton">
                            <i _ngcontent-eiy-c2="" className="fas fa-search"></i></button>
                    </div>
                </button>
                <button _ngcontent-eiy-c2="" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right" data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
                    <span _ngcontent-eiy-c2="" className="ft-log-in">
                    </span></button><div _ngcontent-eiy-c2="" className="navbar-collapse collapse w-75 order-3 dual-collapse2">
                    <ul _ngcontent-eiy-c2="" className="navbar-nav ml-auto"><li _ngcontent-eiy-c2="" className="nav-item mr-2 my-2">
                        <a _ngcontent-eiy-c2="" className="bttn-gradient bttn-lg bttn-warning btn-register" href="https://donesitios.page.link/DOneSitios">Descargar</a>
                    </li>
                        <li _ngcontent-eiy-c2="" className="nav-item my-2 ">
                            <ModalLogin></ModalLogin>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}

export default Navbar;
