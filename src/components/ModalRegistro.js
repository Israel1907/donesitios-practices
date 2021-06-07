import React from "react";
import '../styles/app-home.css'
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
} from "reactstrap";
import Storeinfo from "./storeInfo";

class ModalRegistro extends React.Component {

  state = {
    abierto: true,

  };
  openModal = (event) => {

    this.setState({ abierto: !this.state.abierto });



  };

  render() {
    return (
      <>
        <Button _ngcontent-eiy-c2="" className="bttn-gradient bttn-lg bttn-warning btn-login" onClick={this.openModal}>
          dgasdgasd
        </Button>

        <Modal isOpen={this.state.abierto}>
          <ModalHeader>
          </ModalHeader>
          <ModalBody>
            <FormGroup>

              <div _ngcontent-dfs-c8="" class="formulario">
                <div _ngcontent-dfs-c8="" class="sec-logo">
                  <form _ngcontent-dfs-c8="" class="signup-form ng-pristine ng-invalid ng-touched" name="form" novalidate="">
                    <br _ngcontent-dfs-c8="" />
                    <div _ngcontent-dfs-c8="" class="form-row">
                      <div _ngcontent-dfs-c8="" class="form-group col">
                        <label _ngcontent-dfs-c8="" for="email">Email</label>
                        <input _ngcontent-dfs-c8="" class="form-control ng-pristine ng-invalid ng-touched" formcontrolname="email" id="email" name="email" placeholder="donesitios@donesitios.com" required="" type="email" />
                        <small _ngcontent-dfs-c8="" class="form-text text-muted danger">Ingrese el email.</small>

                      </div>
                    </div>
                    <div _ngcontent-dfs-c8="" class="form-row">
                      <div _ngcontent-dfs-c8="" class="form-group col">
                        <label _ngcontent-dfs-c8="" for="password">Contraseña</label>
                        <input _ngcontent-dfs-c8="" class="form-control ng-untouched ng-pristine ng-invalid" formcontrolname="password" id="password" name="password" placeholder="*********" required="" type="password" />
                      </div>
                    </div>
                    <div _ngcontent-dfs-c8="" class="form-row">
                      <div _ngcontent-dfs-c8="" class="form-group col">
                        <label _ngcontent-dfs-c8="" for="nombres">Nombres</label>
                        <input _ngcontent-dfs-c8="" class="form-control ng-untouched ng-pristine ng-invalid" formcontrolname="nombres" id="nombres" name="nombres" placeholder="Luis Miguel" required="" type="text" />
                      </div>
                    </div>
                    <div _ngcontent-dfs-c8="" class="form-row">
                      <div _ngcontent-dfs-c8="" class="form-group col">
                        <label _ngcontent-dfs-c8="" for="apellidos">Apellidos </label>
                        <input _ngcontent-dfs-c8="" class="form-control ng-untouched ng-pristine ng-invalid" formcontrolname="apellidos" id="apellidos" name="apellidos" placeholder="Perez Ruiz" required="" type="text" />
                      </div>
                    </div>
                    <div _ngcontent-dfs-c8="" class="form-row">
                      <div _ngcontent-dfs-c8="" class="form-group col">
                        <label _ngcontent-dfs-c8="" for="celular">Celular </label>
                        <input _ngcontent-dfs-c8="" class="form-control ng-untouched ng-pristine ng-invalid" formcontrolname="celular" id="celular" name="celular" placeholder="0983175441" required="" type="text" />
                      </div>
                    </div>
                    <div _ngcontent-dfs-c8="" class="form-row">
                      <div _ngcontent-dfs-c8="" class="form-group col">
                        <label _ngcontent-dfs-c8="" for="province">Provincia </label>
                        <select _ngcontent-dfs-c8="" class="form-control ng-untouched ng-pristine ng-invalid" formcontrolname="provincia" id="provincia" name="provincia">
                          <option _ngcontent-dfs-c8="" disabled="" selected="" value="">Seleccione una provincia</option>
                          <option _ngcontent-dfs-c8="" value="Azuay">Azuay</option>
                          <option _ngcontent-dfs-c8="" value="Bolivar">Bolivar</option>
                          <option _ngcontent-dfs-c8="" value="Cañar">Cañar</option>
                          <option _ngcontent-dfs-c8="" value="Carchi">Carchi</option>
                          <option _ngcontent-dfs-c8="" value="Chimborazo">Chimborazo</option>
                          <option _ngcontent-dfs-c8="" value="Cotopaxi">Cotopaxi</option>
                          <option _ngcontent-dfs-c8="" value="El Oro">El Oro</option>
                          <option _ngcontent-dfs-c8="" value="Esmeraldas">Esmeraldas</option>
                          <option _ngcontent-dfs-c8="" value="Guayas">Guayas</option>
                          <option _ngcontent-dfs-c8="" value="Imbabura">Imbabura</option>
                          <option _ngcontent-dfs-c8="" value="Loja">Loja</option>
                          <option _ngcontent-dfs-c8="" value="Los Rios">Los Ríos</option>
                          <option _ngcontent-dfs-c8="" value="Manabi">Manabi</option>
                          <option _ngcontent-dfs-c8="" value="Morona Santiago">Morona Santiago</option>
                          <option _ngcontent-dfs-c8="" value="Napo">Napo</option>
                          <option _ngcontent-dfs-c8="" value="Orellana">Orellana</option>
                          <option _ngcontent-dfs-c8="" value="Santa Elena">Santa Elena</option>
                          <option _ngcontent-dfs-c8="" value="santo Domingo">Santo Domingo de los Tsachilas</option>
                          <option _ngcontent-dfs-c8="" value="Sucumbios">Sucumbíos</option>
                          <option _ngcontent-dfs-c8="" value="Pastaza">Pastaza</option>
                          <option _ngcontent-dfs-c8="" value="Pichincha">Pichincha</option>
                          <option _ngcontent-dfs-c8="" value="Tungurahua">Tungurahua</option>
                          <option _ngcontent-dfs-c8="" value="Zamora Chinchipe">Zamora Chinchipe</option>
                        </select>
                      </div>
                    </div>
                    <div _ngcontent-dfs-c8="" class="form-group">
                      <label _ngcontent-dfs-c8="" for="referencia">Dirección laboral </label>
                      <input _ngcontent-dfs-c8="" class="form-control ng-untouched ng-pristine ng-invalid" formcontrolname="direcion" id="direcion" name="direcion" placeholder="Av. Manuel Agustin y 24 de Mayo" required="" type="text" />
                    </div>
                    <div _ngcontent-dfs-c8="" class="form-actions center">
                      <button _ngcontent-dfs-c8="" class="btn btn-raised btn-primary" type="submit" disabled="">
                        <i _ngcontent-dfs-c8="" class="fa fa-check-square-o"></i> Registrarse </button>
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


export default ModalRegistro