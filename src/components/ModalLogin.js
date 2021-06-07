import React from "react";
import '../styles/Navbar.css'
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
} from "reactstrap";

class ModalLogin extends React.Component {

  state = {
    abierto: false,

  };
  openModal = () => {
    this.setState({ abierto: !this.state.abierto });
  };

  render() {
    return (
      <>
        <Button _ngcontent-ggt-c2="" className="btn-login" onClick={this.openModal}>
          Ingresar
        </Button>

        <Modal isOpen={this.state.abierto}>
          <ModalHeader>
            <div _ngcontent-pqu-c8="" class="card-img overlap">
              <img _ngcontent-pqu-c8="" alt="element 06" class="mb-1" src="../../../../../assets/img/default/logodone.png" width="150" />
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <div _ngcontent-pqu-c8="" class="card-body">
                <div _ngcontent-pqu-c8="" class="card-block">
                  <h2 _ngcontent-pqu-c8="" class="black text-bold-600">Bienvenido</h2>
                  <form _ngcontent-pqu-c8="" novalidate="" class="ng-pristine ng-invalid ng-touched">
                    <div _ngcontent-pqu-c8="" class="form__group field">
                      <input _ngcontent-pqu-c8="" class="form__field ng-pristine ng-invalid ng-touched" formcontrolname="email" id="email" required="" type="email" />


                      <label _ngcontent-pqu-c8="" class="form__label" for="name">Email</label>
                      <div _ngcontent-pqu-c8="" class="form__group field">
                        <input _ngcontent-pqu-c8="" class="form__field ng-untouched ng-pristine ng-invalid" formcontrolname="password" id="password" required="" type="password" />
                        <label _ngcontent-pqu-c8="" class="form__label" for="name">Contraseña</label>
                      </div>
                      <div _ngcontent-pqu-c8="" class="form-group">
                        <div _ngcontent-pqu-c8="" class="row">
                          <div _ngcontent-pqu-c8="" class="col-md-12">
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-pqu-c8="" class="form-group">
                        <div _ngcontent-pqu-c8="" class="col-md-12">
                          <button _ngcontent-pqu-c8="" class="btn btn-login btn-block btn-raised" type="submit">Iniciar sesión</button>
                          <button _ngcontent-pqu-c8="" class="btn btn-secondary btn-block btn-raised" type="button">Cancelar</button>
                        </div>
                      </div>
                      <div _ngcontent-pqu-c8="" class="card-footer-log">
                        <div _ngcontent-pqu-c8="" class="float-left">
                          <a _ngcontent-pqu-c8="" class="black text-bold-500">Recuperar Contraseña</a>
                        </div>
                        <div _ngcontent-pqu-c8="" class="float-right">
                          <a _ngcontent-pqu-c8="" class="black text-bold-500"><Link to="/premium" >
                            Registrarse</Link>
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </FormGroup>
          </ModalBody>
        </Modal>
      </>
    );
  }
}


export default ModalLogin




